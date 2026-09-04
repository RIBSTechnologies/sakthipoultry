import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { capabilities } from "@/lib/operations";

export function OpsCapabilities() {
  return (
    <section
      aria-labelledby="ops-capabilities-heading"
      className="bg-cream-2 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="ops-capabilities-heading"
            eyebrow="Our Strength & Capabilities"
            title="Integrated Operations. Experienced People. Quality Focus."
            subtitle="Sakthi Poultry's operational strength comes from bringing together important poultry production activities within one integrated business model."
          />
        </Reveal>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Our key capabilities include
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
                <span className="font-display text-sm text-gold">
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
      </div>
    </section>
  );
}
