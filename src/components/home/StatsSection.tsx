import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionBackdrop } from "./SectionBackdrop";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { asset } from "@/lib/utils";

const metrics = [
  {
    value: "5+",
    unit: "Veterinarians",
  },
  {
    value: "50+",
    unit: "Expert Team",
  },
  {
    value: "200+",
    unit: "Employees",
  },
  {
    value: "500+",
    unit: "Poultry Farmers",
  },
  {
    value: "3.4 Cr. +",
    unit: "Kg Broiler production",
  },
];

export function StatsSection() {
  return (
    <section
      id="strength"
      aria-labelledby="stats-heading"
      className="relative isolate scroll-mt-28 min-h-[36rem] overflow-hidden bg-ink py-10 text-white sm:min-h-[42rem] sm:py-12 lg:min-h-[48rem] lg:py-14"
    >
      <SectionBackdrop
        src={asset("sakthi-poultry-strength-team.jpg")}
        overlay="from-ink/55 via-ink/25 to-ink/15"
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-start px-4 sm:px-6 lg:px-8">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((item) => (
            <StaggerItem key={`${item.value}-${item.unit}`}>
              <article className="group flex h-full min-h-[8.5rem] flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/95 px-4 py-5 text-center shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 sm:min-h-[9.5rem] sm:p-6">
                <p className="font-display text-3xl font-medium text-forest sm:text-4xl xl:text-[2.15rem]">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-1 text-sm font-semibold tracking-normal text-gold">
                  {item.unit}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <h2
            id="stats-heading"
            className="mt-8 font-display text-3xl font-medium tracking-tight leading-tight text-gold-light sm:text-4xl lg:text-[2.7rem]"
          >
            Strength & Scale
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Button
            href="/operations"
            variant="accent"
            size="lg"
            className="mt-5"
          >
            Discover Our Capabilities
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
