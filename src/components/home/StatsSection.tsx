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
    value: "3.40",
    unit: "Core KG Broiler Production Per Annum",
  },
];

export function StatsSection() {
  return (
    <section
      id="strength"
      aria-labelledby="stats-heading"
      className="relative isolate scroll-mt-28 overflow-hidden bg-forest-deep py-20 text-white sm:py-24 lg:py-28"
    >
      <SectionBackdrop src={asset("aerial-farm-03.jpg")} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="stats-heading"
            className="font-display text-3xl font-medium tracking-tight text-gold-light sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Strength & Scale
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((item) => (
            <StaggerItem key={`${item.value}-${item.unit}`}>
              <article className="group flex h-full min-h-[9.5rem] flex-col items-center justify-center rounded-2xl border border-white/15 bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-gold/40 sm:min-h-[10.5rem] sm:p-6">
                <p className="font-display text-4xl font-medium text-forest xl:text-[2.35rem]">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-gold leading-snug">
                  {item.unit}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <Button
            href="/operations"
            variant="outlineLight"
            size="lg"
            className="mt-10"
          >
            Discover Our Capabilities
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
