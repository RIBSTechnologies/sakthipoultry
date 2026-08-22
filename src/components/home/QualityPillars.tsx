import {
  ArrowRight,
  ClipboardCheck,
  HeartHandshake,
  Home,
  ShieldCheck,
  Wheat,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { asset } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const pillars = [
  {
    step: "01",
    title: "Breeder Management",
    text: "Parent stock is managed with biosecurity zoning, nutrition and flock monitoring so the next generation starts from a disciplined genetic and health foundation.",
    image: asset("farm-aerial-sheds.jpg"),
    icon: Home,
  },
  {
    step: "02",
    title: "Hatchery Biosecurity",
    text: "Incubation, hygiene and chick handling follow controlled protocols designed to protect livability from egg receipt through dispatch.",
    image: asset("sakthi-poultry-modern-hatchery.jpg"),
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Feed Quality",
    text: "Sakthi Bromix is produced in an automated plant with formulation discipline, raw-material checks and stage-specific rations for consistent growth.",
    image: asset("sakthi-bromix-broiler-feed.jpg"),
    icon: Wheat,
  },
  {
    step: "04",
    title: "Farm Monitoring",
    text: "Contract and company farms receive technical and veterinary oversight so housing, feed, water and performance stay on standard throughout the cycle.",
    image: asset("aerial-farm-03.jpg"),
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Bird Welfare",
    text: "Husbandry, stocking, ventilation and health care are treated as operational requirements — because welfare and product quality move together.",
    image: asset("chicken-drinker.jpg"),
    icon: HeartHandshake,
  },
];

const locks = [
  "Zoned site access",
  "Visitor & vehicle control",
  "All-in / all-out hygiene",
  "Feed & water checks",
];

export function QualityPillars() {
  return (
    <section
      id="quality"
      aria-labelledby="quality-heading"
      className="scroll-mt-28 bg-[#f3f7f5] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="quality-heading"
            eyebrow="Quality & Biosecurity"
            title="Quality Forever — More Than a Promise"
            subtitle="Quality at Every Stage. Confidence at Every Connection."
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted lg:pb-1">
            Five quality gates from parent stock to welfare — visible on the
            farm, not only on a poster.
          </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm lg:grid lg:grid-cols-12">
          <aside className="relative isolate min-h-[22rem] overflow-hidden lg:col-span-5 lg:min-h-full">
            <MediaImage
              src={asset("farm-aerial-sheds.jpg")}
              alt="Biosecure poultry housing with controlled farm access"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/25" />
            <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-7 text-white sm:p-9 lg:min-h-[40rem] lg:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light backdrop-blur-sm">
                <ShieldCheck className="size-3.5" aria-hidden />
                Five quality gates
              </span>
              <p className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
                Quality is a chain.
                <span className="block text-gold-light">
                  Biosecurity is the lock.
                </span>
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
                Checkpoints run from inbound materials to the bird that leaves
                the gate, so disease pressure and inconsistency are stopped
                early.
              </p>
            </div>
          </aside>

          <div className="flex flex-col justify-between lg:col-span-7">
            <Stagger className="relative p-5 sm:p-8 lg:p-10">
              <span
                className="absolute top-12 bottom-12 left-[2.15rem] hidden w-px bg-line sm:block lg:left-[2.65rem]"
                aria-hidden
              />
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <StaggerItem
                    key={pillar.title}
                    className="relative grid grid-cols-[auto_1fr] gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr_5.5rem] sm:gap-5 sm:py-5"
                  >
                    <span className="relative z-10 mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-forest text-[11px] font-bold tracking-wide text-white shadow-[0_0_0_6px_#fff]">
                      {pillar.step}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon className="size-4 shrink-0 text-gold" aria-hidden />
                        <h3 className="font-display text-lg text-ink sm:text-xl">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {pillar.text}
                      </p>
                    </div>
                    <div className="relative hidden h-[4.5rem] overflow-hidden rounded-xl sm:block">
                      <MediaImage
                        src={pillar.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="88px"
                      />
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <div className="border-t border-line px-5 py-5 sm:px-8 lg:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                On the ground
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {locks.map((lock) => (
                  <li
                    key={lock}
                    className="rounded-full border border-line bg-[#f3f7f5] px-3 py-1.5 text-xs font-semibold text-forest"
                  >
                    {lock}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Button href="/quality" variant="accent" size="lg" className="mt-10">
            Discover Our Quality Approach
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
