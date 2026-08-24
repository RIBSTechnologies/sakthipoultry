import { Quote } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

export function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-heading"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            01 — Our Story
          </p>
          <h2
            id="about-story-heading"
            className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Quality begins with parent stock and continues to market.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              From parent breeder farms and hatching operations to poultry feed,
              broiler farming and market distribution, our integrated business
              model enables greater coordination, operational efficiency and
              quality control throughout the broiler production process.
            </p>
            <p>
              This commitment begins from the parent stock and continues through
              our breeder farms, hatcheries, feed production and commercial
              broiler farms, helping us maintain consistent standards throughout
              our operations.
            </p>
            <p>
              We work with farmers, retailers, customers, suppliers, service
              providers and business associates with a focus on developing fair,
              mutually beneficial and long-term relationships.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <MediaImage
              src={asset("sakthi-poultry-live-birds.jpg")}
              alt="Broiler birds at a Sakthi Poultry farm"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <aside className="relative z-10 -mt-16 ml-auto max-w-md border border-gold/30 bg-forest-deep p-8 text-white shadow-2xl sm:p-10">
            <Quote className="size-8 text-gold-light" aria-hidden />
            <p className="mt-4 font-display text-3xl leading-snug sm:text-4xl">
              “Quality Forever”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              At the heart of Sakthi Poultry is a simple and enduring
              philosophy — the standard that guides every stage of our work.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
