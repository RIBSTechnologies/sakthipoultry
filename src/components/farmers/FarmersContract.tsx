import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { farmerEnquire, farmerImages } from "@/lib/farmers";

export function FarmersContract() {
  return (
    <section
      id="contract-farming"
      aria-labelledby="farmers-contract-heading"
      className="scroll-mt-32 bg-cream-2 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-7">
          <SectionHeading
            id="farmers-contract-heading"
            eyebrow="For Poultry Farmers"
            title="Contract Poultry Farming"
            subtitle="Growing Together with Farming Communities"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Farmers form an important part of Sakthi Poultry&apos;s integrated
              poultry ecosystem.
            </p>
            <p>
              Our approach to contract poultry farming is built around
              collaboration between Sakthi Poultry and farming communities
              involved in commercial broiler production.
            </p>
            <p>
              We recognise that successful broiler farming depends on more than
              poultry infrastructure alone. It also requires appropriate
              husbandry practices, technical knowledge, responsible poultry
              management and continuous attention to bird well-being.
            </p>
            <p>
              Through our farmer partnerships, we work to strengthen the
              connection between farming experience and the knowledge available
              within our poultry operations.
            </p>
            <p>
              Our objective is simple: develop productive, sustainable and
              mutually beneficial relationships with poultry farmers.
            </p>
          </div>
          <Button href={farmerEnquire.farmer} variant="accent" className="mt-8">
            Contract Farming Enquiry
          </Button>
        </Reveal>
        <Reveal
          delay={0.08}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
        >
          <MediaImage
            src={farmerImages.contract}
            alt="Farming communities in the Sakthi Poultry contract farming network"
            fill
            className="object-cover object-[center_35%]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
