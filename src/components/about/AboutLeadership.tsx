import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { leadershipPrinciples } from "@/lib/about";

export function AboutLeadership() {
  return (
    <section
      aria-labelledby="about-leadership-heading"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <Reveal className="lg:col-span-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            03 — Leadership
          </p>
          <h2
            id="about-leadership-heading"
            className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
          >
            Dedicated people across commercial broiler poultry integration
          </h2>
          <div className="mt-8 space-y-5 text-base leading-[1.85] text-muted sm:text-lg">
            <p>
              Sakthi Poultry is supported by a dedicated team of professionals
              with experience across different areas of commercial broiler
              poultry integration.
            </p>
            <p>
              Our people bring together knowledge in breeding, hatchery
              management, poultry nutrition, broiler farming, veterinary support
              and production management. This diverse operational expertise
              enables the company to manage an integrated poultry business while
              continually improving quality and productivity.
            </p>
            <p>
              We believe sustainable growth comes not only from infrastructure
              and scale, but from experienced people working together with
              farmers, customers, suppliers and partners toward shared success.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
            Our leadership philosophy is built around
          </p>
          <Stagger className="mt-6 border-t border-line">
            {leadershipPrinciples.map((item, index) => (
              <StaggerItem key={item}>
                <article className="grid grid-cols-[4rem_1fr] items-baseline gap-4 border-b border-line py-6">
                  <span className="font-display text-2xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-ink sm:text-[1.65rem]">
                    {item}
                  </h3>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
