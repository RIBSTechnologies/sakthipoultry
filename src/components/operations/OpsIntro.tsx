import { Quote } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { asset } from "@/lib/utils";

export function OpsIntro() {
  return (
    <section
      aria-labelledby="ops-intro-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="flex h-full flex-col lg:col-span-7">
          <SectionHeading
            id="ops-intro-heading"
            eyebrow="Operations"
            title="Quality is built into every stage of our integrated poultry operations"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Our production process connects breeder farms, poultry hatcheries,
              feed manufacturing and commercial broiler farms within one
              coordinated broiler poultry value chain. This integrated approach
              enables us to maintain consistent attention to bird well-being,
              nutrition, hygiene, biosecurity and product quality throughout
              the production cycle.
            </p>
            <p>
              Supported by an experienced poultry team and long-term farmer
              relationships, our operations are guided by one clear principle:
            </p>
          </div>
          <aside className="mt-8 flex flex-1 flex-col justify-center rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-9">
            <div className="flex items-center gap-3">
              <Quote className="size-7 shrink-0 text-gold-light" aria-hidden />
              <p className="whitespace-nowrap font-display text-2xl leading-none sm:text-3xl">
                Quality forever.
              </p>
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="relative min-h-[22rem] overflow-hidden rounded-2xl lg:h-full">
            <MediaImage
              src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
              alt="Sakthi Poultry integrated farm facilities in Tamil Nadu"
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
