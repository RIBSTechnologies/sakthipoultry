import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LocationDirectory } from "@/components/locations/LocationDirectory";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Sakthi Poultry Pvt Ltd locations — Corporate Office in Pollachi, and Feed Mills at Kariyapatti and Dindigul.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Locations", path: "/locations" }]} />
      <PageHero
        title="Locations"
        description="Corporate Office in Pollachi, and Feed Mills at Kariyapatti and Dindigul."
        image={asset("aerial-complex-08.jpg")}
        crumbs={[{ label: "Locations" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <LocationDirectory />
      </div>
    </>
  );
}
