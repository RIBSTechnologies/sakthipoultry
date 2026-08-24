import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FarmersIntro } from "@/components/farmers/FarmersIntro";
import { FarmersApply } from "@/components/farmers/FarmersApply";
import { FarmersPartners } from "@/components/farmers/FarmersPartners";
import { FarmersClose } from "@/components/farmers/FarmersClose";
import { ProductsRange } from "@/components/products/ProductsRange";
import { ProductsDetail } from "@/components/products/ProductsDetail";
import { ProductsFeed } from "@/components/products/ProductsFeed";
import { ProductsWhy } from "@/components/products/ProductsWhy";
import { ProductsJourney } from "@/components/products/ProductsJourney";
import { ProductsEnquire } from "@/components/products/ProductsEnquire";
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
        title="Poultry Products in South India"
        description="Sakthi Poultry Private Limited offers a focused range of poultry products supporting different stages of commercial broiler production."
        image={farmerImages.hero}
        crumbs={[{ label: "Farmers & Partners" }]}
      />
      <FarmersIntro />
      <ProductsRange />
      <ProductsDetail />
      <ProductsFeed />
      <ProductsWhy />
      <ProductsJourney />
      <ProductsEnquire />
      <FarmersApply />
      <FarmersPartners />
      <FarmersClose />
    </>
  );
}
