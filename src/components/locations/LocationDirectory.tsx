"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { locations } from "@/lib/data";
import { cn } from "@/lib/utils";

const tabs = [...new Set(locations.map((item) => item.tab))];

function tabId(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

export function LocationDirectory() {
  const [tab, setTab] = useState(tabs[0]);
  const visible = locations.filter((item) => item.tab === tab);

  return (
    <>
      <div
        role="tablist"
        aria-label="Locations"
        className="flex flex-wrap gap-2"
      >
        {tabs.map((label) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={tab === label}
            id={`location-tab-${tabId(label)}`}
            aria-controls={`location-panel-${tabId(label)}`}
            onClick={() => setTab(label)}
            className={cn(
              "rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]",
              tab === label
                ? "border-forest bg-forest text-white"
                : "border-line bg-white text-forest",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        id={`location-panel-${tabId(tab)}`}
        role="tabpanel"
        aria-labelledby={`location-tab-${tabId(tab)}`}
        className="mt-8 grid gap-10"
      >
        {visible.map((loc, index) => (
          <div key={loc.id} className="grid gap-8 lg:grid-cols-2">
            <article className="border border-line bg-white p-6 sm:p-8">
              {visible.length > 1 ? (
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              {loc.type ? (
                <p
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.22em] text-gold",
                    visible.length > 1 && "mt-3",
                  )}
                >
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
              title={`Map of ${loc.lines[loc.lines.length - 1]}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.lines.join(", "))}&z=14&output=embed`}
              className="h-72 w-full border border-line bg-white lg:h-full lg:min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ))}
      </div>
    </>
  );
}
