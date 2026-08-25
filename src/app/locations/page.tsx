import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LocationDirectory } from "@/components/locations/LocationDirectory";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Sakthi Poultry Pvt Ltd locations — Corporate Office in Pollachi, Feed Mill at Kariyapatti, and Dindigul.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Locations", path: "/locations" }]} />
      <PageHero
        title="Locations"
        description="Corporate Office in Pollachi, Feed Mill at Kariyapatti, and Dindigul."
        image={asset("aerial-complex-08.jpg")}
        crumbs={[{ label: "Locations" }]}
      />
      <LocationDirectory />
    </>
  );
}
