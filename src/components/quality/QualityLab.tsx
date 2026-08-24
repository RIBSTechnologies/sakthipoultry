import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { labCapabilities } from "@/lib/quality";

export function QualityLab() {
  return (
    <section
      aria-labelledby="quality-lab-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="quality-lab-heading"
            eyebrow="Poultry Laboratory & Testing"
            title="Supporting Poultry Quality Through Testing"
          />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Laboratory testing forms part of Sakthi Poultry&apos;s
              quality-focused operations.
            </p>
            <p>
              Our in-house poultry laboratory supports testing related to
              poultry operations and raw materials.
            </p>
          </div>
        </Reveal>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Current laboratory capabilities include
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 lg:grid-cols-3">
          {labCapabilities.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted">
            These laboratory capabilities support our broader focus on poultry
            nutrition, bird health and quality across our integrated production
            system.
          </p>
          <p className="mt-6 font-display text-2xl text-forest sm:text-3xl">
            Quality through knowledge, testing and responsible management
          </p>
        </Reveal>
      </div>
    </section>
  );
}
