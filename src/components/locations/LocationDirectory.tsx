import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { locations } from "@/lib/data";

export function LocationDirectory() {
  return (
    <section
      aria-labelledby="locations-directory-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="locations-directory-heading"
            eyebrow="Our Locations"
            title="Corporate Office, Feed Mill and Dindigul"
          />
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 lg:grid-cols-3">
          {locations.map((loc, index) => (
            <StaggerItem key={loc.id} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-cream-2 p-6 shadow-sm sm:p-8">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {loc.type ? (
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    {loc.type}
                  </p>
                ) : null}
                <h2 className="mt-2 flex gap-2 font-display text-xl text-ink">
                  <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
                  {loc.name}
                </h2>
                <address className="mt-4 flex-1 text-sm not-italic leading-relaxed text-muted sm:text-base">
                  {loc.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <Button
                  href={loc.mapsUrl}
                  variant="outline"
                  className="mt-8 self-start"
                >
                  Open in Maps
                </Button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
