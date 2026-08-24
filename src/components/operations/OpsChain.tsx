import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { valueChainAreas } from "@/lib/operations";

export function OpsChain() {
  return (
    <section
      aria-labelledby="ops-chain-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="ops-chain-heading"
            eyebrow="Our Integrated Broiler Poultry Value Chain"
            title="Quality broiler production begins long before a bird reaches the market"
            subtitle="At Sakthi Poultry, the production journey starts with breeder operations and continues through hatching, poultry nutrition, commercial broiler farming and sales."
          />
        </Reveal>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Our integrated operational areas include
        </p>
        <Stagger className="mt-4 grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueChainAreas.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <Link href={item.href} className="block h-full">
                <article className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md">
                  <span className="font-display text-2xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {item.title}
                  </h3>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted">
            By connecting these important stages, we work to create a dependable
            poultry ecosystem serving farmers, customers and business partners.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
