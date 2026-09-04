import { Reveal } from "@/components/ui/Reveal";

export function ProductsWhy() {
  return (
    <section
      aria-labelledby="products-why-heading"
      className="bg-cream-2 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="products-why-heading"
            className="font-display text-[2.7rem] font-medium tracking-tight leading-tight text-ink"
          >
            Quality You Can Trace
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Our products are backed by an integrated poultry value chain—from
            breeding and nutrition to farming and market supply.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
