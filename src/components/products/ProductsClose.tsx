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
      className="relative isolate overflow-hidden bg-ink py-12 sm:py-16 lg:py-20"
    >
      <SectionBackdrop
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Sakthi Poultry Private Limited
          </p>
          <h2
            id="products-close-heading"
            className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.7rem] text-white"
          >
            Quality Forever. Integrated Poultry Operations. Dependable Poultry
            Products.
          </h2>
          <div className="mt-8 inline-flex items-center gap-3">
            <Quote className="size-6 text-gold-light" aria-hidden />
            <p className="font-display text-3xl sm:text-[2.7rem] leading-tight text-white">
              Quality Forever
            </p>
          </div>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={productEnquireHref()} variant="accent" className="w-full sm:w-auto">
              Enquire About Our Products
            </Button>
            <Button href="/operations" variant="accent" className="w-full sm:w-auto">
              Explore Our Operations
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
