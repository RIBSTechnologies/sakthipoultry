export function turnstileSiteKey() {
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
}

export function isCaptchaEnabled() {
  return Boolean(turnstileSiteKey());
}
