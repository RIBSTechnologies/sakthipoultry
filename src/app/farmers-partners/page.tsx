import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FarmersIntro } from "@/components/farmers/FarmersIntro";
import { FarmersContract } from "@/components/farmers/FarmersContract";
import { FarmersBenefits } from "@/components/farmers/FarmersBenefits";
import { FarmersTechnical } from "@/components/farmers/FarmersTechnical";
import { FarmersApply } from "@/components/farmers/FarmersApply";
import { FarmersBusiness } from "@/components/farmers/FarmersBusiness";
import { FarmersWhy } from "@/components/farmers/FarmersWhy";
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
        title="Poultry Contract Farming & Business Partnerships"
        description="At Sakthi Poultry Private Limited, strong relationships are an important part of building a sustainable poultry ecosystem."
        image={farmerImages.hero}
        crumbs={[{ label: "Farmers & Partners" }]}
      />
      <FarmersIntro />
      <FarmersContract />
      <FarmersBenefits />
      <FarmersTechnical />
      <FarmersApply />
      <FarmersBusiness />
      <FarmersWhy />
      <FarmersClose />
    </>
  );
}
