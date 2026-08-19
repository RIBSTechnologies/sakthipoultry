import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { farmerBenefits, farmerSteps, partnerSegments } from "@/lib/data";
import { asset } from "@/lib/utils";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Farmers & Partners",
  description:
    "Join Sakthi Poultry as a contract farmer or business partner. Assured buyback, quality chicks and feed, veterinary guidance, and dealer registration.",
  alternates: { canonical: "/farmers-partners" },
};

export default function FarmersPartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Farmers & Partners", path: "/farmers-partners" }]}
      />
      <PageHero
        title="Grow with a system, not a one-off deal"
        description="Contract farmers get chicks, feed, veterinary guidance and buyback. Traders, dealers and institutions get scheduled, uniform supply."
        image={asset("aerial-farm-04.jpg")}
        crumbs={[{ label: "Farmers & Partners" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="For farmers"
            title="Why growers choose Sakthi"
            description="The contract is only as good as placement quality, field support and settlement. That is the standard we recruit against."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {farmerBenefits.map((b) => (
              <article key={b.title} className="border border-line bg-white p-6">
                <h3 className="font-semibold text-forest">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How to become a Sakthi farmer"
            title="Five steps from enquiry to first harvest"
          />
          <ol className="mt-12 grid gap-6 lg:grid-cols-5">
            {farmerSteps.map((s) => (
              <li key={s.step} className="border-t-2 border-gold pt-5">
                <p className="text-xs font-semibold text-gold">{s.step}</p>
                <h3 className="mt-2 font-semibold text-forest">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Application"
              title="Tell us about your farm"
              description="Share location, shed capacity and utilities. A field officer will follow up if the site fits the current placement plan."
            />
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
              <MediaImage
                src={asset("aerial-farm-05.jpg")}
                alt="Farm sheds ready for contract placement"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
          <div className="border border-line bg-white p-6 sm:p-8">
            <LeadForm type="farmer" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="For traders & retailers"
            title="Grow with Sakthi in the market"
            description="Dedicated live-bird channels for wholesale traders and retail outlets, supported by our own logistics fleet."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {[
              {
                title: "Become a Sakthi Trader",
                text: "Source uniform live birds for wholesale markets, with scheduled lots and dedicated commercial support.",
                image: asset("aerial-complex-05.jpg"),
                alt: "Wholesale live-bird distribution from Sakthi Poultry",
              },
              {
                title: "Become a Sakthi Retailer",
                text: "Reliable live-bird supply for your outlet, with timely delivery from our company-owned logistics fleet.",
                image: asset("chickens-feeding.jpg"),
                alt: "Live broiler birds for retail outlets",
              },
            ].map((box) => (
              <article
                key={box.title}
                className="overflow-hidden rounded-2xl border border-line bg-cream-2"
              >
                <div className="relative h-56">
                  <MediaImage
                    src={box.image}
                    alt={box.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-ink">{box.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{box.text}</p>
                  <Button href="/contact?type=dealer" variant="accent" size="md" className="mt-5">
                    Enquire Now
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-28 bg-forest-deep py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            light
            eyebrow="For business partners"
            title="Retailers, traders, distributors, suppliers, institutions"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerSegments.map((s) => (
              <article key={s.id} className="border border-white/15 p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 max-w-xl rounded-sm bg-cream p-6 text-ink sm:p-8">
            <LeadForm type="dealer" />
          </div>
        </div>
      </section>
    </>
  );
}
