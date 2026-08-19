import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const hubs = [
  {
    title: "Head Office — Pollachi",
    text: `${site.address.city}, ${site.address.district}, Tamil Nadu`,
  },
  {
    title: "Production Hub",
    text: "South Singampunari, Sivagangai — farms, feed and hatchery operations",
  },
  {
    title: "Market Reach",
    text: "Distribution routes serving the South Indian poultry market",
  },
];

export function LocationsSection() {
  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <MediaImage
            src={asset("aerial-complex-02.jpg")}
            alt="Sakthi Poultry regional production complex in Tamil Nadu"
            width={1100}
            height={800}
            className="h-80 w-full object-cover lg:h-[28rem]"
          />
        </div>

        <div>
          <SectionHeading
            id="locations-heading"
            eyebrow="Regional Reach"
            title="Rooted in Tamil Nadu. Serving the South Indian Poultry Market."
            subtitle="Regional hub presence bringing together farms, feed mills, hatcheries, and distribution routes."
          />

          <ul className="mt-8 space-y-3">
            {hubs.map((hub) => (
              <li
                key={hub.title}
                className="flex gap-3 rounded-2xl border border-line bg-white p-4"
              >
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">{hub.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{hub.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button href="/locations" variant="outline" size="lg" className="mt-8">
            View Our Locations
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
