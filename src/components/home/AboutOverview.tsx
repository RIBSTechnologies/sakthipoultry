import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { asset } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function AboutOverview() {
  return (
    <section
      id="about-overview"
      aria-labelledby="about-heading"
      className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="Corporate Overview"
            title="Growing with Quality. Delivering with Responsibility."
          />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              As a Vencobb family associate, Sakthi Poultry Private Limited
              operates with parent-level visibility across breeding, hatching,
              nutrition, farming and market supply. That visibility lets us
              align standards from parent stock through to birds reaching
              customers — not as disconnected units, but as one production
              system.
            </p>
            <p>
              Our integrated approach keeps quality, biosecurity and bird health
              connected at every hand-off. Feed, genetics, hatchery discipline
              and farm practice are managed together so performance is
              consistent and traceable.
            </p>
            <p>
              We also invest in the rural communities that grow with us.
              Contract farming, technical support and fair commercial
              relationships are part of how we build capacity in Tamil Nadu
              while remaining accountable to the Vencobb family’s reputation
              for poultry excellence.
            </p>
          </div>

          <Button href="/about" variant="accent" size="lg" className="mt-8">
            About Sakthi Poultry
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-2xl">
            <MediaImage
              src={asset("farm-complex.jpg")}
              alt="Sakthi Poultry hatchery and farm complex in Tamil Nadu"
              width={900}
              height={620}
              className="h-64 w-full object-cover sm:h-72"
            />
          </div>

          <aside className="rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-9">
            <Quote className="size-8 text-gold-light" aria-hidden />
            <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">
              “Quality Forever — From our farms to families, quality remains at
              the heart of everything we do.”
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
              Our core philosophy
            </p>
            <Link
              href="/quality"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-gold-light hover:underline"
            >
              Read our quality approach
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
