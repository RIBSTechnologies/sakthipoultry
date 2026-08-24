import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { qualityFocus } from "@/lib/quality";

export function QualityAssurance() {
  return (
    <section
      aria-labelledby="quality-assurance-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="quality-assurance-heading"
            eyebrow="Poultry Quality Assurance"
            title="Quality Across Every Stage of Production"
            subtitle="Our approach to poultry quality assurance extends throughout the broiler production cycle. From breeder operations and hatching to poultry nutrition and commercial broiler farming, we maintain a consistent focus on responsible production practices and quality."
          />
        </Reveal>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Key areas of our quality-focused approach include
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qualityFocus.map((item, index) => (
            <StaggerItem key={item} className="h-full">
              <article className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg leading-snug text-ink">
                  {item}
                </h3>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted">
            By maintaining quality awareness throughout these interconnected
            operations, we work to support the consistency expected from an
            integrated poultry company. Quality begins at the farm and continues
            through every stage of our operations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
