import { NextResponse } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const role = String(form.get("role") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const resume = form.get("resume");

  if (name.length < 2 || phone.length < 10 || !email || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const stamp = Date.now();
  const dir = path.join(process.cwd(), "uploads", "resumes");
  await mkdir(dir, { recursive: true });

  let resumeFile = "";
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Resume too large" }, { status: 400 });
    }
    const safe = resume.name.replace(/[^\w.\-]+/g, "_");
    resumeFile = `${stamp}-${safe}`;
    const buffer = Buffer.from(await resume.arrayBuffer());
    await writeFile(path.join(dir, resumeFile), buffer);
  }

  const metaDir = path.join(process.cwd(), "data");
  await mkdir(metaDir, { recursive: true });
  const metaPath = path.join(metaDir, "applications.json");
  const { readFile } = await import("node:fs/promises");
  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await readFile(metaPath, "utf8")) as unknown[];
  } catch {
    existing = [];
  }
  existing.push({
    name,
    phone,
    email,
    role,
    message,
    resumeFile,
    receivedAt: new Date().toISOString(),
  });
  await writeFile(metaPath, JSON.stringify(existing, null, 2));

  return NextResponse.json({ ok: true });
}
