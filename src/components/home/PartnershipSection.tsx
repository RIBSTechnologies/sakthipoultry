import {
  ArrowRight,
  ClipboardList,
  Handshake,
  Stethoscope,
  Tractor,
  Wheat,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { asset } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { SectionBackdrop } from "./SectionBackdrop";

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

const partnerBoxes = [
  {
    title: "Become a Sakthi Trader",
    text: "Source uniform live birds for wholesale markets, with scheduled lots and dedicated commercial support.",
    href: "/contact?type=dealer",
    cta: "Join as Trader",
    image: asset("aerial-complex-05.jpg"),
  },
  {
    title: "Become a Sakthi Retailer",
    text: "Reliable live-bird supply for your outlet, with timely delivery from our company-owned logistics fleet.",
    href: "/contact?type=dealer",
    cta: "Join as Retailer",
    image: asset("chickens-feeding.jpg"),
  },
];

export function PartnershipSection() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <SectionBackdrop
        src={asset("aerial-farm-04.jpg")}
        overlay="from-cream-2/92 via-cream-2/88 to-cream-2/90"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl">
              <MediaImage
                src={asset("aerial-farm-04.jpg")}
                alt="Contract broiler farms in the Sakthi Poultry network"
                width={900}
                height={720}
                className="h-80 w-full object-cover lg:h-[28rem]"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              id="partners-heading"
              eyebrow="Farmer & Partner Network"
              title="Growing Poultry. Growing Partnerships."
              subtitle="Farmers Are an Important Part of Our Value Chain"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-line bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-3 font-display text-lg text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8">
              <Button href="/farmers-partners#apply" variant="accent" size="lg">
                Become Sakthi Farmer
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {partnerBoxes.map((box) => (
            <article
              key={box.title}
              className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-sm sm:grid-cols-5"
            >
              <div className="relative min-h-[180px] sm:col-span-2">
                <MediaImage
                  src={box.image}
                  alt={box.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:col-span-3 sm:p-8">
                <h3 className="font-display text-2xl text-ink">{box.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{box.text}</p>
                <Button href={box.href} variant="outline" size="md" className="mt-5 w-fit">
                  {box.cta}
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
