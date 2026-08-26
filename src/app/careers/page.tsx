import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { JobBoard } from "@/components/careers/JobBoard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Career opportunities at Sakthi Poultry Private Limited. There are no openings at this time.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Careers", path: "/careers" }]} />
      <PageHero
        title="Careers"
        description="There are no career opportunities at this time."
        image={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        crumbs={[{ label: "Careers" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <JobBoard />
      </div>
    </>
  );
}
