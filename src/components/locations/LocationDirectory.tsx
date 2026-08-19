"use client";

import { useMemo, useState } from "react";
import { locationTypes, locations } from "@/lib/data";
import { mapsHref } from "@/lib/site";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function LocationDirectory() {
  const [filter, setFilter] = useState<(typeof locationTypes)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? locations : locations.filter((l) => l.type === filter)),
    [filter],
  );
  const mapLoc = list[0] ?? locations[0];
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(mapLoc.mapQuery)}&z=11&output=embed`;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="flex flex-wrap gap-2">
          {locationTypes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={cn(
                "rounded-sm border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
                filter === t
                  ? "border-forest bg-forest text-white"
                  : "border-line bg-white text-forest hover:border-gold",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <ul className="mt-6 grid gap-4">
          {list.map((loc) => (
            <li key={loc.id} className="border border-line bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                {loc.type} · {loc.region}
              </p>
              <h2 className="mt-2 flex gap-2 text-xl font-semibold text-forest">
                <MapPin className="mt-1 size-5 shrink-0 text-brand" />
                {loc.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{loc.address}</p>
              <p className="mt-2 text-sm text-forest">{loc.notes}</p>
              <a
                href={mapsHref(loc.mapQuery)}
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-brand"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-5">
        <div className="sticky top-28 overflow-hidden border border-line bg-white">
          <iframe
            title={`Map of ${mapLoc.name}`}
            src={src}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="p-4 text-sm text-muted">
            Showing {mapLoc.name}. Switch filters to focus the directory; each card
            has a Maps link for the exact pin.
          </p>
        </div>
      </div>
    </div>
  );
}
