import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { farmerBenefits } from "@/lib/farmers";

export function FarmersBenefits() {
  return (
    <section
      aria-labelledby="farmers-benefits-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="farmers-benefits-heading"
            eyebrow="Farmer Benefits"
            title="Support Beyond Poultry Production"
            subtitle="Sakthi Poultry believes a strong poultry business should also contribute to stronger farming communities."
          />
        </Reveal>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            Our farmer-based approach is intended to create opportunities for
            rural families to participate in commercial poultry production and
            strengthen their economic opportunities.
          </p>
          <p>Farmers working within the Sakthi Poultry ecosystem can benefit from:</p>
        </div>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {farmerBenefits.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-cream-2 p-6 shadow-sm sm:p-8">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <p className="mt-10 text-base leading-relaxed text-muted">
            A stronger farmer network creates a stronger poultry ecosystem.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
