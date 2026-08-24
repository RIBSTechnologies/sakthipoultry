import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

const marks = [
  "33 Years",
  "Tamil Nadu",
  "Vencobb Family",
  "Quality Forever",
];

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink">
      <MediaImage
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        alt="Aerial view of Sakthi Poultry farm facilities in Tamil Nadu"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest-deep/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-forest-deep/55" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-4 pb-28 pt-36 text-center sm:px-6 lg:px-8">
        <Reveal y={20} className="flex flex-col items-center">
          <Breadcrumbs items={[{ label: "About" }]} />
          <span className="mt-10 h-px w-16 bg-gold" />
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.42em] text-gold-light">
            Integrated Poultry Company · Tamil Nadu
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            About Sakthi Poultry
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
            Operating across the broiler chicken value chain in Tamil Nadu, with
            a strong commitment to quality, efficiency and responsible poultry
            production.
          </p>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-forest-deep/70 backdrop-blur-sm">
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
          {marks.map((item) => (
            <li
              key={item}
              className="px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light sm:py-5"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
