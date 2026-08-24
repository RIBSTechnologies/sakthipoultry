import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

export function AboutJourney() {
  return (
    <section
      aria-labelledby="about-journey-heading"
      className="relative isolate overflow-hidden bg-forest-deep py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-8 top-10 select-none font-display text-[12rem] leading-none text-white/5 sm:text-[16rem] lg:text-[20rem]">
        33
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light">
            02 — Our Journey
          </p>
          <p className="mt-8 font-display text-8xl leading-none tracking-tight text-gold-light sm:text-9xl">
            33
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Years in broiler poultry integration
          </p>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden">
            <MediaImage
              src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
              alt="Sakthi Poultry farm complex in Tamil Nadu"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <h2
            id="about-journey-heading"
            className="font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
          >
            For more than three decades, grown around integration and quality
          </h2>
          <div className="mt-8 space-y-5 text-base leading-[1.85] text-white/75 sm:text-lg">
            <p>
              For more than three decades, Sakthi Poultry has grown with a clear
              focus on the broiler poultry industry, integrated operations and
              consistent quality.
            </p>
            <p>
              Our journey has evolved from poultry production into a connected
              business model that brings together breeding, hatchery operations,
              broiler nutrition, contract farming and distribution. The
              company&apos;s existing records state more than 33 years of
              experience in broiler poultry integration, reflecting a strong
              foundation of industry knowledge and operational experience.
            </p>
            <p>
              As the poultry industry continues to develop, Sakthi Poultry
              continues to strengthen its capabilities through improved farming
              practices, technology, nutritional expertise and closer
              collaboration with farmers and industry partners.
            </p>
            <p>
              Our growth is guided by one consistent objective — to improve the
              poultry production chain while maintaining high standards of
              quality, bird health, safety and responsible farming.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
