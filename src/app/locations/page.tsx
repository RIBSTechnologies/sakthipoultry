import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LocationDirectory } from "@/components/locations/LocationDirectory";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Locations & Network",
  description:
    "Sakthi Poultry head office in Pollachi, production complex at Singampunari, feed manufacturing and distribution corridors across Tamil Nadu.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Locations", path: "/locations" }]} />
      <PageHero
        title="A Tamil Nadu footprint, tightly run"
        description="Corporate coordination from Pollachi. Production at Singampunari. Feed milling and live-bird corridors serving western and southern markets."
        image={asset("aerial-complex-08.jpg")}
        crumbs={[{ label: "Locations" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <LocationDirectory />
      </div>
    </>
  );
}
