import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JobBoard } from "@/components/careers/JobBoard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

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
              },
              {
                t: "Learning",
                d: "Biosecurity, nutrition and welfare skills are shared across company and contract farms.",
              },
              {
                t: "Benefits",
                d: "Statutory benefits, on-site operational exposure, and a path from technician to supervisor roles.",
              },
            ].map((c) => (
              <article key={c.t} className="border border-line bg-white p-6">
                <h2 className="font-semibold text-forest">{c.t}</h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">{c.d}</p>
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
