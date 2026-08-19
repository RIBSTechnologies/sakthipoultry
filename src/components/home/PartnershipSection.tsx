import {
  ArrowRight,
  ClipboardList,
  Stethoscope,
  Wheat,
  Tractor,
  Handshake,
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
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/farmers-partners#apply" variant="accent" size="lg">
              Become a Farming Partner
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href="/contact?type=dealer" variant="outline" size="lg">
              Partner With Sakthi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
