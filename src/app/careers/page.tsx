import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { JobBoard } from "@/components/careers/JobBoard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Sakthi Poultry Private Limited across poultry operations in Tamil Nadu.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Careers", path: "/careers" }]} />
      <PageHero
        title="Careers"
        description="Explore current openings and grow with Sakthi Poultry across our integrated poultry operations."
        image={asset("sakthi-poultry-careers-hero.jpg")}
        imageClassName="object-cover object-[center_42%]"
        overlayClassName="bg-gradient-to-t from-ink/85 via-ink/40 to-ink/25"
        crumbs={[{ label: "Careers" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <JobBoard />
      </div>
    </>
  );
}
