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
            04 — Leadership
          </p>
          <h2
            id="about-leadership-heading"
            className="mt-4 max-w-4xl font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Experienced People. Shared Commitment. One Standard of Quality.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
            <p>
              Behind Sakthi Poultry&apos;s integrated operations is a dedicated
              team with experience across different areas of the commercial
              broiler poultry industry.
            </p>
            <p>
              Our team brings together professionals with diverse expertise
              across poultry operations and shares a strong commitment to the
              development of the company and the poultry sector.
            </p>
          </div>
        </Reveal>

        <p className="mt-14 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
          Our leadership approach is centred around
        </p>
        <Stagger className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipPrinciples.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col bg-forest-deep p-7 sm:p-8">
                <span className="font-display text-sm text-gold-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-2xl font-display text-2xl leading-snug text-gold-light sm:text-3xl">
            Together, our people help transform experience into consistent
            poultry performance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
