import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/home/SectionBackdrop";
import { aboutLinks } from "@/lib/about";
import { asset } from "@/lib/utils";

export function AboutClose() {
  return (
    <section
      aria-labelledby="about-close-heading"
      className="relative isolate overflow-hidden bg-forest py-12 sm:py-16 lg:py-20"
    >
      <SectionBackdrop
        src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
        overlay="from-forest/90 via-forest/82 to-forest-deep/88"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="about-close-heading"
            className="font-display text-3xl font-medium text-white sm:text-5xl"
          >
            Quality Forever
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Together, our people, infrastructure, farmer network and integrated
            operations support one consistent commitment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {aboutLinks.map((link, index) => (
              <Button
                key={link.href}
                href={link.href}
                variant={index === 0 ? "accent" : "outlineLight"}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
