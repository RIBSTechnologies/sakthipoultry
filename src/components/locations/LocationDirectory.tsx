"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { locations } from "@/lib/data";
import { cn } from "@/lib/utils";

export function LocationDirectory() {
  const [tab, setTab] = useState(locations[0].id);
  const loc = locations.find((item) => item.id === tab) ?? locations[0];
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(loc.lines.join(", "))}&z=14&output=embed`;

  return (
    <>
      <div
        role="tablist"
        aria-label="Locations"
        className="flex flex-wrap gap-2"
      >
        {locations.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            id={`location-tab-${item.id}`}
            aria-controls={`location-panel-${item.id}`}
            onClick={() => setTab(item.id)}
            className={cn(
              "rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]",
              tab === item.id
                ? "border-forest bg-forest text-white"
                : "border-line bg-white text-forest",
            )}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        id={`location-panel-${loc.id}`}
        role="tabpanel"
        aria-labelledby={`location-tab-${loc.id}`}
        className="mt-8 grid gap-8 lg:grid-cols-2"
      >
        <article className="border border-line bg-white p-6 sm:p-8">
          {loc.type ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              {loc.type}
            </p>
          ) : null}
          <h2 className="mt-2 flex gap-2 text-xl font-semibold text-forest">
            <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
            {loc.name}
          </h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted sm:text-base">
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

        <iframe
          title={`Map of ${loc.tab}`}
          src={mapSrc}
          className="h-72 w-full border border-line bg-white lg:h-full lg:min-h-[22rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
