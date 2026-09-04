import {
  Bird,
  Wheat,
  Egg,
  Handshake,
  Wrench,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const actions = [
  {
    title: "Broiler Chicks",
    href: "/contact?type=product",
    icon: Bird,
  },
  {
    title: "Poultry Feed",
    href: "/contact?type=product",
    icon: Wheat,
  },
  {
    title: "Hatching Eggs",
    href: "/contact?type=product",
    icon: Egg,
  },
  {
    title: "Become Sakthi Farmer",
    href: "/farmers-partners#apply",
    icon: Handshake,
  },
  {
    title: "Poultry Equipment",
    href: "/contact?type=product",
    icon: Wrench,
  },
  {
    title: "General Business",
    href: "/contact?type=general",
    icon: Building2,
  },
];

export function EnquiryHub() {
  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="scroll-mt-28 bg-[#eef6f2] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="enquiry-heading"
            align="center"
            eyebrow="Quick Action"
            title="How Can We Help You?"
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Link
                  href={item.href}
                  className="block h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-forest text-gold-light">
                  <Icon className="size-5" aria-hidden />
                </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
