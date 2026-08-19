"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { asset, cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

const pillars = [
  {
    title: "Breeder Management",
    text: "Parent stock is managed with biosecurity zoning, nutrition and flock monitoring so the next generation starts from a disciplined genetic and health foundation.",
    image: asset("farm-aerial-sheds.jpg"),
  },
  {
    title: "Hatchery Biosecurity",
    text: "Incubation, hygiene and chick handling follow controlled protocols designed to protect livability from egg receipt through dispatch.",
    image: asset("farm-complex.jpg"),
  },
  {
    title: "Feed Quality",
    text: "Sakthi Bromix is produced in an automated plant with formulation discipline, raw-material checks and stage-specific rations for consistent growth.",
    image: asset("feed-bags-chicks.jpg"),
  },
  {
    title: "Farm Monitoring",
    text: "Contract and company farms receive technical and veterinary oversight so housing, feed, water and performance stay on standard throughout the cycle.",
    image: asset("aerial-farm-03.jpg"),
  },
  {
    title: "Bird Welfare",
    text: "Husbandry, stocking, ventilation and health care are treated as operational requirements — because welfare and product quality move together.",
    image: asset("chicken-drinker.jpg"),
  },
];

export function QualityPillars() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section
      id="quality"
      aria-labelledby="quality-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-forest-deep py-20 text-white sm:py-24 lg:py-28"
    >
      <SectionBackdrop src={asset("farm-complex.jpg")} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="quality-heading"
          invert
          eyebrow="Quality & Biosecurity"
          title="Quality Forever — More Than a Promise"
          subtitle="Quality at Every Stage. Confidence at Every Connection."
        />

        <div
          role="tablist"
          aria-label="Quality pillars"
          className="mt-10 flex flex-wrap gap-2"
        >
          {pillars.map((pillar, i) => (
            <button
              key={pillar.title}
              type="button"
              role="tab"
              id={`quality-tab-${i}`}
              aria-selected={i === active}
              aria-controls="quality-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                i === active
                  ? "bg-gold text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white",
              )}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        <div
          id="quality-panel"
          role="tabpanel"
          aria-labelledby={`quality-tab-${active}`}
          className="mt-8 grid overflow-hidden rounded-2xl bg-white text-ink lg:grid-cols-2"
        >
          <div className="relative min-h-[240px] lg:min-h-[360px]">
            <MediaImage
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <ShieldCheck className="size-8 text-gold" aria-hidden />
            <h3 className="mt-4 font-display text-2xl sm:text-3xl">{current.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{current.text}</p>
          </div>
        </div>

        <Button href="/quality" variant="accent" size="lg" className="mt-10">
          Discover Our Quality Approach
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
