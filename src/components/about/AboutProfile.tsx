import { Quote } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { integratedOperations } from "@/lib/about";
import { asset } from "@/lib/utils";

export function AboutProfile() {
  return (
    <section
      aria-labelledby="about-profile-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              id="about-profile-heading"
              eyebrow="Company Profile"
              title="An Integrated Poultry Company in Tamil Nadu"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
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

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-2xl">
              <MediaImage
                src={asset("sakthi-poultry-live-birds.jpg")}
                alt="Broiler birds at a Sakthi Poultry farm"
                width={900}
                height={620}
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
            <aside className="rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-9">
              <Quote className="size-8 text-gold-light" aria-hidden />
              <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
                “Quality Forever”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Quality begins from the parent stock and continues through
                breeder farms, hatcheries, feed production and commercial
                broiler farms.
              </p>
            </aside>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integratedOperations.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <MediaImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
