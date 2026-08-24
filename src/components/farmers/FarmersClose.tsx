import { Quote } from "lucide-react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/home/SectionBackdrop";
import { closingEnquiries, farmerImages } from "@/lib/farmers";

export function FarmersClose() {
  return (
    <section
      aria-labelledby="farmers-close-heading"
      className="relative isolate overflow-hidden bg-forest py-20 sm:py-24 lg:py-28"
    >
      <SectionBackdrop
        src={farmerImages.close}
        overlay="from-forest/90 via-forest/82 to-forest-deep/88"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Partner with Sakthi Poultry
          </p>
          <h2
            id="farmers-close-heading"
            className="mt-3 max-w-4xl font-display text-3xl font-medium text-white sm:text-5xl"
          >
            Whether you are a poultry farmer, trader, retailer, feed
            distributor, supplier or institutional buyer, Sakthi Poultry
            welcomes the opportunity to understand your requirements.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Choose the enquiry that best matches your interest:
          </p>
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {closingEnquiries.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <Link href={item.href} className="block h-full">
                <article className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/15">
                  <span className="font-display text-lg text-gold-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3">
              <Quote className="size-6 text-gold-light" aria-hidden />
              <p className="font-display text-2xl text-white sm:text-3xl">
                Quality Forever
              </p>
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
              Sakthi Poultry Private Limited
            </p>
            <p className="mt-2 text-sm text-white/75">
              Growing Farmers. Building Partnerships. Quality Forever.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
