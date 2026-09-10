import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { labCapabilities } from "@/lib/quality";
import { asset } from "@/lib/utils";

export function QualityLab() {
  return (
    <section
      aria-labelledby="quality-lab-heading"
      className="bg-cream-2 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Poultry Laboratory & Testing
          </p>
          <h2
            id="quality-lab-heading"
            className="mt-3 max-w-4xl font-display text-[2.7rem] font-medium leading-tight tracking-tight text-ink"
          >
            Supporting Poultry Quality Through Testing
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 text-base leading-relaxed text-muted">
            <p>
              Laboratory testing supports Sakthi Poultry&apos;s quality focused
              operations.
            </p>
            <p>
              Our in house laboratory covers poultry health, nutrition and raw
              material testing.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-forest-deep">
              <MediaImage
                src={asset("sakthi-poultry-quality-lab-hplc.png")}
                alt="Sakthi Poultry laboratory HPLC testing for feed additives"
                width={900}
                height={1200}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6 lg:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                Current Laboratory Capabilities
              </p>
              <Stagger className="mt-5 space-y-4">
                {labCapabilities.map((item, index) => (
                  <StaggerItem key={item.title}>
                    <article className="flex gap-4 border-b border-line pb-4 last:border-b-0 last:pb-0">
                      <span className="shrink-0 font-display text-xl text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg leading-snug text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
