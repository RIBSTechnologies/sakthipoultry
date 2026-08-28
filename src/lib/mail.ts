import nodemailer from "nodemailer";
import { products } from "@/lib/data";
import { enquiryLabel } from "@/lib/enquiries";
import type { LeadInput } from "@/lib/validations";

type MailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  from: string;
};

type SendMailOptions = {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: Array<{ filename: string; content: Buffer }>;
};

function getMailTargets() {
  const user = process.env.SMTP_USER;
  return {
    to: process.env.MAIL_TO ?? user ?? "",
    from: process.env.MAIL_FROM ?? user ?? "",
  };
}

function getMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const targets = getMailTargets();

  if (!targets.to || !targets.from) return null;

  if (!host || !user || !pass) {
    if (getRelayConfig()) {
      return {
        host: "",
        port: 465,
        user: user ?? targets.from,
        pass: pass ?? "",
        to: targets.to,
        from: targets.from,
      };
    }
    return null;
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    user,
    pass,
    to: targets.to,
    from: targets.from,
  };
}

function getRelayConfig() {
  const url = process.env.MAIL_RELAY_URL?.trim();
  const secret = process.env.MAIL_RELAY_SECRET?.trim();
  if (!url || !secret) return null;
  return { url, secret };
}

export function isMailConfigured() {
  return getMailConfig() !== null || getRelayConfig() !== null;
}

async function sendViaRelay(config: MailConfig, options: SendMailOptions) {
  const relay = getRelayConfig();
  if (!relay) return false;

  const response = await fetch(relay.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${relay.secret}`,
    },
    body: JSON.stringify({
      to: config.to,
      from: config.from,
      subject: options.subject,
      text: options.text,
      replyTo: options.replyTo,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Mail relay failed (${response.status})${detail ? `: ${detail}` : ""}`);
  }

  return true;
}

async function sendViaSmtp(config: MailConfig, options: SendMailOptions) {
  const transportOptions = [
    { port: config.port, secure: config.port === 465 },
    { port: 587, secure: false },
  ];

  let lastError: unknown;

  for (const transport of transportOptions) {
    try {
      const transporter = nodemailer.createTransport({
        host: config.host,
        port: transport.port,
        secure: transport.secure,
        requireTLS: !transport.secure,
        auth: {
          user: config.user,
          pass: config.pass,
        },
        connectionTimeout: 15_000,
        greetingTimeout: 15_000,
        socketTimeout: 20_000,
        tls: {
          minVersion: "TLSv1.2",
          servername: config.host,
        },
      });

      await transporter.sendMail({
        from: config.from,
        to: config.to,
        replyTo: options.replyTo,
        subject: options.subject,
        text: options.text,
        attachments: options.attachments,
      });

      return;
    } catch (error) {
      lastError = error;
      console.error("[mail] SMTP attempt failed", {
        host: config.host,
        port: transport.port,
        message: error instanceof Error ? error.message : "Unknown SMTP error",
      });
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Could not deliver email through SMTP");
}

export async function sendSiteMail(options: SendMailOptions) {
  const config = getMailConfig();
  if (!config) {
    throw new Error("SMTP is not configured");
  }

  if (getRelayConfig()) {
    await sendViaRelay(config, options);
    return;
  }

  if (!config.host || !config.pass) {
    throw new Error("SMTP is not configured");
  }

  await sendViaSmtp(config, options);
}

const enquiryTypeLabels: Record<LeadInput["type"], string> = {
  product: enquiryLabel("product"),
  farmer: enquiryLabel("farmer"),
  dealer: enquiryLabel("dealer"),
  vendor: enquiryLabel("vendor"),
  general: enquiryLabel("general"),
  career: enquiryLabel("career"),
};

function productNameFromSlug(slug?: string | null) {
  if (!slug?.trim()) return null;
  return products.find((item) => item.slug === slug.trim())?.name ?? slug.trim();
}

function line(label: string, value?: string | null) {
  if (!value?.trim()) return null;
  return `${label}: ${value.trim()}`;
}

export function formatEnquiryEmail(data: LeadInput) {
  const enquiryType = enquiryTypeLabels[data.type];
  const productName = productNameFromSlug(data.product);

  const lines = [
    "Website enquiry received",
    "",
    `Enquiry type: ${enquiryType}`,
    "----------------------------------------",
    "",
    line("Name", data.name),
    line("Phone", data.phone),
    line("Email", data.email),
    line("Organisation", data.organisation),
    line("Product of interest", productName),
    line("Role", data.role),
    line("Partner segment", data.partnerSegment),
    line("GSTIN", data.gstin),
    line("Farm location", data.farmLocation),
    line("Shed capacity", data.shedCapacity),
    line("Water available", data.waterAvailable),
    line("Electricity available", data.electricityAvailable),
    line("Message", data.message),
    "",
    `Submitted at: ${new Date().toISOString()}`,
  ].filter(Boolean);

  return {
    subject: `[${enquiryType}] Sakthi Poultry website form — ${data.name}`,
    text: lines.join("\n"),
    replyTo: data.email?.trim() || undefined,
  };
}

export function formatCareerEmail(input: {
  name: string;
  phone: string;
  email: string;
  role: string;
  message: string;
  resumeFile?: string;
}) {
  const enquiryType = enquiryLabel("career");
  const lines = [
    "Website enquiry received",
    "",
    `Enquiry type: ${enquiryType}`,
    "----------------------------------------",
    "",
    line("Name", input.name),
    line("Phone", input.phone),
    line("Email", input.email),
    line("Role", input.role),
    line("Cover note", input.message),
    input.resumeFile ? `Resume: attached (${input.resumeFile})` : "Resume: not attached",
    "",
    `Submitted at: ${new Date().toISOString()}`,
  ].filter(Boolean);

  return {
    subject: `[${enquiryType}] Sakthi Poultry website form — ${input.name}`,
    text: lines.join("\n"),
    replyTo: input.email,
  };
}

export function mailDeliveryErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.includes("SMTP is not configured")) {
    return "Email delivery is not configured on the server yet.";
  }
  return "We could not deliver your enquiry email right now.";
}
