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
        <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="relative mx-auto h-52 w-full max-w-lg overflow-hidden rounded-2xl sm:h-60 lg:col-span-5 lg:mx-0 lg:h-64 lg:max-w-none">
            <MediaImage
              src={asset("sakthi-poultry-logistics-truck.jpg")}
              alt="Sakthi Poultry company-owned logistics fleet"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 40vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Operations
            </p>
            <h2
              id="ops-logistics-heading"
              className="mt-3 font-display text-[2.7rem] font-medium tracking-tight leading-tight text-ink"
            >
              Integrated Logistics
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
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
