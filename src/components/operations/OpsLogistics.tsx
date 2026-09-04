import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

export function OpsLogistics() {
  return (
    <section
      id="integrated-logistics"
      aria-labelledby="ops-logistics-heading"
      className="scroll-mt-32 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
            <MediaImage
              src={asset("sakthi-poultry-logistics-truck.jpg")}
              alt="Sakthi Poultry company-owned logistics fleet"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Operations
            </p>
            <h2
              id="ops-logistics-heading"
              className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            >
              Integrated Logistics
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Our company-owned fleet supports the movement of parent birds,
              hatching eggs, day-old chicks and live broiler birds, including
              temperature-controlled transportation where required.
            </p>
          </Reveal>
        </article>
      </div>
    </section>
  );
}
