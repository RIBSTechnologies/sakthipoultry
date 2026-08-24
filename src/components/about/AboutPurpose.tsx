import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { coreValues } from "@/lib/about";

export function AboutPurpose() {
  const featured = coreValues[0];
  const rest = coreValues.slice(1);

  return (
    <section
      aria-labelledby="about-purpose-heading"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            04 — Vision, Mission & Values
          </p>
          <h2
            id="about-purpose-heading"
            className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            A trusted poultry enterprise, guided by one standard
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
          <Reveal className="bg-cream-2 p-8 sm:p-12 lg:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Our Vision
            </p>
            <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl">
              To build a trusted and responsible integrated poultry enterprise
              that consistently delivers quality while creating long-term value
              for customers, farmers, partners and communities.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="bg-forest p-8 text-white sm:p-12 lg:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Our Mission
            </p>
            <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
              To strengthen every stage of the poultry value chain through
              quality-focused operations, efficient production, technical
              expertise, responsible farming practices and mutually beneficial
              partnerships.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-16 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
            Our values are reflected in the way we operate every day
          </p>
        </Reveal>

        <article className="mt-8 border border-gold/40 bg-cream-2 p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            01
          </p>
          <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {featured.text}
          </p>
        </article>

        <Stagger className="mt-px grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col bg-white p-7 sm:p-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
