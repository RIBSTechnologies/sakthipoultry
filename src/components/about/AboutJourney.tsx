import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { asset } from "@/lib/utils";

export function AboutJourney() {
  return (
    <section
      aria-labelledby="about-journey-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-7">
          <SectionHeading
            id="about-journey-heading"
            eyebrow="Our Journey"
            title="More Than Three Decades in Broiler Poultry Integration"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              For more than three decades, Sakthi Poultry has grown with a clear
              focus on the broiler poultry industry, integrated operations and
              consistent quality.
            </p>
            <p>
              Our journey has evolved from poultry production into a connected
              business model that brings together breeding, hatchery operations,
              broiler nutrition, contract farming and distribution. The
              company&apos;s existing records state more than 33 years of
              experience in broiler poultry integration, reflecting a strong
              foundation of industry knowledge and operational experience.
            </p>
            <p>
              As the poultry industry continues to develop, Sakthi Poultry
              continues to strengthen its capabilities through improved farming
              practices, technology, nutritional expertise and closer
              collaboration with farmers and industry partners.
            </p>
            <p>
              Our growth is guided by one consistent objective — to improve the
              poultry production chain while maintaining high standards of
              quality, bird health, safety and responsible farming.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="relative h-56">
              <MediaImage
                src={asset("sakthi-poultry-journey-team.jpg")}
                alt="Sakthi Poultry leadership team reviewing operations"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="p-7 sm:p-8">
              <p className="font-display text-6xl text-forest">33</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                Years of experience
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                More than 33 years of experience in broiler poultry integration.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
