import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { biosecurityAreas } from "@/lib/quality";

export function QualityBiosecurity() {
  return (
    <section
      aria-labelledby="quality-biosecurity-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="quality-biosecurity-heading"
            eyebrow="Poultry Biosecurity"
            title="Protecting the Poultry Production Environment"
          />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Poultry biosecurity and hygiene are important parts of responsible
              poultry production.
            </p>
            <p>
              Our own hatcheries operate with a strong focus on hygiene and
              biosecurity as broiler chicks move through the incubation and
              hatching process.
            </p>
            <p>
              Clean production environments are also an important part of our
              wider approach to breeder and broiler operations.
            </p>
            <p>
              By keeping biosecurity and hygiene at the centre of poultry
              management, we support our broader commitment to bird health,
              welfare and consistent poultry production.
            </p>
          </div>
        </Reveal>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Biosecurity Across Our Operations
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {biosecurityAreas.map((item, index) => (
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

        <Reveal delay={0.08}>
          <p className="mt-10 font-display text-2xl text-forest">
            Biosecurity is an integral part of our commitment to Quality
            forever.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
