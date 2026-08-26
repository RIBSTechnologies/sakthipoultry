import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { locations } from "@/lib/data";
import { asset } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function LocationsSection() {
  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl">
          <MediaImage
            src={asset("aerial-complex-02.jpg")}
            alt="Sakthi Poultry regional production complex in Tamil Nadu"
            width={1100}
            height={800}
            className="h-80 w-full object-cover transition duration-700 hover:scale-105 lg:h-[28rem]"
          />
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
          <SectionHeading
            id="locations-heading"
            eyebrow="Regional Reach"
            title="Rooted in Tamil Nadu. Serving the South Indian Poultry Market."
            subtitle="Corporate Office in Pollachi, and Feed Mills at Kariyapatti and Dindigul."
            />
          </Reveal>

          <Stagger className="mt-8 space-y-3">
            {locations.map((loc) => (
              <StaggerItem key={loc.id}>
                <div className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    <p className="font-semibold text-ink">
                      {loc.type || loc.name}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{loc.lines.join(", ")}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <Button href="/locations" variant="outline" size="lg" className="mt-8">
              View Our Locations
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
