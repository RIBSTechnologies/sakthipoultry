import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { integratedOperations } from "@/lib/about";

export function AboutProfile() {
  return (
    <section
      aria-labelledby="about-profile-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            02 — Company Profile
          </p>
          <h2
            id="about-profile-heading"
            className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            An Integrated Poultry Company in Tamil Nadu
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Sakthi Poultry Private Limited operates in the broiler chicken
              integration business in Tamil Nadu, South India.
            </p>
            <p>
              Our vertically integrated approach connects the important stages
              involved in producing broiler chickens—from breeding and hatching
              to nutrition, farming and distribution.
            </p>
          </div>
        </Reveal>

        <p className="mt-14 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Our Integrated Operations Include
        </p>
        <Stagger className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {integratedOperations.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <MediaImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <span className="font-display text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-10 border-t border-line pt-12 lg:grid-cols-2 lg:gap-16">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              This connected operating model helps us improve quality,
              productivity, safety, animal welfare and resource utilization
              across the production process.
            </p>
            <div>
              <h3 className="font-display text-2xl text-ink sm:text-3xl">
                A Business Built Around the Poultry Value Chain
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Our role goes beyond poultry production. We work within an
                ecosystem that brings together farmers, poultry professionals,
                suppliers, customers and business partners to create sustainable
                long-term value.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
