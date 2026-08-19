"use client";

import { useState } from "react";
import { ArrowRight, Egg, Factory, Bird, Wheat, Home, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { asset, cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    step: "01",
    title: "Parent Breeder Farms",
    summary: "Carefully managed parent stock with biosecurity protocols.",
    icon: Home,
    image: asset("farm-aerial-sheds.jpg"),
  },
  {
    step: "02",
    title: "Hatching Eggs",
    summary: "High viability and controlled storage handling.",
    icon: Egg,
    image: asset("healthy-birds-02.jpg"),
  },
  {
    step: "03",
    title: "Poultry Hatchery",
    summary: "Regulated incubation producing healthy day-old chicks.",
    icon: Factory,
    image: asset("farm-complex.jpg"),
  },
  {
    step: "04",
    title: "Poultry Feed",
    summary: "Formulated Sakthi Bromix for optimal growth stages.",
    icon: Wheat,
    image: asset("feed-bags-chicks.jpg"),
  },
  {
    step: "05",
    title: "Broiler Farms",
    summary: "Contracted farming network with veterinary & technical backing.",
    icon: Bird,
    image: asset("aerial-farm-01.jpg"),
  },
  {
    step: "06",
    title: "Market Distribution",
    summary: "Streamlined logistics to serve the South Indian market.",
    icon: Truck,
    image: asset("aerial-complex-02.jpg"),
  },
];

export function ValueChain() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section
      id="value-chain"
      aria-labelledby="value-chain-heading"
      className="scroll-mt-28 bg-[#eef6f2] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="value-chain-heading"
          eyebrow="Integrated Value Chain"
          title="One Integrated Value Chain. Quality from Beginning to Market."
          subtitle="Quality poultry production depends on every stage working together."
        />

        <ol className="relative mt-12 grid gap-3 lg:grid-cols-6">
          <span
            className="pointer-events-none absolute top-[1.65rem] right-[8%] left-[8%] hidden h-px bg-line lg:block"
            aria-hidden
          />
          {steps.map((item, i) => {
            const Icon = item.icon;
            const selected = i === active;
            return (
              <li key={item.step} className="relative">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex h-full w-full flex-col rounded-2xl border bg-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md",
                    selected
                      ? "border-gold ring-2 ring-gold/30"
                      : "border-line hover:border-gold/40",
                  )}
                  aria-pressed={selected}
                  aria-controls="value-chain-panel"
                >
                  <span
                    className={cn(
                      "relative z-10 mb-3 inline-flex size-10 items-center justify-center rounded-full text-sm font-bold",
                      selected
                        ? "bg-gold text-white"
                        : "bg-forest text-white",
                    )}
                  >
                    {item.step}
                  </span>
                  <Icon
                    className={cn("mb-2 size-5", selected ? "text-gold" : "text-forest")}
                    aria-hidden
                  />
                  <span className="font-display text-base font-medium text-ink">
                    {item.title}
                  </span>
                  <span className="mt-1 text-xs leading-relaxed text-muted">
                    {item.summary}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div
          id="value-chain-panel"
          className="mt-8 grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-2"
        >
          <div className="relative min-h-[220px] lg:min-h-[320px]">
            <MediaImage
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Stage {current.step}
            </p>
            <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{current.summary}</p>
          </div>
        </div>

        <Button href="/operations" variant="accent" size="lg" className="mt-10">
          Explore Our Operations
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
