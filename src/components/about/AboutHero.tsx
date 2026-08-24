import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[72vh] overflow-hidden bg-ink">
      <MediaImage
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        alt="Aerial view of Sakthi Poultry farm facilities in Tamil Nadu"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/92 via-forest-deep/70 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/30" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <Reveal y={24}>
          <Breadcrumbs items={[{ label: "About" }]} />
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light">
            Company Profile
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.05]">
            About Sakthi Poultry
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            An established integrated poultry company in Tamil Nadu, operating
            across the broiler chicken value chain with a strong commitment to
            quality, efficiency and responsible poultry production.
          </p>
          <span className="mt-8 block h-px w-24 bg-gold" />
        </Reveal>
      </div>
    </section>
  );
}
