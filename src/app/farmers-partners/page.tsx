import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FarmersIntro } from "@/components/farmers/FarmersIntro";
import { FarmersSupport } from "@/components/farmers/FarmersSupport";
import { FarmersRange } from "@/components/farmers/FarmersRange";
import { FarmersWhy } from "@/components/farmers/FarmersWhy";
import { FarmersJourney } from "@/components/farmers/FarmersJourney";
import { FarmersApply } from "@/components/farmers/FarmersApply";
import { FarmersPartners } from "@/components/farmers/FarmersPartners";
import { FarmersClose } from "@/components/farmers/FarmersClose";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { farmerImages, farmersSeo } from "@/lib/farmers";

export const metadata: Metadata = {
  title: { absolute: farmersSeo.title },
  description: farmersSeo.description,
  alternates: { canonical: "/farmers-partners" },
  openGraph: {
    title: farmersSeo.title,
    description: farmersSeo.description,
    images: ["/assets/images/sakthi-poultry-contract-broiler-farm.jpg"],
  },
};

export default function FarmersPartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Farmers & Partners", path: "/farmers-partners" }]}
      />
      <PageHero
        title="Growing Poultry. Growing Partnerships."
        description="Driven by our philosophy of “Quality forever,” we work to provide dependable poultry products for farmers, poultry businesses, traders, distributors and other business partners."
        image={farmerImages.hero}
        crumbs={[{ label: "Farmers & Partners" }]}
      />
      <FarmersIntro />
      <FarmersSupport />
      <FarmersRange />
      <FarmersWhy />
      <FarmersJourney />
      <FarmersApply />
      <FarmersPartners />
      <FarmersClose />
    </>
  );
}
