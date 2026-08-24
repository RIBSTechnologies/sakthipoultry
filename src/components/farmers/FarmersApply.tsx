import { MediaImage } from "@/components/ui/MediaImage";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { farmerImages } from "@/lib/farmers";

export function FarmersApply() {
  return (
    <section
      id="apply"
      aria-labelledby="farmers-apply-heading"
      className="scroll-mt-32 bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            id="farmers-apply-heading"
            eyebrow="Become Sakthi Farmer"
            title="Tell us about your farm"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Our broiler chicks are intended for commercial poultry farming
              operations seeking chicks produced within an integrated poultry
              system.
            </p>
            <p>
              If you are looking for a broiler chicks supplier in South India,
              connect with Sakthi Poultry to discuss your requirement.
            </p>
          </div>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
            <MediaImage
              src={farmerImages.apply}
              alt="Farm sheds in the Sakthi Poultry production network"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <LeadForm type="farmer" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
