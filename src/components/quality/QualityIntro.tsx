import { Quote } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { asset } from "@/lib/utils";

export function QualityIntro() {
  return (
    <section
      aria-labelledby="quality-intro-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="flex h-full flex-col lg:col-span-7">
          <SectionHeading
            id="quality-intro-heading"
            eyebrow="Poultry Quality & Biosecurity"
            title="Quality is built into every stage of our poultry operations"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Our commitment begins when parent birds are housed at our breeder
              farms and continues through hatcheries, feed production and
              commercial broiler farms. Across this integrated poultry value
              chain, we focus on bird well-being, balanced nutrition, clean
              environments, hygiene, biosecurity and product quality.
            </p>
            <p>
              Our approach is guided by the philosophy that defines Sakthi
              Poultry:
            </p>
          </div>
          <aside className="mt-8 flex flex-1 flex-col justify-center rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-9">
            <div className="flex items-center gap-3">
              <Quote className="size-7 shrink-0 text-gold-light" aria-hidden />
              <p className="whitespace-nowrap font-display text-2xl leading-none sm:text-3xl">
                Quality Forever
              </p>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              For us, quality is not simply the final outcome. It is part of the
              way we operate every day.
            </p>
          </aside>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="relative min-h-[22rem] overflow-hidden rounded-2xl lg:h-full">
            <MediaImage
              src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
              alt="Sakthi Poultry farm facilities supporting quality production"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
