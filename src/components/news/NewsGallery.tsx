"use client";

import { useState } from "react";
import { gallery, news } from "@/lib/data";
import { MediaImage } from "@/components/ui/MediaImage";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui/Modal";

export function NewsGallery() {
  const [tab, setTab] = useState<"photos" | "videos" | "news">("photos");
  const [photo, setPhoto] = useState<(typeof gallery.photos)[number] | null>(null);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["photos", "Photos"],
            ["videos", "Videos"],
            ["news", "Announcements"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]",
              tab === id
                ? "border-forest bg-forest text-white"
                : "border-line bg-white text-forest",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "photos" ? (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.photos.map((p) => (
            <li key={p.src}>
              <button
                type="button"
                onClick={() => setPhoto(p)}
                className="group relative block aspect-[4/3] w-full overflow-hidden"
              >
                <MediaImage
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="33vw"
                />
                <span className="absolute left-3 top-3 bg-forest/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                  {p.tag}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {tab === "videos" ? (
        <div className="mt-8 grid gap-8">
          {gallery.videos.filter((v) => v.src).map((v) => (
            <figure key={v.src} className="overflow-hidden border border-line bg-black">
              <VideoPlayer
                src={v.src}
                poster={v.poster}
                controls
                className="aspect-video w-full object-cover"
              />
              <figcaption className="bg-white px-5 py-4">
                <p className="font-semibold text-forest">{v.title}</p>
                <p className="mt-1 text-sm text-muted">{v.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {tab === "news" ? (
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <li key={n.slug} className="overflow-hidden border border-line bg-white">
              <div className="relative aspect-[16/10]">
                <MediaImage src={n.image} alt="" fill className="object-cover" sizes="33vw" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {n.tag} · {formatDate(n.date)}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-forest">{n.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{n.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      <Modal
        open={Boolean(photo)}
        onClose={() => setPhoto(null)}
        title={photo?.tag ?? "Gallery"}
        wide
      >
        {photo ? (
          <div className="relative aspect-video">
            <MediaImage src={photo.src} alt={photo.alt} fill className="object-contain" sizes="80vw" />
          </div>
        ) : null}
      </Modal>
    </>
  );
}
