import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutProfile } from "@/components/about/AboutProfile";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutPurpose } from "@/components/about/AboutPurpose";
import { AboutInfrastructure } from "@/components/about/AboutInfrastructure";
import { AboutClose } from "@/components/about/AboutClose";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { aboutSeo } from "@/lib/about";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: aboutSeo.title },
  description: aboutSeo.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    images: ["/assets/images/sakthi-poultry-about-hero-team.jpg"],
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
      <PageHero
        title="About Sakthi Poultry"
        description="An established integrated poultry company in Tamil Nadu, operating across the broiler chicken value chain with a strong commitment to quality, efficiency and responsible poultry production."
        image={asset("sakthi-poultry-about-hero-team.jpg")}
        imageClassName="object-cover object-[center_35%]"
        overlayClassName="bg-gradient-to-t from-ink/75 via-ink/25 to-transparent"
        crumbs={[{ label: "About" }]}
      />
      <AboutProfile />
      <AboutJourney />
      <AboutLeadership />
      <AboutPurpose />
      <AboutInfrastructure />
      <AboutClose />
    </>
  );
}
