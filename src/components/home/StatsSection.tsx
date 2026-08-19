import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";
import { asset } from "@/lib/utils";

const metrics = [
  {
    value: "30+",
    unit: "Years",
    label: "More Than Three Decades of Poultry Experience",
  },
  {
    value: "1.50",
    unit: "Crore",
    label: "Broiler Birds Annually (Supported by Sakthi Bromix)",
  },
  {
    value: "12,000",
    unit: "Tonnes",
    label: "Monthly Feed Production Capacity (Automated Plant)",
  },
  {
    value: "100%",
    unit: "Integrated",
    label: "Seamless Connection from Breeding to Market",
  },
];

export function StatsSection() {
  return (
    <section
      id="strength"
      aria-labelledby="stats-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-forest-deep py-20 text-white sm:py-24 lg:py-28"
    >
      <SectionBackdrop src={asset("aerial-farm-03.jpg")} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="stats-heading"
          invert
          eyebrow="Strength & Scale"
          title="Built for Scale. Designed for Consistency."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <article
              key={item.unit}
              className="group rounded-2xl border border-white/15 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <p className="font-display text-4xl font-medium text-forest sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                {item.unit}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.label}</p>
            </article>
          ))}
        </div>

        <Button
          href="/operations"
          variant="outline"
          size="lg"
          className="mt-10 border-white text-white hover:bg-white hover:text-forest-deep"
        >
          Discover Our Capabilities
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
