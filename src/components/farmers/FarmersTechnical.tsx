import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { farmerImages, technicalFocus } from "@/lib/farmers";

export function FarmersTechnical() {
  return (
    <section
      aria-labelledby="farmers-technical-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="farmers-technical-heading"
              eyebrow="Technical Support for Poultry Farmers"
              title="Knowledge That Supports Better Poultry Farming"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Technical knowledge plays an important role in successful
                commercial poultry production.
              </p>
              <p>
                Our team supports poultry farmers by helping them understand the
                importance of proper husbandry practices and providing guidance
                toward the adoption of modern farming techniques.
              </p>
              <p>
                Our poultry technical support approach focuses on practical
                areas connected to responsible broiler farming, including:
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={0.08}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
          >
            <MediaImage
              src={farmerImages.technical}
              alt="Broiler chicks supported through Sakthi Poultry farmer technical guidance"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalFocus.map((item, index) => (
            <StaggerItem key={item} className="h-full">
              <article className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg leading-snug text-ink">{item}</h3>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <div className="mt-10 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Our objective is to help farming partners strengthen their
              understanding of poultry production and maintain responsible
              farming practices.
            </p>
            <p>
              This technical relationship also allows Sakthi Poultry and its
              farmers to work together toward consistent quality across the
              commercial broiler production chain.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
