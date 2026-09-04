import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { leadershipPrinciples } from "@/lib/about";

export function AboutLeadership() {
  return (
    <section
      aria-labelledby="about-leadership-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-leadership-heading"
            eyebrow="Leadership"
            title="Dedicated People Across Commercial Broiler Poultry Integration"
            subtitle="Sakthi Poultry is supported by a dedicated team of professionals with experience across different areas of commercial broiler poultry integration."
          />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Our Managing Director,{" "}
              <strong className="font-semibold text-ink">Mr. A. Nagarajan</strong>,
              provides strong leadership with a focus on quality, operational
              excellence and sustainable growth.
            </p>
            <p>
              Our experienced team brings expertise across breeding, hatchery
              management, poultry nutrition, broiler farming, veterinary support
              and production management, enabling us to operate an integrated and
              efficient poultry business.
            </p>
            <p>
              Sakthi Poultry continues to embrace{" "}
              <strong className="font-semibold text-ink">
                technology, innovation and professional management
              </strong>{" "}
              while working closely with farmers, customers, suppliers and
              partners to achieve shared success.
            </p>
          </div>
        </Reveal>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Our leadership philosophy is built around
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {leadershipPrinciples.map((item, index) => (
            <StaggerItem key={item} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-cream-2 p-5 shadow-sm">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg leading-snug text-ink">
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
