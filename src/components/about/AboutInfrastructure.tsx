import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

export function AboutInfrastructure() {
  return (
    <section
      aria-labelledby="about-infra-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            05 — Infrastructure
          </p>
          <h2
            id="about-infra-heading"
            className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Integrated infrastructure across the broiler poultry value chain
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Our integrated infrastructure supports the key stages of the broiler
            poultry value chain, enabling different operations to work together
            with greater consistency and control.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Parent Breeder Farms
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
              Parent stock under carefully maintained conditions
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Sakthi Poultry’s breeder operations support the management of
              parent stock under carefully maintained conditions, with focus on
              bird health, nutrition, breeding performance and biosecurity.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
            <MediaImage
              src={asset("sakthi-poultry-breeding.jpg")}
              alt="Parent breeder farm operations at Sakthi Poultry"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
            <MediaImage
              src={asset("sakthi-poultry-modern-hatchery.jpg")}
              alt="Sakthi Poultry hatchery incubator corridor"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Poultry Hatchery
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
              Modern incubation and climate control
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our poultry hatchery uses modern incubation and climate-control
              systems to manage temperature, humidity and ventilation, supported
              by dedicated facilities for egg storage, sorting and grading.
              Biosecurity and hygiene protocols are incorporated throughout the
              hatchery process.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 overflow-hidden bg-forest-deep text-white lg:grid lg:grid-cols-12">
          <Reveal className="px-8 py-12 sm:p-14 lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Poultry Feed Manufacturing
            </p>
            <p className="mt-6 font-display text-6xl tracking-tight text-gold-light sm:text-7xl">
              12,000
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Tonnes per month
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
              Poultry nutrition is supported by our feed manufacturing
              operations. The company’s source records indicate a production
              capacity of 12,000 tonnes per month, with feed plant machinery
              supplied and installed by Denmark-based Andritz Technologies and
              supported by automated control systems.
            </p>
          </Reveal>
          <div className="relative min-h-[280px] lg:col-span-5">
            <MediaImage
              src={asset("sakthi-poultry-feed-manufacturing.jpg")}
              alt="Sakthi Poultry feed manufacturing plant"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Broiler Farm Network
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
              Support through the production cycle
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our broiler production network extends through contracted poultry
              farmers, who are supported with feed supply, veterinary services
              and technical guidance throughout the production cycle.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
            <MediaImage
              src={asset("sakthi-poultry-contract-broiler-farm.jpg")}
              alt="Contract broiler farms in the Sakthi Poultry network"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 border-t border-line pt-16 text-center">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Together, our people, infrastructure, farmer network and
              integrated operations support one consistent commitment:
            </p>
            <p className="mt-6 font-display text-4xl text-forest sm:text-5xl">
              Quality Forever
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
