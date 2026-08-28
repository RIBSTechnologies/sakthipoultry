import {
  ArrowRight,
  Factory,
  Handshake,
  Home,
  Store,
  Truck,
  Wheat,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { asset, birdFaceAsset, birdFaceImageClass, cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const steps = [
  {
    step: "01",
    title: "Breeding",
    text: "Quality breeding supported by stringent biosecurity and scientific flock management to maintain healthy and productive flocks.",
    icon: Home,
    image: asset("sakthi-poultry-breeding.jpg"),
  },
  {
    step: "02",
    title: "Modern Hatchery",
    text: "Advanced hatchery operations with in-ovo vaccination technology, controlled processes and high standards of hygiene and biosecurity to deliver quality day-old chicks.",
    icon: Factory,
    image: asset("sakthi-poultry-modern-hatchery.jpg"),
  },
  {
    step: "03",
    title: "Feed Manufacturing",
    text: "Quality poultry feed manufactured using carefully selected raw materials and controlled processes to support healthy growth and efficient bird performance.",
    icon: Wheat,
    image: asset("sakthi-poultry-feed-manufacturing.jpg"),
  },
  {
    step: "04",
    title: "Contract Broiler Farming",
    text: "A strong contract farming network backed by dedicated veterinary and technical teams, providing farmers with chicks, feed, technical guidance, flock health support and biosecurity practices.",
    icon: Handshake,
    image: asset("sakthi-poultry-contract-broiler-farm.jpg"),
  },
  {
    step: "05",
    title: "Integrated Logistics",
    text: "Our company-owned fleet supports the transportation of Parent Birds, Hatching Eggs and Broiler Day-Old Chicks, including refrigerated transportation where required, as well as timely delivery of live broiler birds to retail outlets.",
    icon: Truck,
    image: asset("sakthi-poultry-logistics-truck.jpg"),
  },
  {
    step: "06",
    title: "Live Bird Sales & Distribution",
    text: "Reliable supply of quality live birds to wholesale traders and retail outlets through dedicated market channels, supported by responsive service and timely delivery.",
    icon: Store,
    image: birdFaceAsset(),
    imageClass: birdFaceImageClass,
  },
];

export function ValueChain() {
  return (
    <section
      id="value-chain"
      aria-labelledby="value-chain-heading"
      className="scroll-mt-28 bg-[#eef6f2] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="value-chain-heading"
            eyebrow="Integrated Poultry Value Chain"
            title="From Breeding to Market — Quality Connected at Every Stage"
            subtitle="Sakthi Poultry brings together key stages of the poultry value chain through integrated operations, strong biosecurity, advanced technology, farmer partnerships and dedicated logistics."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold text-forest">
          {steps.map((item, i) => (
            <li key={item.step} className="flex items-center gap-2">
              {i > 0 ? (
                <span className="font-medium text-gold" aria-hidden>
                  →
                </span>
              ) : null}
              <span>{item.title}</span>
            </li>
          ))}
        </ol>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 lg:grid-cols-2">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.step}>
                <article className="grid h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-[11.5rem_1fr]">
                  <div className="relative min-h-[11rem] sm:min-h-full">
                    <MediaImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className={cn(
                        "transition duration-700 hover:scale-105",
                        "imageClass" in item && item.imageClass
                          ? item.imageClass
                          : "object-cover",
                      )}
                      sizes="(min-width: 1024px) 200px, (min-width: 640px) 184px, 100vw"
                    />
                    <span className="absolute top-3 left-3 inline-flex size-10 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 shrink-0 text-gold" aria-hidden />
                      <h3 className="font-display text-xl text-ink">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <Button href="/operations" variant="accent" size="lg" className="mt-10">
            Explore Our Operations
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
