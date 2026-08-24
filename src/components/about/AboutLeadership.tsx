import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { leadershipPrinciples } from "@/lib/about";

export function AboutLeadership() {
  return (
    <section
      aria-labelledby="about-leadership-heading"
      className="bg-forest-deep py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light">
            03 — Leadership
          </p>
          <h2
            id="about-leadership-heading"
            className="mt-4 max-w-4xl font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Dedicated people across commercial broiler poultry integration
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
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
              Our leadership philosophy is built around quality-driven
              decision-making, operational discipline, technical knowledge,
              continuous improvement and long-term partnerships.
            </p>
            <p>
              We believe sustainable growth comes not only from infrastructure
              and scale, but from experienced people working together with
              farmers, customers, suppliers and partners toward shared success.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {leadershipPrinciples.map((item, index) => (
            <StaggerItem key={item} className="h-full">
              <article className="flex h-full flex-col bg-forest-deep p-6 sm:p-7">
                <span className="font-display text-sm text-gold-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug">
                  {item}
                </h3>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
