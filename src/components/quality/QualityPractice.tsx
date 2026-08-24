import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { welfarePoints } from "@/lib/quality";
import { asset } from "@/lib/utils";

export function QualityPractice() {
  return (
    <>
      <section
        aria-labelledby="quality-food-heading"
        className="bg-cream-2 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="quality-food-heading"
              eyebrow="Poultry Food Safety"
              title="Quality and Hygiene from Production to Product"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>Poultry food safety begins with responsible production.</p>
              <p>
                Sakthi Poultry focuses on maintaining clean environments,
                balanced poultry nutrition and appropriate hygiene throughout
                its broiler production operations.
              </p>
              <p>
                Our existing production philosophy places strong importance on
                product quality, safety and hygiene throughout the poultry
                production process.
              </p>
              <p>
                By connecting quality practices across breeder farms,
                hatcheries, poultry feed production and broiler farms, we work
                to maintain our commitment to providing quality broiler poultry.
              </p>
            </div>
            <p className="mt-8 font-display text-2xl text-forest sm:text-3xl">
              Safe practices. Responsible production. Consistent attention to
              quality.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
            <MediaImage
              src={asset("sakthi-poultry-chicken-meat.jpg")}
              alt="Quality chicken products from Sakthi Poultry production"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="quality-welfare-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                id="quality-welfare-heading"
                eyebrow="Animal Welfare in Poultry Farming"
                title="Bird Well-Being Matters at Every Stage"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  The health and well-being of birds are important
                  considerations within our poultry operations.
                </p>
                <p>
                  Our chickens are raised in clean environments with attention
                  to their surroundings, nutrition and general well-being. They
                  are provided balanced diets consisting of appropriate
                  nutritional inputs to support growth and development.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
              <MediaImage
                src={asset("sakthi-poultry-welfare-bird.jpg")}
                alt="Healthy broiler birds raised with attention to well-being"
                fill
                className="object-cover object-[center_40%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </Reveal>
          </div>

          <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
            Our approach to animal welfare in poultry farming considers
          </p>
          <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {welfarePoints.map((item, index) => (
              <StaggerItem key={item} className="h-full">
                <article className="flex h-full items-start gap-3 rounded-2xl border border-line bg-cream-2 p-5 shadow-sm">
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
            <div className="mt-10 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our farmer network also receives technical guidance to help
                improve awareness of proper husbandry practices and modern
                poultry farming methods.
              </p>
              <p>
                Through responsible poultry management, we aim to support both
                bird well-being and quality production.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
