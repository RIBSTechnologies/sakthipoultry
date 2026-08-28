"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { jobs } from "@/lib/data";
import { site } from "@/lib/site";
import { FormCaptcha, type CaptchaValue } from "@/components/forms/FormCaptcha";
import { Button } from "@/components/ui/Button";

export function CareerForm({ defaultRole = "" }: { defaultRole?: string }) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [captcha, setCaptcha] = useState<CaptchaValue | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{
    name: string;
    phone: string;
    email: string;
    role: string;
    message: string;
    resume: FileList;
    website: string;
  }>({
    defaultValues: { role: defaultRole, website: "" },
  });

  const onSubmit = async (values: {
    name: string;
    phone: string;
    email: string;
    role: string;
    message: string;
    resume: FileList;
    website: string;
  }) => {
    if (!captcha?.token || !captcha.answer.trim()) {
      setStatus("err");
      return;
    }
    const data = new FormData();
    data.set("name", values.name);
    data.set("phone", values.phone);
    data.set("email", values.email);
    data.set("role", values.role);
    data.set("message", values.message ?? "");
    data.set("website", values.website ?? "");
    data.set("captchaToken", captcha.token);
    data.set("captchaAnswer", captcha.answer);
    if (values.resume?.[0]) data.set("resume", values.resume[0]);

    const res = await fetch("/api/careers", { method: "POST", body: data });
    if (!res.ok) {
      setCaptcha(null);
      setCaptchaKey((key) => key + 1);
      setStatus("err");
      return;
    }
    setStatus("ok");
    setCaptcha(null);
    setCaptchaKey((key) => key + 1);
    reset();
  };

  const field =
    "w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm outline-none ring-gold/40 focus:ring-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
          Full name *
        </span>
        <input className={field} {...register("name", { required: true, minLength: 2 })} />
        {errors.name ? <p className="mt-1 text-xs text-red-700">Enter your name</p> : null}
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Mobile *
          </span>
          <input
            className={field}
            {...register("phone", { required: true, minLength: 10 })}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
            Email *
          </span>
          <input
            type="email"
            className={field}
            {...register("email", { required: true })}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
          Role *
        </span>
        <select className={field} {...register("role", { required: true })}>
          <option value="">Select a role</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.title}>
              {job.title}
            </option>
          ))}
          <option value="General application">General application</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
          Resume (PDF, DOC, max 5 MB)
        </span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="text-sm"
          {...register("resume")}
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted">
          Cover note
        </span>
        <textarea className={`${field} min-h-28`} {...register("message")} />
      </label>
      {status === "ok" ? (
        <p className="rounded-sm bg-emerald/10 px-3 py-2 text-sm text-forest-mid">
          Application received. We will be in touch if there is a match.
        </p>
      ) : null}
      {status === "err" ? (
        <p className="rounded-sm bg-red-50 px-3 py-2 text-sm text-red-800">
          {!captcha?.answer.trim()
            ? "Please enter the security code before submitting."
            : `Could not submit. Please email your resume to ${site.email}.`}
        </p>
      ) : null}

      <FormCaptcha key={captchaKey} onChange={setCaptcha} />

      <Button
        type="submit"
        variant="gold"
        size="lg"
        disabled={isSubmitting || !captcha?.token || !captcha.answer.trim()}
      >
        {isSubmitting ? "Uploading…" : "Apply online"}
      </Button>
    </form>
  );
}
