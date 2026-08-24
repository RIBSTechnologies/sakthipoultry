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
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-7">
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

          <aside className="mt-8 rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-9">
            <div className="flex items-center gap-3">
              <Quote className="size-7 shrink-0 text-gold-light" aria-hidden />
              <p className="whitespace-nowrap font-display text-2xl leading-none sm:text-3xl">
                “Quality Forever”
              </p>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Quality begins from the parent stock and continues through breeder
              farms, hatcheries, feed production and commercial broiler farms.
            </p>
          </aside>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
          <MediaImage
            src={asset("sakthi-poultry-about-live-bird.jpg")}
            alt="A broiler bird at a Sakthi Poultry farm"
            fill
            className="object-cover object-[center_35%]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
