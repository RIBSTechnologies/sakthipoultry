import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { QualityIntro } from "@/components/quality/QualityIntro";
import { QualityAssurance } from "@/components/quality/QualityAssurance";
import { QualityBiosecurity } from "@/components/quality/QualityBiosecurity";
import { QualityPractice } from "@/components/quality/QualityPractice";
import { QualityLab } from "@/components/quality/QualityLab";
import { QualitySustain } from "@/components/quality/QualitySustain";
import { QualityClose } from "@/components/quality/QualityClose";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { qualitySeo } from "@/lib/quality";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: qualitySeo.title },
  description: qualitySeo.description,
  alternates: { canonical: "/quality" },
  openGraph: {
    title: qualitySeo.title,
    description: qualitySeo.description,
    images: ["/assets/images/sakthi-poultry-farm-aerial-complex.jpg"],
  },
};

export default function QualityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Quality", path: "/quality" }]} />
      <PageHero
        title="Poultry Quality & Biosecurity – Quality Forever"
        description="At Sakthi Poultry Private Limited, quality is built into every stage of our poultry operations."
        image={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        crumbs={[{ label: "Quality" }]}
      />
      <QualityIntro />
      <QualityAssurance />
      <QualityBiosecurity />
      <QualityPractice />
      <QualityLab />
      <QualitySustain />
      <QualityClose />
    </>
  );
}
