import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/home/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { productEnquireHref } from "@/lib/products";
import { asset } from "@/lib/utils";

export function ProductsClose() {
  return (
    <section
      aria-labelledby="products-close-heading"
      className="relative isolate overflow-hidden bg-forest py-20 sm:py-24 lg:py-28"
    >
      <SectionBackdrop
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        overlay="from-forest/90 via-forest/82 to-forest-deep/88"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Sakthi Poultry Private Limited
          </p>
          <h2
            id="products-close-heading"
            className="mt-3 font-display text-3xl font-medium text-white sm:text-5xl"
          >
            Quality Forever. Integrated Poultry Operations. Dependable Poultry
            Products.
          </h2>
          <div className="mt-8 inline-flex items-center gap-3">
            <Quote className="size-6 text-gold-light" aria-hidden />
            <p className="whitespace-nowrap font-display text-3xl text-white sm:text-4xl">
              Quality Forever
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={productEnquireHref()} variant="accent">
              Enquire About Our Products
            </Button>
            <Button href="/operations" variant="outlineLight">
              Explore Our Operations
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
