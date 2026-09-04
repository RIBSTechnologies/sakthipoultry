import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

export function OpsMarket() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        <article
          id="broiler-sales"
          className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <Reveal className="lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Broiler Sales & Distribution
            </p>
            <h2 className="mt-3 font-display text-[2.7rem] font-medium tracking-tight leading-tight text-ink">
              Connecting Poultry Production with the Market
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Sakthi Poultry supplies broiler birds produced through our
                integrated poultry operations.
              </p>
              <p>
                Our broiler sales activities connect commercial poultry
                production with customers and business partners who require
                dependable access to broiler birds.
              </p>
              <p>
                Maintaining quality throughout the production chain remains
                important as birds move from farm operations towards the market.
              </p>
              <p>
                Our wider business relationships include farmers, retailers,
                suppliers, service providers, associates and other partners
                within the poultry ecosystem.
              </p>
              <p>
                For broiler bird requirements and business enquiries, our team
                is available to understand your needs.
              </p>
            </div>
            <Button href="/contact?type=product" variant="accent" className="mt-8">
              Broiler Bird Enquiry
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
            <MediaImage
              src={asset("sakthi-poultry-live-birds.jpg")}
              alt="Sakthi Poultry broiler birds for sales and distribution"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </Reveal>
        </article>

        <article
          id="feed-sales"
          className="scroll-mt-32 overflow-hidden rounded-2xl bg-forest-deep text-white lg:grid lg:grid-cols-12"
        >
          <Reveal className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Poultry Feed Sales
            </p>
            <h2 className="mt-3 font-display text-[2.7rem] font-medium tracking-tight leading-tight">
              Breeder Feed & Broiler Feed for Poultry Operations
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Sakthi Poultry supplies poultry feed designed for breeder and
              broiler operations.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h3 className="font-display text-xl">Breeder Feed</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Nutrition intended to support breeder performance, fertile egg
                  production and the production cycle leading to broiler chicks.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h3 className="font-display text-xl">Broiler Feed</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Nutrition designed to support the growth and performance
                  requirements of commercial broilers.
                </p>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/75">
              We work with farmers, poultry businesses, feed distributors and
              other relevant partners requiring poultry feed products.
            </p>
            <Button href="/contact?type=product" variant="gold" className="mt-8">
              Poultry Feed Enquiry
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </Reveal>
          <div className="relative min-h-[260px] lg:col-span-5">
            <MediaImage
              src={asset("sakthi-bromix-broiler-feed.jpg")}
              alt="Sakthi Bromix broiler feed"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
