import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { partnerPaths } from "@/lib/farmers";

export function FarmersPartners() {
  return (
    <section
      id="partners"
      aria-labelledby="farmers-business-heading"
      className="scroll-mt-32 bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="farmers-business-heading"
            eyebrow="For Business Partners"
            title="Traders, retailers, distributors and associates"
            subtitle="We believe in fair, mutually beneficial and long-term relationships with farmers, retailers, suppliers, service providers and other associates connected to our poultry business."
          />
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 md:grid-cols-3">
          {partnerPaths.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
                <Button href={item.href} variant="outline" className="mt-6 self-start">
                  {item.cta}
                </Button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08} className="mt-12">
            <div className="mx-auto max-w-xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-2xl text-ink">Partner enquiry</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our team is ready to understand your business needs.
            </p>
            <div className="mt-6">
              <LeadForm type="dealer" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
