import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JobBoard } from "@/components/careers/JobBoard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";
import { MediaImage } from "@/components/ui/MediaImage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work with Sakthi Poultry in veterinary, hatchery, feed mill, farm operations, quality and sales roles across Tamil Nadu.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Careers", path: "/careers" }]} />
      <PageHero
        title="Build the chain with us"
        description="We hire people who respect birds, farmers and process — from hatchery floors to field veterinary routes and the mill."
        image={asset("farm-complex.jpg")}
        crumbs={[{ label: "Careers" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Culture"
            title="Practical excellence, rural roots"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Field-first",
                d: "Decisions are tested in sheds and mill shifts, not only in meeting rooms.",
                img: asset("aerial-farm-03.jpg"),
              },
              {
                t: "Learning",
                d: "Biosecurity, nutrition and welfare skills are shared across company and contract farms.",
                img: asset("chicken-drinker.jpg"),
              },
              {
                t: "Benefits",
                d: "Statutory benefits, on-site operational exposure, and a path from technician to supervisor roles.",
                img: asset("feed-bags-chicks.jpg"),
              },
            ].map((c) => (
              <article key={c.t} className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="relative h-44">
                  <MediaImage src={c.img} alt={c.t} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-6">
                  <h2 className="font-semibold text-forest">{c.t}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Openings" title="Filter by team and apply" />
          <div className="mt-10">
            <JobBoard />
          </div>
        </div>
      </section>
    </>
  );
}
