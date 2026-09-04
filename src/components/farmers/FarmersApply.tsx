import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { farmerEnquireWho } from "@/lib/farmers";

export function FarmersApply() {
  return (
    <section
      id="apply"
      aria-labelledby="farmers-apply-heading"
      className="scroll-mt-32 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            id="farmers-apply-heading"
            eyebrow="Become a Sakthi Farmer"
            title="Interested in Building Your Future in Poultry Farming?"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              If you are interested in broiler poultry farming and would like to
              explore a farmer partnership with Sakthi Poultry, we welcome your
              enquiry.
            </p>
            <p>
              Our team can understand your farming background, location and
              proposed poultry farming requirements and guide you regarding the
              next appropriate step.
            </p>
          </div>
          <h3 className="mt-8 font-display text-xl text-ink">Who Can Enquire?</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            We welcome enquiries from:
          </p>
          <Stagger className="mt-4 grid gap-3">
            {farmerEnquireWho.map((item, index) => (
              <StaggerItem key={item}>
                <article className="flex items-start gap-3 rounded-2xl border border-line bg-cream-2 p-4 shadow-sm">
                  <span className="font-display text-lg text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg leading-snug text-ink">{item}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Joining Sakthi Poultry begins with a conversation.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-cream-2 p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-2xl text-ink">Become a Sakthi Farmer</h3>
            <div className="mt-6">
              <LeadForm type="farmer" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
