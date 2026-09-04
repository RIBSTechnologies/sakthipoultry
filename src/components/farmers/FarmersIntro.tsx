import { Quote } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { farmerEnquire, farmerImages } from "@/lib/farmers";

export function FarmersIntro() {
  return (
    <section
      aria-labelledby="farmers-intro-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="flex h-full flex-col lg:col-span-7">
          <SectionHeading
            id="farmers-intro-heading"
            eyebrow="Farmers & Partners"
            title="Strong relationships for a sustainable poultry ecosystem"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              At Sakthi Poultry Private Limited, strong relationships are an
              important part of building a sustainable poultry ecosystem.
            </p>
            <p>
              Our farmer-based business approach brings together poultry
              farmers, technical expertise and integrated poultry operations
              with a focus on long-term cooperation. We work to support farming
              communities through technical guidance, resources and practical
              knowledge that help farmers follow appropriate husbandry practices
              and adopt modern poultry farming methods.
            </p>
            <p>
              We also welcome opportunities to build fair and mutually
              beneficial relationships with traders, retailers, feed
              distributors, suppliers, institutional buyers and other business
              partners.
            </p>
          </div>
          <aside className="mt-8 rounded-2xl bg-forest-deep p-7 text-white shadow-lg sm:p-9">
            <div className="flex items-center gap-3">
              <Quote className="size-7 shrink-0 text-gold-light" aria-hidden />
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                Grow with Sakthi Poultry. Build a long-term partnership around
                quality.
              </p>
            </div>
          </aside>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={farmerEnquire.farmer} variant="accent">
              Become a Sakthi Farmer
            </Button>
            <Button href={farmerEnquire.partners} variant="outline">
              Partner With Us
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <div className="relative min-h-[22rem] overflow-hidden rounded-2xl lg:h-full">
            <MediaImage
              src={farmerImages.intro}
              alt="Contract broiler farms in the Sakthi Poultry farmer network"
              fill
              className="object-cover object-[center_35%]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
