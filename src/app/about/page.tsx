import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProfile } from "@/components/about/AboutProfile";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutPurpose } from "@/components/about/AboutPurpose";
import { AboutInfrastructure } from "@/components/about/AboutInfrastructure";
import { AboutClose } from "@/components/about/AboutClose";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { aboutSeo } from "@/lib/about";

export const metadata: Metadata = {
  title: { absolute: aboutSeo.title },
  description: aboutSeo.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    images: ["/assets/images/sakthi-poultry-farm-aerial-complex.jpg"],
  },
  twitter: {
    title: aboutSeo.title,
    description: aboutSeo.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", path: "/about" }]} />
      <AboutHero />
      <AboutProfile />
      <AboutJourney />
      <AboutLeadership />
      <AboutPurpose />
      <AboutInfrastructure />
      <AboutClose />
    </>
  );
}
