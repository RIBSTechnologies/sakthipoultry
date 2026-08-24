import { Reveal } from "@/components/ui/Reveal";
import { coreValues } from "@/lib/about";

export function AboutPurpose() {
  return (
    <section
      aria-labelledby="about-purpose-heading"
      className="bg-[#f7f4ef] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            04 — Vision, Mission & Values
          </p>
          <h2
            id="about-purpose-heading"
            className="mt-5 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
          >
            A trusted and responsible integrated poultry enterprise
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 border-y border-line py-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our Vision
            </p>
            <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-[1.85rem]">
              To build a trusted and responsible integrated poultry enterprise
              that consistently delivers quality while creating long-term value
              for customers, farmers, partners and communities.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our Mission
            </p>
            <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-[1.85rem]">
              To strengthen every stage of the poultry value chain through
              quality-focused operations, efficient production, technical
              expertise, responsible farming practices and mutually beneficial
              partnerships.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-14 text-[11px] font-semibold uppercase tracking-[0.28em] text-forest">
            Our values are reflected in the way we operate every day
          </p>
        </Reveal>

        <dl className="mt-8 divide-y divide-line border-y border-line">
          {coreValues.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8"
            >
              <dt className="flex items-baseline gap-4 sm:col-span-5">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl text-ink">{item.title}</span>
              </dt>
              <dd className="text-base leading-relaxed text-muted sm:col-span-7">
                {item.text}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
