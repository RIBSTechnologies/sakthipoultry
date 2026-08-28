import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 6;
const TTL_MS = 10 * 60 * 1000;

type CaptchaPayload = {
  exp: number;
  nonce: string;
  sig: string;
};

function captchaSecret() {
  return (
    process.env.CAPTCHA_SECRET ??
    process.env.SMTP_PASS ??
    "sakthi-poultry-local-captcha"
  );
}

function normalizeAnswer(answer: string) {
  return answer.trim().toUpperCase().replace(/\s+/g, "");
}

function signAnswer(answer: string, exp: number, nonce: string) {
  return createHmac("sha256", captchaSecret())
    .update(`${normalizeAnswer(answer)}:${exp}:${nonce}`)
    .digest("base64url");
}

function encodeToken(payload: CaptchaPayload) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

function decodeToken(token: string): CaptchaPayload | null {
  try {
    const parsed = JSON.parse(
      Buffer.from(token, "base64url").toString("utf8"),
    ) as CaptchaPayload;
    if (
      typeof parsed.exp !== "number" ||
      typeof parsed.nonce !== "string" ||
      typeof parsed.sig !== "string"
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function generateCaptchaCode() {
  const bytes = randomBytes(CODE_LENGTH);
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CHARSET[bytes[i]! % CHARSET.length];
  }
  return code;
}

export function createCaptchaToken(code: string) {
  const exp = Date.now() + TTL_MS;
  const nonce = randomBytes(16).toString("hex");
  const sig = signAnswer(code, exp, nonce);
  return encodeToken({ exp, nonce, sig });
}

export function verifyCaptchaResponse(
  token: string | null | undefined,
  answer: string | null | undefined,
) {
  if (!token?.trim() || !answer?.trim()) return false;

  const payload = decodeToken(token.trim());
  if (!payload || payload.exp < Date.now()) return false;

  const expected = signAnswer(answer, payload.exp, payload.nonce);
  const a = Buffer.from(expected);
  const b = Buffer.from(payload.sig);
  if (a.length !== b.length) return false;

  return timingSafeEqual(a, b);
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function renderCaptchaSvg(code: string) {
  const width = 220;
  const height = 72;
  const chars = code.split("");
  const charWidth = width / (chars.length + 1);

  const noiseLines = Array.from({ length: 7 }, () => {
    const x1 = randomBetween(0, width);
    const y1 = randomBetween(0, height);
    const x2 = randomBetween(0, width);
    const y2 = randomBetween(0, height);
    const opacity = randomBetween(0.15, 0.35);
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#1f4d3a" stroke-opacity="${opacity.toFixed(2)}" stroke-width="1.2" />`;
  }).join("");

  const dots = Array.from({ length: 24 }, () => {
    const cx = randomBetween(0, width);
    const cy = randomBetween(0, height);
    const r = randomBetween(0.6, 1.8);
    return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="#b08a2e" fill-opacity="0.35" />`;
  }).join("");

  const letters = chars
    .map((char, index) => {
      const x = charWidth * (index + 1);
      const y = randomBetween(42, 52);
      const rotate = randomBetween(-18, 18);
      const size = randomBetween(26, 30);
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" fill="#123927" font-family="Georgia, 'Times New Roman', serif" font-size="${size.toFixed(1)}" font-weight="700" transform="rotate(${rotate.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})">${char}</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Security code"><rect width="100%" height="100%" rx="8" fill="#f3f7f5"/><rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="8" fill="none" stroke="#d8e3dc"/>${noiseLines}${dots}${letters}</svg>`;
}

export function createCaptchaChallenge() {
  const code = generateCaptchaCode();
  return {
    token: createCaptchaToken(code),
    svg: renderCaptchaSvg(code),
  };
}

export function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    null
  );
}
