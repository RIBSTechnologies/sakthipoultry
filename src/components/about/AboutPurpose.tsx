import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { coreValues } from "@/lib/about";

export function AboutPurpose() {
  return (
    <section
      aria-labelledby="about-purpose-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-purpose-heading"
            eyebrow="Vision, Mission & Values"
            title="A Trusted Poultry Enterprise, Guided by One Standard"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-line bg-white p-8 shadow-sm sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Our Vision
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-ink">
                To build a trusted and responsible integrated poultry enterprise
                that consistently delivers quality while creating long-term value
                for customers, farmers, partners and communities.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl bg-forest-deep p-8 text-white shadow-lg sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
                Our Mission
              </p>
              <p className="mt-4 font-display text-2xl leading-snug">
                To strengthen every stage of the poultry value chain through
                quality-focused operations, efficient production, technical
                expertise, responsible farming practices and mutually beneficial
                partnerships.
              </p>
            </article>
          </Reveal>
        </div>

        <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Our values are reflected in the way we operate every day
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((item, index) => (
            <StaggerItem
              key={item.title}
              className={index === 0 ? "h-full sm:col-span-2 lg:col-span-3" : "h-full"}
            >
              <article
                className={
                  index === 0
                    ? "flex h-full flex-col rounded-2xl bg-forest-deep p-6 text-white shadow-sm sm:p-8"
                    : "flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm"
                }
              >
                <h3
                  className={
                    index === 0
                      ? "font-display text-2xl sm:text-3xl"
                      : "font-display text-xl text-ink"
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    index === 0
                      ? "mt-3 max-w-3xl text-base leading-relaxed text-white/80"
                      : "mt-3 text-sm leading-relaxed text-muted"
                  }
                >
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
