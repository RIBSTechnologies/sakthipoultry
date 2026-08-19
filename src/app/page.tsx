import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutOverview } from "@/components/home/AboutOverview";
import { StatsSection } from "@/components/home/StatsSection";
import { ValueChain } from "@/components/home/ValueChain";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { QualityPillars } from "@/components/home/QualityPillars";
import { LocationsSection } from "@/components/home/LocationsSection";
import { EnquiryHub } from "@/components/home/EnquiryHub";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Integrated Poultry Company in Tamil Nadu` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutOverview />
      <StatsSection />
      <ValueChain />
      <ProductsGrid />
      <PartnershipSection />
      <QualityPillars />
      <LocationsSection />
      <EnquiryHub />
      <ClosingCTA />
    </>
  );
}
