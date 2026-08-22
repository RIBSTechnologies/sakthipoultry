import {
  ArrowRight,
  ClipboardList,
  Stethoscope,
  Wheat,
  Tractor,
  Handshake,
  Store,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { asset } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const benefits = [
  {
    title: "Technical Guidance",
    text: "Practical production support for farming operations.",
    icon: ClipboardList,
  },
  {
    title: "Veterinary Support",
    text: "Preventive health management.",
    icon: Stethoscope,
  },
  {
    title: "Feed Support",
    text: "Direct access to targeted nutrition.",
    icon: Wheat,
  },
  {
    title: "Modern Farming Practices",
    text: "Guidance on husbandry and animal welfare.",
    icon: Tractor,
  },
  {
    title: "Long-Term Relationships",
    text: "Fair, mutually beneficial contracts.",
    icon: Handshake,
  },
];

const partnerPaths = [
  {
    title: "Become a Sakthi Trader",
    text: "Join our wholesale live-bird network with scheduled lots, uniform weights and dedicated market support for redistribution.",
    href: "/contact?type=dealer",
    cta: "Enquire Now",
    icon: Store,
  },
  {
    title: "Become a Sakthi Retailer",
    text: "Supply your outlet with quality live birds through dedicated channels, timely delivery and responsive service.",
    href: "/contact?type=dealer",
    cta: "Enquire Now",
    icon: ShoppingBag,
  },
];

export function PartnershipSection() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="scroll-mt-28 bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="partners-heading"
            eyebrow="Farmer & Partner Network"
            title="Growing Poultry. Growing Partnerships."
            subtitle="Farmers Are an Important Part of Our Value Chain"
          />
        </Reveal>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80 lg:h-full lg:min-h-[28rem]">
              <MediaImage
                src={asset("sakthi-poultry-contract-broiler-farm.jpg")}
                alt="Contract broiler farms in the Sakthi Poultry network"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-7">
            <Stagger className="grid auto-rows-fr gap-4 sm:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === benefits.length - 1;

                return (
                  <StaggerItem
                    key={item.title}
                    className={isLast ? "h-full sm:col-span-2" : "h-full"}
                  >
                    <article className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-lg leading-snug text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal delay={0.1} className="mt-8">
              <Button href="/farmers-partners#apply" variant="accent" size="lg">
                Become Sakthi Farmer
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-4 md:grid-cols-2 md:gap-6">
          {partnerPaths.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-forest text-gold-light">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                  <Button
                    href={item.href}
                    variant="outline"
                    size="sm"
                    className="mt-6 self-start"
                  >
                    {item.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
