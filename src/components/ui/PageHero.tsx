import { MediaImage } from "@/components/ui/MediaImage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function PageHero({
  title,
  description,
  image,
  video,
  crumbs,
  imageClassName = "object-cover opacity-80",
  overlayClassName = "bg-gradient-to-t from-ink via-ink/55 to-ink/20",
  contentClassName = "justify-end pb-24 pt-32 sm:pb-14 sm:pt-36",
  contentPanelClassName,
}: {
  title: string;
  description: string;
  image: string;
  video?: string;
  crumbs: { href?: string; label: string }[];
  imageClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  contentPanelClassName?: string;
}) {
  return (
    <section className="relative isolate min-h-[48vh] overflow-hidden bg-ink">
      {video ? (
        <VideoPlayer
          src={video}
          hideUntilPlaying
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <MediaImage
          src={image}
          alt=""
          fill
          priority
          className={imageClassName}
          sizes="100vw"
        />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div
        className={`relative mx-auto flex min-h-[48vh] max-w-7xl flex-col px-4 sm:px-6 lg:px-8 ${contentClassName}`}
      >
        <Reveal y={20}>
          <div className={contentPanelClassName}>
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-5 max-w-4xl font-display text-3xl font-medium tracking-tight leading-tight text-white sm:text-4xl lg:text-[2.7rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
            <span className="mt-6 inline-block h-1.5 w-16 bg-gold" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
