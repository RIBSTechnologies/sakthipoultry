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
        description="Join the Sakthi Poultry team when openings become available."
        image={asset("sakthi-poultry-careers-hero.jpg")}
        imageClassName="object-contain object-center"
        overlayClassName="bg-gradient-to-t from-ink/65 via-ink/30 to-transparent"
        sectionClassName="min-h-0 aspect-[1024/271] w-full"
        contentClassName="min-h-0 h-full justify-end pb-5 pt-24 sm:pb-6 sm:pt-28"
        crumbs={[{ label: "Careers" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <JobBoard />
      </div>
    </>
  );
}
