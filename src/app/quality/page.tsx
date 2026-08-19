import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { qualityPillars } from "@/lib/data";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Quality & Biosecurity",
  description:
    "Sakthi Poultry quality assurance, multi-tier biosecurity, food safety, in-house laboratory testing and sustainability practices.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Quality", path: "/quality" }]} />
      <PageHero
        title="Quality is a chain. Biosecurity is the lock."
        description="From inbound raw materials to the bird or bag that leaves the gate, we design checkpoints so disease pressure and inconsistency are stopped early."
        image={asset("chicken-drinker.jpg")}
        crumbs={[{ label: "Quality" }]}
      />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        {qualityPillars.map((p, i) => (
          <article
            key={p.title}
            className="grid items-center gap-10 lg:grid-cols-12"
          >
            <div className={i % 2 ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                0{i + 1}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-forest">{p.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{p.text}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
              <MediaImage src={p.image} alt={p.title} fill className="object-cover" sizes="50vw" />
            </div>
          </article>
        ))}

        <section className="border border-line bg-white p-8 sm:p-12">
          <SectionHeader
            title="What this means on the ground"
            description="Gates, logs, PPE, downtime sanitation, water-line hygiene, litter management and documented medicine use are trained as habits — not posters."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Perimeter fencing and visitor control at production sites",
              "Vehicle and personnel sanitisation before bird areas",
              "All-in / all-out thinking between flocks",
              "Nipple drinkers and trough hygiene to protect water and feed",
              "Organised manure and litter handling under elevated housing",
              "Feed sampling from mill to farm trough",
            ].map((item) => (
              <li key={item} className="border border-line px-4 py-3 text-sm text-forest">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
