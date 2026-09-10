import { FlaskConical } from "lucide-react";
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
        <Reveal>
          <article className="overflow-hidden rounded-2xl border border-line bg-cream-2 shadow-sm lg:grid lg:grid-cols-12">
            <div className="relative min-h-[280px] lg:col-span-5 lg:min-h-full">
              <MediaImage
                src={asset("sakthi-poultry-quality-lab-hplc.png")}
                alt="Sakthi Poultry laboratory HPLC testing for feed additives"
                fill
                className="object-cover object-[center_20%]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <p className="inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                <FlaskConical className="size-3.5" aria-hidden />
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
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-forest-deep p-6 text-white sm:p-8 lg:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Current Laboratory Capabilities
            </p>

            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
              {labCapabilities.map((item, index) => (
                <StaggerItem key={item.title}>
                  <article className="h-full rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/10 sm:p-6">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-2xl leading-none text-gold-light">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl leading-snug text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
