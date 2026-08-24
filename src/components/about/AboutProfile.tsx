import { Quote } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { asset } from "@/lib/utils";

export function AboutProfile() {
  return (
    <section
      aria-labelledby="about-profile-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <Reveal className="flex h-full flex-col lg:col-span-7">
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
              breeder farms, hatcheries, feed production and commercial broiler
              farms. Our focus is to consistently deliver quality poultry while
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
          <div className="relative mt-8 min-h-[280px] flex-1 overflow-hidden rounded-2xl sm:min-h-[320px]">
            <MediaImage
              src={asset("sakthi-poultry-contract-broiler-farm.jpg")}
              alt="Contract broiler farms in the Sakthi Poultry network"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex h-full flex-col gap-5 lg:col-span-5">
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-2xl">
            <MediaImage
              src={asset("sakthi-poultry-live-birds.jpg")}
              alt="A broiler bird at a Sakthi Poultry farm"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <aside className="rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-8">
            <Quote className="size-8 text-gold-light" aria-hidden />
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
              “Quality Forever”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Quality begins from the parent stock and continues through breeder
              farms, hatcheries, feed production and commercial broiler farms.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
