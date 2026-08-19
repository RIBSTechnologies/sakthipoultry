import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NewsGallery } from "@/components/news/NewsGallery";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Sakthi Poultry photo and video gallery, farm infrastructure updates, and farmer onboarding announcements.",
  alternates: { canonical: "/news-events" },
};

export default function NewsEventsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "News & Events", path: "/news-events" }]} />
      <PageHero
        title="Farms, flocks and the people around them"
        description="Aerial surveys, on-farm systems, feed and flock photography, plus operational announcements for growers and buyers."
        image={asset("aerial-complex-04.jpg")}
        crumbs={[{ label: "News & Events" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <NewsGallery />
      </div>
    </>
  );
}
