"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import { MediaImage } from "@/components/ui/MediaImage";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";

export function ProductGrid() {
  const [open, setOpen] = useState<string | null>(null);
  const [enquire, setEnquire] = useState<string | null>(null);
  const product = products.find((p) => p.slug === open);
  const enquireProduct = products.find((p) => p.slug === enquire);

  return (
    <>
      <div className="grid gap-8">
        {products.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="scroll-mt-32 grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-2"
          >
            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <MediaImage src={p.image} alt={p.name} fill className="object-cover" sizes="50vw" />
            </div>
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {p.category}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-forest">{p.name}</h2>
              <p className="mt-3 text-muted leading-relaxed">{p.short}</p>
              <ul className="mt-6 grid gap-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-forest">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
              {"variants" in p && p.variants ? (
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {p.variants.map((v) => (
                    <div key={v.name} className="border border-line p-3">
                      <p className="text-sm font-semibold text-forest">{v.name}</p>
                      <p className="mt-1 text-xs text-muted">{v.detail}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button type="button" variant="outline" onClick={() => setOpen(p.slug)}>
                  Specifications
                </Button>
                <Button type="button" variant="gold" onClick={() => setEnquire(p.slug)}>
                  Enquire
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal
        open={Boolean(product)}
        onClose={() => setOpen(null)}
        title={product?.name ?? "Specifications"}
      >
        {product ? (
          <dl className="grid gap-4">
            {product.specs.map((s) => (
              <div key={s.label} className="border-b border-line pb-3">
                <dt className="text-xs uppercase tracking-[0.16em] text-gold">{s.label}</dt>
                <dd className="mt-1 text-forest">{s.value}</dd>
              </div>
            ))}
            <Button type="button" variant="gold" onClick={() => {
              setOpen(null);
              setEnquire(product.slug);
            }}>
              Enquire about this product
            </Button>
          </dl>
        ) : null}
      </Modal>

      <Modal
        open={Boolean(enquireProduct)}
        onClose={() => setEnquire(null)}
        title={`Enquire — ${enquireProduct?.name ?? ""}`}
      >
        {enquireProduct ? (
          <LeadForm
            key={enquireProduct.slug}
            type="product"
            productSlug={enquireProduct.slug}
            onSuccess={() => setEnquire(null)}
          />
        ) : null}
      </Modal>
    </>
  );
}
