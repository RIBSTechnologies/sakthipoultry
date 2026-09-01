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
  layout = "overlay",
}: {
  title: string;
  description: string;
  image: string;
  crumbs: { href?: string; label: string }[];
  imageClassName?: string;
  overlayClassName?: string;
  layout?: "overlay" | "stacked";
}) {
  const content = (
    <Reveal y={20}>
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
        {description}
      </p>
      <span className="mt-6 inline-block h-1.5 w-16 bg-gold" />
    </Reveal>
  );

  if (layout === "stacked") {
    return (
      <section className="bg-ink">
        <div className="relative isolate h-56 overflow-hidden sm:h-72 lg:h-[22rem]">
          <MediaImage
            src={image}
            alt=""
            fill
            priority
            className={imageClassName}
            sizes="100vw"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
          {content}
        </div>
      </section>
    );
  }

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
      <div className="relative mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-36 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}
