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
        src={asset("sakthi-poultry-about-close.jpg")}
        overlay="from-forest/55 via-forest/45 to-forest-deep/55"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="about-close-heading"
            className="font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.7rem] text-white"
          >
            Quality Forever
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Together, our people, infrastructure, farmer network and integrated
            operations support one consistent commitment.
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            {aboutLinks.map((link) => (
              <Button key={link.href} href={link.href} variant="accent" className="w-full sm:w-auto">
                {link.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
