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

const actions = [
  {
    title: "Broiler Chicks",
    cta: "Enquire Now",
    href: "/contact?type=product",
    icon: Bird,
  },
  {
    title: "Poultry Feed",
    cta: "Enquire Now",
    href: "/contact?type=product",
    icon: Wheat,
  },
  {
    title: "Hatching Eggs",
    cta: "Enquire Now",
    href: "/contact?type=product",
    icon: Egg,
  },
  {
    title: "Become Sakthi Farmer",
    cta: "Enquire Now",
    href: "/farmers-partners#apply",
    icon: Handshake,
  },
  {
    title: "Poultry Equipment",
    cta: "Enquire Now",
    href: "/contact?type=product",
    icon: Wrench,
  },
  {
    title: "General Business",
    cta: "Enquire Now",
    href: "/contact?type=general",
    icon: Building2,
  },
];

export function EnquiryHub() {
  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="scroll-mt-28 bg-[#eef6f2] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="enquiry-heading"
          align="center"
          eyebrow="Quick Action"
          title="How Can We Help You?"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-forest text-gold-light">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:text-forest"
                >
                  {item.cta} →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
