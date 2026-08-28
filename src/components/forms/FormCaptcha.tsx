"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { turnstileSiteKey } from "@/lib/captcha-client";

type Props = {
  onTokenChange: (token: string | null) => void;
  action?: string;
};

export function FormCaptcha({ onTokenChange, action = "submit" }: Props) {
  const siteKey = turnstileSiteKey();

  if (!siteKey) return null;

  return (
    <div className="min-h-[65px]">
      <Turnstile
        siteKey={siteKey}
        options={{
          action,
          appearance: "interaction-only",
          theme: "light",
        }}
        onSuccess={(token) => onTokenChange(token)}
        onExpire={() => onTokenChange(null)}
        onError={() => onTokenChange(null)}
      />
    </div>
  );
}
