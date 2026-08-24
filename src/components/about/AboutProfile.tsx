import { Quote } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { integratedOperations } from "@/lib/about";

export function AboutProfile() {
  return (
    <section
      aria-labelledby="about-profile-heading"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              01 — Company Profile
            </p>
            <h2
              id="about-profile-heading"
              className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              An integrated poultry company in Tamil Nadu
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Sakthi Poultry Private Limited is an established integrated
                poultry company in Tamil Nadu, operating across the broiler
                chicken value chain with a strong commitment to quality,
                efficiency and responsible poultry production.
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
                At Sakthi Poultry, our philosophy is simple — “Quality Forever.”
                Quality begins from the parent stock and continues through
                breeder farms, hatcheries, feed production and commercial
                broiler farms. Our focus is to consistently deliver quality
                poultry while building long-term relationships with farmers,
                customers, suppliers, service providers and business partners.
              </p>
              <p>
                As part of the Vencobb family, we are proud to contribute to a
                poultry industry that supports rural development, creates income
                opportunities and provides an affordable source of animal
                protein.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <MediaImage
                src={integratedOperations[0].image}
                alt="Parent breeder farm operations at Sakthi Poultry"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <aside className="relative z-10 -mt-16 ml-auto max-w-sm border border-gold/30 bg-forest-deep p-8 text-white shadow-2xl">
              <Quote className="size-8 text-gold-light" aria-hidden />
              <p className="mt-4 font-display text-3xl leading-snug">
                “Quality Forever”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Quality begins from the parent stock and continues through every
                stage of production.
              </p>
            </aside>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {integratedOperations.map((item, index) => (
            <StaggerItem key={item.title}>
              <article className="bg-cream-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <MediaImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-baseline gap-3 px-5 py-4">
                  <span className="font-display text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
