import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { asset } from "@/lib/utils";

export function AboutInfrastructure() {
  return (
    <section
      aria-labelledby="about-infra-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-infra-heading"
            eyebrow="Infrastructure"
            title="Integrated Infrastructure Across the Broiler Poultry Value Chain"
            subtitle="Our integrated infrastructure supports the key stages of the broiler poultry value chain, enabling different operations to work together with greater consistency and control."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-line bg-cream-2 p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-2xl text-ink">
                Parent Breeder Farms
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Healthy parent stock managed with focus on nutrition, flock
                performance and biosecurity.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-line bg-cream-2 p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-2xl text-ink">Modern Hatchery</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Controlled incubation, egg handling and chick processing with
                strong hygiene and biosecurity.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl bg-forest-deep text-white lg:grid lg:grid-cols-12">
          <Reveal className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Feed Manufacturing
            </p>
            <p className="mt-4 font-display text-6xl tracking-tight text-gold-light sm:text-7xl">
              12,000
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              Tonnes per month
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              12,000 tonnes/month capacity supported by automated production
              systems.
            </p>
          </Reveal>
          <div className="relative min-h-[240px] lg:col-span-5">
            <MediaImage
              src={asset("sakthi-poultry-feed-manufacturing.jpg")}
              alt="Sakthi Poultry feed manufacturing plant"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-5 grid items-center gap-5 overflow-hidden rounded-2xl border border-line bg-cream-2 lg:grid-cols-12">
          <div className="relative min-h-[240px] lg:col-span-6 lg:min-h-[320px]">
            <MediaImage
              src={asset("sakthi-poultry-contract-broiler-farm.jpg")}
              alt="Contract broiler farms in the Sakthi Poultry network"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <Reveal className="p-8 sm:p-10 lg:col-span-6">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              Broiler Farm Network
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Contract farming network supported by feed, veterinary and
              technical services.
            </p>
            <p className="mt-6 font-display text-xl text-forest">
              Together, our people, infrastructure, farmer network and
              integrated operations support one consistent commitment: Quality
              Forever.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
