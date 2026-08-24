import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { integratedOperations } from "@/lib/about";
import { asset } from "@/lib/utils";

export function AboutProfile() {
  return (
    <section
      aria-labelledby="about-profile-heading"
      className="bg-[#f7f4ef] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              01 — Company Profile
            </p>
            <p className="mt-8 font-display text-5xl leading-none text-forest sm:text-6xl">
              “Quality Forever”
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Quality begins from the parent stock and continues through breeder
              farms, hatcheries, feed production and commercial broiler farms.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-8">
            <h2
              id="about-profile-heading"
              className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
            >
              Sakthi Poultry Private Limited is an established integrated
              poultry company in Tamil Nadu
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.85] text-muted sm:text-lg">
              <p>
                We operate across the broiler chicken value chain with a strong
                commitment to quality, efficiency and responsible poultry
                production.
              </p>
              <p>
                Our operations connect parent breeder farms, hatching eggs,
                hatcheries, poultry feed production, broiler farming and market
                distribution, allowing us to maintain greater control across
                critical stages of production. This integrated approach supports
                better coordination, productivity, product consistency, animal
                welfare and operational efficiency.
              </p>
              <p>
                Our focus is to consistently deliver quality poultry while
                building long-term relationships with farmers, customers,
                suppliers, service providers and business partners.
              </p>
              <p>
                As part of the Vencobb family, we are proud to contribute to a
                poultry industry that supports rural development, creates income
                opportunities and provides an affordable source of animal
                protein.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <MediaImage
              src={asset("sakthi-poultry-live-birds.jpg")}
              alt="Broiler birds at a Sakthi Poultry farm"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
          <Stagger className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-forest">
              Connected across the value chain
            </p>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {integratedOperations.map((item, index) => (
                <StaggerItem key={item.title}>
                  <li className="flex items-center gap-5 py-4">
                    <span className="w-8 font-display text-lg text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative size-14 shrink-0 overflow-hidden">
                      <MediaImage
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  </li>
                </StaggerItem>
              ))}
            </ol>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
