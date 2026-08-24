import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { farmerImages, farmerSupport } from "@/lib/farmers";

export function FarmersSupport() {
  return (
    <section
      aria-labelledby="farmers-support-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="farmers-support-heading"
              eyebrow="For Poultry Farmers"
              title="Farmers are an important part of our value chain"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our farmer-based business model works with poultry farmers
                through technical support, resources and guidance on proper
                poultry husbandry practices.
              </p>
              <p>
                Farmer partnerships also form an important part of our broiler
                business. Our team provides technical guidance and encourages
                proper husbandry practices and modern farming methods within
                the farming community.
              </p>
              <p>
                Our broiler production network extends through contracted poultry
                farmers, who are supported with feed supply, veterinary services
                and technical guidance throughout the production cycle.
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={0.08}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
          >
            <MediaImage
              src={farmerImages.support}
              alt="Broiler day-old chicks for commercial poultry farming"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {farmerSupport.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <Button href="#apply" variant="accent" className="mt-10">
            Become Sakthi Farmer
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
