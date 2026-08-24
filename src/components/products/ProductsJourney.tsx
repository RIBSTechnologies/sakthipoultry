import { Quote } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { productJourney } from "@/lib/products";

export function ProductsJourney() {
  return (
    <section
      aria-labelledby="products-journey-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="products-journey-heading"
            title="From Integrated Operations to Quality Poultry Products"
            subtitle="Every Sakthi Poultry product connects to a wider production journey."
          />
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productJourney.map((item, index) => (
            <StaggerItem key={item} className="h-full">
              <article className="flex h-full items-center gap-4 rounded-2xl border border-line bg-cream-2 p-5 shadow-sm">
                <span className="font-display text-2xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg leading-snug text-ink">{item}</h3>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <p className="mt-10 text-base leading-relaxed text-muted">
            This integrated approach connects the important stages of commercial
            broiler production while keeping quality at the centre of our
            operations.
          </p>
          <aside className="mt-8 rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-9">
            <div className="flex items-center gap-3">
              <Quote className="size-7 shrink-0 text-gold-light" aria-hidden />
              <p className="font-display text-2xl leading-none sm:text-3xl">
                Quality Forever
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
              It is more than our motto. It represents the principle behind how
              we approach poultry production and long-term business
              relationships.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
