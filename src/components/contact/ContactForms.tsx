"use client";

import { useSearchParams } from "next/navigation";
import { LeadForm } from "@/components/forms/LeadForm";
import { enquiryTypes } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

type EnquiryId = (typeof enquiryTypes)[number]["id"];
const allowed = new Set<string>(enquiryTypes.map((t) => t.id));

export function ContactForms() {
  const params = useSearchParams();
  const raw = params.get("type") ?? "product";
  const type: EnquiryId = allowed.has(raw) ? (raw as EnquiryId) : "product";
  const productSlug = params.get("product") ?? undefined;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {enquiryTypes.map((t) => (
          <Link
            key={t.id}
            href={`/contact?type=${t.id}`}
            className={cn(
              "rounded-sm border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em]",
              type === t.id
                ? "border-forest bg-forest text-white"
                : "border-line bg-white text-forest hover:border-gold",
            )}
            scroll={false}
          >
            {t.label}
          </Link>
        ))}
      </div>
      <div className="mt-8 border border-line bg-white p-6 sm:p-8">
        <LeadForm type={type} productSlug={type === "product" ? productSlug : undefined} />
      </div>
    </div>
  );
}
