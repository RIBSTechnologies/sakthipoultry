import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { sustainabilityPoints } from "@/lib/quality";
import { asset } from "@/lib/utils";

export function QualitySustain() {
  return (
    <section
      aria-labelledby="quality-sustain-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="quality-sustain-heading"
              eyebrow="Sustainable Poultry Farming"
              title="Growing a Stronger Poultry Ecosystem"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>Our approach extends beyond poultry production.</p>
              <p>
                Sakthi Poultry is committed to developing a sustainable poultry
                ecosystem by working closely with farming communities and
                supporting long-term relationships.
              </p>
              <p>
                We work with poultry farmers by providing technical guidance,
                resources and support for the adoption of appropriate husbandry
                practices and modern farming techniques.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
            <MediaImage
              src={asset("sakthi-poultry-contract-broiler-farm.jpg")}
              alt="Contract broiler farms in the Sakthi Poultry farmer network"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Through farmer partnerships, our business aims to contribute to
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sustainabilityPoints.map((item, index) => (
            <StaggerItem key={item} className="h-full">
              <article className="flex h-full items-start gap-3 rounded-2xl border border-line bg-cream-2 p-5 shadow-sm">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg leading-snug text-ink">
                  {item}
                </h3>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <div className="mt-10 space-y-4 text-base leading-relaxed text-muted">
            <p>
              We continue to focus on improving our sustainability initiatives
              and supporting a better future for our farming partners and their
              families.
            </p>
            <p>
              For Sakthi Poultry, sustainable poultry farming is closely
              connected to farmers, communities and responsible long-term
              growth.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
