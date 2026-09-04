import { Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/home/SectionBackdrop";
import { qualityLinks } from "@/lib/quality";
import { asset } from "@/lib/utils";

export function QualityClose() {
  return (
    <section
      aria-labelledby="quality-close-heading"
      className="relative isolate overflow-hidden bg-forest py-12 sm:py-16 lg:py-20"
    >
      <SectionBackdrop
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        overlay="from-forest/90 via-forest/82 to-forest-deep/88"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            Quality Is Our Continuous Commitment
          </p>
          <h2
            id="quality-close-heading"
            className="mt-3 font-display text-[2.7rem] font-medium leading-tight text-white"
          >
            Quality connects every part of Sakthi Poultry
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            From breeder farms and hatcheries to poultry feed, broiler farms and
            laboratory activities, our aim is to maintain a responsible and
            quality-focused approach throughout the poultry production chain.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Our people, farming partners and integrated operations work together
            around one enduring principle:
          </p>
          <div className="mt-8 inline-flex items-center gap-3">
            <Quote className="size-6 text-gold-light" aria-hidden />
            <p className="whitespace-nowrap font-display text-[2.7rem] leading-tight text-white">
              Quality Forever
            </p>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/75">
            Learn more about how Sakthi Poultry brings quality into every stage
            of its integrated poultry operations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {qualityLinks.map((link, index) => (
              <Button
                key={link.href}
                href={link.href}
                variant={index === 0 ? "accent" : "outlineLight"}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
            Sakthi Poultry Private Limited
          </p>
          <p className="mt-2 text-sm text-white/75">
            Quality Forever. Responsible Poultry Practices. Stronger
            Partnerships.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
