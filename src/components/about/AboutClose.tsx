import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/home/SectionBackdrop";
import { aboutLinks } from "@/lib/about";
import { asset } from "@/lib/utils";

export function AboutClose() {
  return (
    <section
      aria-labelledby="about-close-heading"
      className="relative isolate overflow-hidden bg-forest py-20 sm:py-24 lg:py-28"
    >
      <SectionBackdrop
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        overlay="from-forest-deep/92 via-forest/86 to-forest-deep/90"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p
            id="about-close-heading"
            className="font-display text-4xl text-white sm:text-5xl"
          >
            Quality Forever
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
