import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { qualityPillars } from "@/lib/data";
import { asset } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Biosecurity",
  description:
    "Sakthi Poultry quality and biosecurity across breeding, hatchery, feed manufacturing, contract farming, logistics and live-bird supply.",
  alternates: { canonical: "/quality" },
};

const chain = [
  "Breeding",
  "Modern Hatchery",
  "Feed Manufacturing",
  "Contract Farming",
  "Integrated Logistics",
  "Live Bird Supply",
];

export default function QualityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Quality", path: "/quality" }]} />
      <PageHero
        title="Quality is a chain. Biosecurity is the lock."
        description="From parent flocks to the bird that reaches the market, Sakthi Poultry designs quality into every stage — with biosecurity, controlled processes and on-farm discipline."
        image={asset("chicken-drinker.jpg")}
        crumbs={[{ label: "Quality" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Quality Forever"
              title="Quality connected at every stage"
              description="Sakthi Poultry brings breeding, hatchery, feed, contract farming and logistics together as one quality system. The same biosecurity and process standards travel from parent stock to live-bird dispatch."
            />
            <p className="mt-6 leading-relaxed text-muted">
              In-ovo vaccination, selected raw materials, veterinary field
              support and a company-owned fleet are not extras — they are how
              we keep chick quality, flock health and on-time supply connected
              for farmers, traders and retail outlets.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {chain.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-forest"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <MediaImage
              src={asset("farm-aerial-sheds.jpg")}
              alt="Bio-secured poultry housing at Sakthi Poultry"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 pb-20 sm:px-6 lg:px-8">
        {qualityPillars.map((p, i) => (
          <article
            key={p.title}
            className="grid items-center gap-10 lg:grid-cols-12"
          >
            <div className={i % 2 ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                0{i + 1}
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium text-forest">
                {p.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{p.text}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
              <MediaImage
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </article>
        ))}

        <section className="overflow-hidden rounded-2xl border border-line bg-white p-8 sm:p-12">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-gold" aria-hidden />
            <SectionHeader
              title="What this means on the ground"
              description="Gates, logs, PPE, downtime sanitation, water-line hygiene, litter management and documented medicine use are trained as habits — not posters."
            />
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Perimeter fencing and visitor control at production sites",
              "Vehicle and personnel sanitisation before bird areas",
              "All-in / all-out thinking between flocks",
              "Nipple drinkers and trough hygiene to protect water and feed",
              "Organised manure and litter handling under elevated housing",
              "Feed sampling from mill to farm trough",
              "In-ovo vaccination and hatchery hygiene protocols",
              "Veterinary and technical support across contract farms",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-line px-4 py-3 text-sm text-forest"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button href="/contact?type=product" variant="accent" size="lg" className="mt-10">
            Talk to our quality team
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </section>
      </div>
    </>
  );
}
