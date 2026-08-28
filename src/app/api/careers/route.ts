import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getClientIp, verifyCaptchaToken } from "@/lib/captcha";
import { formatCareerEmail, sendSiteMail } from "@/lib/mail";

async function persistApplication(data: Record<string, unknown>) {
  try {
    const metaDir = path.join(process.cwd(), "data");
    await mkdir(metaDir, { recursive: true });
    const metaPath = path.join(metaDir, "applications.json");
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await readFile(metaPath, "utf8")) as unknown[];
    } catch {
      existing = [];
    }
    existing.push({ ...data, receivedAt: new Date().toISOString() });
    await writeFile(metaPath, JSON.stringify(existing, null, 2));
  } catch {
    // Optional local backup only — email delivery is the primary path.
  }
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const role = String(form.get("role") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const website = String(form.get("website") ?? "").trim();
  const captchaToken = String(form.get("captchaToken") ?? "").trim();
  const resume = form.get("resume");

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2 || phone.length < 10 || !email || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const captchaOk = await verifyCaptchaToken(
    captchaToken || null,
    getClientIp(request),
  );
  if (!captchaOk) {
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 403 });
  }

  let resumeFile = "";
  let resumeAttachment: { filename: string; content: Buffer } | undefined;

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Resume too large" }, { status: 400 });
    }
    const safe = resume.name.replace(/[^\w.\-]+/g, "_");
    resumeFile = safe;
    resumeAttachment = {
      filename: safe,
      content: Buffer.from(await resume.arrayBuffer()),
    };

    try {
      const dir = path.join(process.cwd(), "uploads", "resumes");
      await mkdir(dir, { recursive: true });
      await writeFile(
        path.join(dir, `${Date.now()}-${safe}`),
        resumeAttachment.content,
      );
    } catch {
      // Optional local backup only.
    }
  }

  const mail = formatCareerEmail({
    name,
    phone,
    email,
    role,
    message,
    resumeFile: resumeFile || undefined,
  });

  try {
    await sendSiteMail({
      ...mail,
      attachments: resumeAttachment ? [resumeAttachment] : undefined,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not send application email" },
      { status: 503 },
    );
  }

  await persistApplication({
    name,
    phone,
    email,
    role,
    message,
    resumeFile,
  });

  return NextResponse.json({ ok: true });
}
