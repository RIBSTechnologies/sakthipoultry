"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { leadSchema, type LeadInput } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { products, partnerSegments } from "@/lib/data";
import { enquiryLabel } from "@/lib/enquiries";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { FormCaptcha, type CaptchaValue } from "@/components/forms/FormCaptcha";

type Props = {
  type: LeadInput["type"];
  productSlug?: string;
  role?: string;
  compact?: boolean;
  onSuccess?: () => void;
};

export function LeadForm({ type, productSlug, role, compact, onSuccess }: Props) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [captcha, setCaptcha] = useState<CaptchaValue | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      type,
      product: productSlug ?? "",
      role: role ?? "",
      website: "",
      email: "",
    },
  });

  const onSubmit = async (values: LeadInput) => {
    setStatus("idle");
    setErrorMessage("");
    if (!captcha?.token || !captcha.answer.trim()) {
      setErrorMessage("Please enter the security code before submitting.");
      setStatus("err");
      return;
    }
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        captchaToken: captcha.token,
        captchaAnswer: captcha.answer,
      }),
    });
    if (!res.ok) {
      let message = `Something went wrong. Please email us at ${site.email}.`;
      try {
        const data = (await res.json()) as { error?: string; code?: string };
        if (data.code === "captcha") {
          message = "The security code was incorrect or expired. Please try again.";
        } else if (data.error) {
          message = `${data.error} Please email us at ${site.email} if this continues.`;
        }
      } catch {
        // Keep generic fallback message.
      }
      setErrorMessage(message);
      setCaptcha(null);
      setCaptchaKey((key) => key + 1);
      setStatus("err");
      return;
    }
    setStatus("ok");
    setCaptcha(null);
    setCaptchaKey((key) => key + 1);
    reset();
    onSuccess?.();
  };

  const field = "w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none ring-gold/40 focus:ring-2";
  const err = "mt-1 text-xs text-red-700";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4" noValidate>
      <input type="hidden" {...register("type")} />
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {enquiryLabel(type)}
      </p>

      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Full name *
          </span>
          <input className={field} {...register("name")} autoComplete="name" />
          {errors.name ? <p className={err}>{errors.name.message}</p> : null}
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Mobile *
          </span>
          <input className={field} {...register("phone")} inputMode="tel" autoComplete="tel" />
          {errors.phone ? <p className={err}>{errors.phone.message}</p> : null}
        </label>
      </div>

      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Email
          </span>
          <input className={field} type="email" {...register("email")} autoComplete="email" />
          {errors.email ? <p className={err}>{errors.email.message}</p> : null}
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Organisation
          </span>
          <input className={field} {...register("organisation")} />
        </label>
      </div>

      {type === "product" ? (
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Product of interest
          </span>
          <select className={field} {...register("product")}>
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      {type === "farmer" ? (
        <>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
              Farm location *
            </span>
            <input
              className={field}
              placeholder="Village, taluk, district"
              {...register("farmLocation")}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
              Shed capacity (birds)
            </span>
            <input className={field} {...register("shedCapacity")} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
                Water availability
              </span>
              <select className={field} {...register("waterAvailable")}>
                <option value="">Select</option>
                <option value="borewell">Borewell</option>
                <option value="open-well">Open well</option>
                <option value="panchayat">Panchayat / municipal</option>
                <option value="limited">Limited / seasonal</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
                Electricity availability
              </span>
              <select className={field} {...register("electricityAvailable")}>
                <option value="">Select</option>
                <option value="three-phase">Three phase</option>
                <option value="single-phase">Single phase</option>
                <option value="generator">Generator backup</option>
                <option value="limited">Limited</option>
              </select>
            </label>
          </div>
        </>
      ) : null}

      {type === "dealer" || type === "vendor" ? (
        <>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
              Partner segment
            </span>
            <select className={field} {...register("partnerSegment")}>
              <option value="">Select</option>
              {partnerSegments.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
              GSTIN
            </span>
            <input className={field} {...register("gstin")} />
          </label>
        </>
      ) : null}

      {type === "career" ? (
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Role
          </span>
          <input className={field} {...register("role")} />
        </label>
      ) : null}

      <FormCaptcha key={captchaKey} onChange={setCaptcha} />

      <label className="block">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
          Message
        </span>
        <textarea className={cn(field, "min-h-28")} {...register("message")} />
      </label>

      {status === "ok" ? (
        <p className="rounded-sm bg-emerald/10 px-3 py-2 text-sm text-forest-mid" role="status">
          Thank you. Our team will contact you shortly.
        </p>
      ) : null}
      {status === "err" ? (
        <p className="rounded-sm bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {errorMessage || `Something went wrong. Please email us at ${site.email}.`}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        disabled={isSubmitting || !captcha?.token || !captcha.answer.trim()}
      >
        {isSubmitting ? "Sending…" : "Submit enquiry"}
      </Button>
    </form>
  );
}
