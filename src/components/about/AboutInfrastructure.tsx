import { Check } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { farmFocus, integrationChain } from "@/lib/about";
import { asset } from "@/lib/utils";

const facilities = [
  {
    eyebrow: "Parent Breeder Farms",
    title: "Parent stock under controlled farming conditions",
    text: "Our breeder operations are designed around maintaining parent stock under controlled farming conditions. Facilities and management practices support appropriate bird nutrition, breeding performance, health monitoring and biosecurity.",
    image: asset("sakthi-poultry-breeding.jpg"),
    alt: "Parent breeder farm operations at Sakthi Poultry",
  },
  {
    eyebrow: "Poultry Hatchery Infrastructure",
    title: "Incubation, climate control and hygienic handling",
    text: "Our poultry hatchery operations use incubation and climate-control systems designed to manage important parameters such as temperature, humidity and ventilation. The hatchery also incorporates dedicated areas for egg handling, storage, sorting and grading, together with biosecurity measures intended to maintain hygienic operating conditions.",
    image: asset("sakthi-poultry-modern-hatchery.jpg"),
    alt: "Sakthi Poultry hatchery incubator corridor",
  },
];

export function AboutInfrastructure() {
  return (
    <section
      aria-labelledby="about-infra-heading"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            06 — Infrastructure
          </p>
          <h2
            id="about-infra-heading"
            className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Integrated Infrastructure Supporting the Poultry Value Chain
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Strong poultry production requires more than individual facilities.
            It requires the right infrastructure working together across every
            production stage. Sakthi Poultry&apos;s infrastructure supports an
            integrated poultry ecosystem covering breeder operations,
            hatcheries, poultry feed production, broiler farming and supporting
            technical functions.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {facilities.map((item, index) => (
            <article
              key={item.eyebrow}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal
                className={
                  index % 2
                    ? "lg:order-2 lg:col-span-6"
                    : "lg:col-span-6"
                }
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {item.text}
                </p>
              </Reveal>
              <Reveal
                delay={0.08}
                className={
                  index % 2
                    ? "relative aspect-[4/3] overflow-hidden lg:order-1 lg:col-span-6"
                    : "relative aspect-[4/3] overflow-hidden lg:col-span-6"
                }
              >
                <MediaImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </Reveal>
            </article>
          ))}
        </div>

        <div className="mt-20 overflow-hidden bg-forest-deep text-white lg:grid lg:grid-cols-12">
          <Reveal className="px-8 py-12 sm:p-14 lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Poultry Feed Manufacturing
            </p>
            <p className="mt-6 font-display text-6xl tracking-tight text-gold-light sm:text-7xl">
              12,000
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Tonnes monthly production capacity
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
              Sakthi Poultry&apos;s source documents record a feed production
              capacity of 12,000 tonnes per month. The feed plant uses machinery
              supplied and installed by Denmark-based Andritz Technologies, with
              automation and control systems supporting production operations.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              Our Sakthi Bromix broiler feed is produced in stage-specific
              formats designed around the nutritional requirements of broiler
              birds.
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

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
            <MediaImage
              src={asset("sakthi-poultry-hatching-eggs.jpg")}
              alt="Laboratory and hatchery support for poultry production"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Laboratory Support
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
              Nutritional and poultry health testing
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our operational infrastructure includes laboratory capabilities
              supporting selected nutritional and poultry health testing
              activities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The existing company information identifies in-house laboratory
              services for testing third-party raw materials for nutritional
              parameters and supporting serology and bacterial testing associated
              with breeder and broiler birds.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Broiler Farm Network
            </p>
            <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
              Collaboration with contracted poultry farmers
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our broiler production model includes collaboration with
              contracted poultry farmers. Day-old chicks are placed with broiler
              farms, while Sakthi supports the production cycle through feed
              supply, veterinary services and technical assistance.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
              Farm management focuses on
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {farmFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-line pt-4 text-sm text-ink"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-gold"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 border-t border-line pt-16 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our Strength Is Integration
            </p>
            <ol className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 font-display text-xl text-ink sm:text-2xl">
              {integrationChain.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span className="text-gold" aria-hidden>
                      →
                    </span>
                  ) : null}
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              By connecting the important stages of poultry production, Sakthi
              Poultry works toward greater control over quality, efficiency,
              productivity, safety and animal welfare. This integrated approach
              allows our people, infrastructure, farmer network and technical
              capabilities to work toward one common goal:
            </p>
            <p className="mt-6 font-display text-3xl text-forest sm:text-4xl">
              Quality Forever
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
