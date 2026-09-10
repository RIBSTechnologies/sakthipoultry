import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { labCapabilities } from "@/lib/quality";
import { asset } from "@/lib/utils";

export function QualityLab() {
  return (
    <section
      aria-labelledby="quality-lab-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-line bg-cream-2">
          <div className="grid lg:grid-cols-2">
            <Reveal className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Poultry Laboratory & Testing
                </p>
                <h2
                  id="quality-lab-heading"
                  className="mt-3 font-display text-[2.7rem] font-medium leading-tight tracking-tight text-ink"
                >
                  Supporting Poultry Quality Through Testing
                </h2>
                <div className="mt-5 space-y-3 text-base leading-relaxed text-muted">
                  <p>
                    Laboratory testing supports Sakthi Poultry&apos;s quality
                    focused operations.
                  </p>
                  <p>
                    Our in house laboratory covers poultry health, nutrition and
                    raw material testing.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                  Current Laboratory Capabilities
                </p>
                <Stagger className="mt-4 space-y-5">
                  {labCapabilities.map((item, index) => (
                    <StaggerItem key={item.title}>
                      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                        <span className="row-span-2 font-display text-2xl leading-none text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg leading-snug text-ink">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="order-1 lg:order-2">
              <div className="relative h-full min-h-[22rem] bg-forest-deep">
                <MediaImage
                  src={asset("sakthi-poultry-quality-lab-hplc.png")}
                  alt="Sakthi Poultry laboratory HPLC testing for feed additives"
                  fill
                  className="object-cover object-[58%_center]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
