import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/home/SectionBackdrop";
import { aboutLinks } from "@/lib/about";
import { asset } from "@/lib/utils";

export function AboutClose() {
  return (
    <section
      aria-labelledby="about-close-heading"
      className="relative isolate overflow-hidden bg-forest py-20 sm:py-24 lg:py-32"
    >
      <SectionBackdrop
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        overlay="from-forest-deep/92 via-forest/86 to-forest-deep/90"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light">
            Quality Forever
          </p>
          <h2
            id="about-close-heading"
            className="mt-4 font-display text-3xl font-medium text-white sm:text-5xl"
          >
            Building the Future of Poultry Through Quality & Partnership
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            For more than three decades, Sakthi Poultry&apos;s business has
            evolved around poultry expertise, farmer relationships and
            integrated operations.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Today, we continue to strengthen our role as an integrated poultry
            company in Tamil Nadu, serving the poultry ecosystem through
            quality-focused production and long-term partnerships.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {aboutLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  index === 0
                    ? "inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#92400e]"
                    : "inline-flex rounded-full border-2 border-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-forest-deep"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
