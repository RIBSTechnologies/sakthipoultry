import { MediaImage } from "@/components/ui/MediaImage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  title,
  description,
  image,
  crumbs,
  imageClassName = "object-cover opacity-80",
  overlayClassName = "bg-gradient-to-t from-ink via-ink/55 to-ink/20",
  contentClassName = "justify-end pb-14 pt-36",
  contentPanelClassName,
}: {
  title: string;
  description: string;
  image: string;
  crumbs: { href?: string; label: string }[];
  imageClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  contentPanelClassName?: string;
}) {
  return (
    <section className="relative isolate min-h-[48vh] overflow-hidden bg-ink">
      <MediaImage
        src={image}
        alt=""
        fill
        priority
        className={imageClassName}
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div
        className={`relative mx-auto flex min-h-[48vh] max-w-7xl flex-col px-4 sm:px-6 lg:px-8 ${contentClassName}`}
      >
        <Reveal y={20}>
          <div className={contentPanelClassName}>
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
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
