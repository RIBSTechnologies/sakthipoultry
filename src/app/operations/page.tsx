import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { OpsIntro } from "@/components/operations/OpsIntro";
import { OpsChain } from "@/components/operations/OpsChain";
import { OpsStages } from "@/components/operations/OpsStages";
import { OpsCapabilities } from "@/components/operations/OpsCapabilities";
import { OpsMarket } from "@/components/operations/OpsMarket";
import { OpsClose } from "@/components/operations/OpsClose";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { operationsSeo } from "@/lib/operations";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: operationsSeo.title },
  description: operationsSeo.description,
  alternates: { canonical: "/operations" },
  openGraph: {
    title: operationsSeo.title,
    description: operationsSeo.description,
    images: ["/assets/images/sakthi-poultry-farm-aerial-complex.jpg"],
  },
};

export default function OperationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Operations", path: "/operations" }]} />
      <PageHero
        title="Integrated Poultry Operations in South India"
        description="At Sakthi Poultry Private Limited, quality is built into every stage of our integrated poultry operations."
        image={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        crumbs={[{ label: "Operations" }]}
      />
      <OpsIntro />
      <OpsChain />
      <OpsStages />
      <OpsCapabilities />
      <OpsMarket />
      <OpsClose />
    </>
  );
}
