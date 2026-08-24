import { Reveal } from "@/components/ui/Reveal";

export function AboutJourney() {
  return (
    <section
      aria-labelledby="about-journey-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              02 — Our Journey
            </p>
            <h2
              id="about-journey-heading"
              className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              More than three decades in broiler poultry integration
            </h2>
            <p className="mt-8 font-display text-7xl tracking-tight text-gold sm:text-8xl">
              33
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-forest">
              Years of experience
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                For more than three decades, Sakthi Poultry has grown with a
                clear focus on the broiler poultry industry, integrated
                operations and consistent quality.
              </p>
              <p>
                Our journey has evolved from poultry production into a connected
                business model that brings together breeding, hatchery
                operations, broiler nutrition, contract farming and
                distribution. The company’s existing records state more than 33
                years of experience in broiler poultry integration, reflecting a
                strong foundation of industry knowledge and operational
                experience.
              </p>
              <p>
                As the poultry industry continues to develop, Sakthi Poultry
                continues to strengthen its capabilities through improved
                farming practices, technology, nutritional expertise and closer
                collaboration with farmers and industry partners.
              </p>
              <p>
                Our growth is guided by one consistent objective — to improve
                the poultry production chain while maintaining high standards of
                quality, bird health, safety and responsible farming.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
