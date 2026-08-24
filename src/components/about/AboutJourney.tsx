import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { journeyStages } from "@/lib/about";

export function AboutJourney() {
  return (
    <section
      aria-labelledby="about-journey-heading"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              03 — Our Journey
            </p>
            <h2
              id="about-journey-heading"
              className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              More Than Three Decades of Poultry Industry Experience
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Sakthi Poultry&apos;s journey has been built around a long-term
                commitment to the broiler poultry industry, quality production
                and continuous operational development.
              </p>
              <p>
                The company&apos;s existing source material records more than
                three decades of experience in broiler poultry integration.
              </p>
              <p>
                Over the years, our business has developed into an integrated
                poultry operation connecting important stages of the production
                cycle.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
              From Poultry Production to Integrated Operations
            </p>
            <Stagger className="mt-6">
              {journeyStages.map((item, index) => (
                <StaggerItem key={item.title}>
                  <article className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-6 last:border-b last:border-line">
                    <span className="font-display text-2xl text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
          <Reveal className="bg-cream-2 p-8 sm:p-12">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              Growing with the Industry
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              As consumer demand, poultry farming practices and production
              technologies continue to evolve, Sakthi Poultry aims to strengthen
              its operations through innovation, technical expertise and
              responsible poultry management.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our existing company philosophy recognizes that future poultry
              production requires innovative thinking and technology while
              maintaining standards for animal welfare, bird health, product
              quality and safety.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="bg-forest-deep p-8 text-white sm:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Heritage
            </p>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl">
              Part of the Vencobb Family
            </h3>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              We take pride in being part of the Vencobb family, contributing to
              an industry that supports rural development, income-generating
              opportunities and access to affordable animal protein.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
