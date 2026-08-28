"use client";

import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export type CaptchaValue = {
  token: string;
  answer: string;
};

type Props = {
  onChange: (value: CaptchaValue | null) => void;
};

export function FormCaptcha({ onChange }: Props) {
  const [svg, setSvg] = useState("");
  const [token, setToken] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadCaptcha = useCallback(async () => {
    setLoading(true);
    setError(false);
    setAnswer("");
    onChange(null);

    try {
      const res = await fetch("/api/captcha", { cache: "no-store" });
      if (!res.ok) throw new Error("Captcha unavailable");
      const data = (await res.json()) as { token?: string; svg?: string };
      if (!data.token || !data.svg) throw new Error("Invalid captcha payload");
      setToken(data.token);
      setSvg(data.svg);
    } catch {
      setError(true);
      setToken("");
      setSvg("");
    } finally {
      setLoading(false);
    }
  }, [onChange]);

  useEffect(() => {
    void loadCaptcha();
  }, [loadCaptcha]);

  useEffect(() => {
    if (!token || !answer.trim()) {
      onChange(null);
      return;
    }
    onChange({ token, answer });
  }, [token, answer, onChange]);

  const field =
    "w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm uppercase tracking-[0.25em] text-ink outline-none ring-gold/40 focus:ring-2";

  return (
    <div className="rounded-sm border border-line bg-[#f3f7f5] p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Security check
        </p>
        <button
          type="button"
          onClick={() => void loadCaptcha()}
          className="inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-gold"
          aria-label="Refresh security code"
        >
          <RefreshCw className="size-3.5" aria-hidden />
          Refresh
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div
          className="overflow-hidden rounded-sm border border-line bg-white"
          aria-hidden={loading || error}
          dangerouslySetInnerHTML={
            loading || error || !svg ? undefined : { __html: svg }
          }
        />
        {loading ? (
          <p className="text-sm text-muted">Loading security code…</p>
        ) : null}
        {error ? (
          <p className="text-sm text-red-700">
            Could not load security code. Please refresh and try again.
          </p>
        ) : null}
      </div>

      <label className="mt-3 block">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
          Enter the code shown above *
        </span>
        <input
          className={field}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          autoComplete="off"
          inputMode="text"
          maxLength={8}
          disabled={loading || error || !token}
          aria-label="Security code"
        />
      </label>
    </div>
  );
}
