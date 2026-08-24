import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { asset } from "@/lib/utils";

export function AboutInfrastructure() {
  return (
    <section
      aria-labelledby="about-infra-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
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

        <div className="mt-10">
          <Reveal>
            <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <div className="relative aspect-[16/10] lg:aspect-[21/9]">
                <MediaImage
                  src={asset("sakthi-poultry-breeding.jpg")}
                  alt="Parent breeder farm operations at Sakthi Poultry"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-6 sm:p-8 lg:max-w-4xl lg:p-10">
                <h3 className="font-display text-2xl text-ink sm:text-3xl">
                  Parent Breeder Farms
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Sakthi Poultry&apos;s breeder operations support the
                  management of parent stock under carefully maintained
                  conditions, with focus on bird health, nutrition, breeding
                  performance and biosecurity.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <article className="mt-5 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="relative h-[22rem] sm:h-[28rem] lg:h-[36rem]">
              <MediaImage
                src={asset("sakthi-poultry-modern-hatchery.jpg")}
                alt="Sakthi Poultry hatchery incubator corridor"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-6 sm:p-8 lg:max-w-4xl lg:p-10">
              <h3 className="font-display text-2xl text-ink sm:text-3xl">
                Poultry Hatchery
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Our poultry hatchery uses modern incubation and climate-control
                systems to manage temperature, humidity and ventilation,
                supported by dedicated facilities for egg storage, sorting and
                grading. Biosecurity and hygiene protocols are incorporated
                throughout the hatchery process.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-5 overflow-hidden rounded-2xl bg-forest-deep text-white lg:grid lg:grid-cols-12">
          <Reveal className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Poultry Feed Manufacturing
            </p>
            <p className="mt-4 font-display text-6xl tracking-tight text-gold-light sm:text-7xl">
              12,000
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
              Tonnes per month
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              Poultry nutrition is supported by our feed manufacturing
              operations. The company&apos;s source records indicate a
              production capacity of 12,000 tonnes per month, with feed plant
              machinery supplied and installed by Denmark-based Andritz
              Technologies and supported by automated control systems.
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
              Our broiler production network extends through contracted poultry
              farmers, who are supported with feed supply, veterinary services
              and technical guidance throughout the production cycle.
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
