import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getClientIp, verifyCaptchaToken } from "@/lib/captcha";
import { formatEnquiryEmail, sendSiteMail } from "@/lib/mail";
import { leadSchema } from "@/lib/validations";

async function persistEnquiry(data: Record<string, unknown>) {
  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "enquiries.json");
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await readFile(file, "utf8")) as unknown[];
    } catch {
      existing = [];
    }
    existing.push({ ...data, receivedAt: new Date().toISOString() });
    await writeFile(file, JSON.stringify(existing, null, 2));
  } catch {
    // Optional local backup only — email delivery is the primary path.
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const captchaToken =
    typeof (body as { captchaToken?: unknown }).captchaToken === "string"
      ? (body as { captchaToken: string }).captchaToken
      : null;

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const captchaOk = await verifyCaptchaToken(captchaToken, getClientIp(request));
  if (!captchaOk) {
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 403 });
  }

  const mail = formatEnquiryEmail(parsed.data);

  try {
    await sendSiteMail(mail);
  } catch {
    return NextResponse.json(
      { error: "Could not send enquiry email" },
      { status: 503 },
    );
  }

  await persistEnquiry(parsed.data);

  return NextResponse.json({ ok: true });
}
