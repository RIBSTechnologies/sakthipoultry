import nodemailer from "nodemailer";
import type { LeadInput } from "@/lib/validations";

type MailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  from: string;
};

function getMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  return {
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    user,
    pass,
    to: process.env.MAIL_TO ?? user,
    from: process.env.MAIL_FROM ?? user,
  };
}

export function isMailConfigured() {
  return getMailConfig() !== null;
}

type SendMailOptions = {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: Array<{ filename: string; content: Buffer }>;
};

export async function sendSiteMail(options: SendMailOptions) {
  const config = getMailConfig();
  if (!config) {
    throw new Error("SMTP is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
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
}

const enquiryTypeLabels: Record<LeadInput["type"], string> = {
  product: "Product / bulk purchase",
  farmer: "Farmer onboarding",
  dealer: "Dealer & feed distribution",
  vendor: "Vendor / supplier",
  general: "General enquiry",
  career: "Career application",
};

function line(label: string, value?: string | null) {
  if (!value?.trim()) return null;
  return `${label}: ${value.trim()}`;
}

export function formatEnquiryEmail(data: LeadInput) {
  const lines = [
    "New website enquiry",
    "",
    line("Type", enquiryTypeLabels[data.type]),
    line("Name", data.name),
    line("Phone", data.phone),
    line("Email", data.email),
    line("Organisation", data.organisation),
    line("Product", data.product),
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
    subject: `[Sakthi Poultry] ${enquiryTypeLabels[data.type]} — ${data.name}`,
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
  const lines = [
    "New career application",
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
    subject: `[Sakthi Poultry] Career application — ${input.name}`,
    text: lines.join("\n"),
    replyTo: input.email,
  };
}
