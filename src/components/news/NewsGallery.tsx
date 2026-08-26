"use client";

import { useState } from "react";
import { gallery, news } from "@/lib/data";
import { MediaImage } from "@/components/ui/MediaImage";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { formatDate } from "@/lib/utils";
import { Modal } from "@/components/ui/Modal";

export function NewsGallery() {
  const [photo, setPhoto] = useState<(typeof gallery.photos)[number] | null>(
    null,
  );

  return (
    <>
      <section
        aria-labelledby="news-photos-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="news-photos-heading"
              eyebrow="Photos"
              title="From farms, feed and operations"
            />
          </Reveal>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.photos.map((p) => (
              <li key={p.src}>
                <button
                  type="button"
                  onClick={() => setPhoto(p)}
                  aria-label={p.alt}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl"
                >
                  <MediaImage
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-forest/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                    {p.tag}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="news-videos-heading"
        className="bg-cream-2 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="news-videos-heading"
              eyebrow="Videos"
              title="Farm footage"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {gallery.videos.map((v) => (
              <figure
                key={v.src}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
              >
                <VideoPlayer
                  src={v.src}
                  poster={v.poster}
                  controls
                  className="aspect-video w-full bg-ink object-cover"
                />
                <figcaption className="px-5 py-4">
                  <p className="font-semibold text-ink">{v.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="news-announcements-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="news-announcements-heading"
              eyebrow="Announcements"
              title="Updates from Sakthi Poultry"
            />
          </Reveal>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <li
                key={n.slug}
                className="overflow-hidden rounded-2xl border border-line bg-cream-2 shadow-sm"
              >
                <div className="relative aspect-[16/10]">
                  <MediaImage
                    src={n.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {n.tag} · {formatDate(n.date)}
                  </p>
                  <h2 className="mt-2 font-display text-lg text-ink">{n.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {n.excerpt}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Modal
        open={Boolean(photo)}
        onClose={() => setPhoto(null)}
        title={photo?.tag ?? "Gallery"}
        wide
      >
        {photo ? (
          <div className="relative aspect-video">
            <MediaImage
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="80vw"
            />
          </div>
        ) : null}
      </Modal>
    </>
  );
}
