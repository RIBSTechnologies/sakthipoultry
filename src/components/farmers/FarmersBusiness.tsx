import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import {
  farmerEnquire,
  farmerImages,
  partnerProductRange,
} from "@/lib/farmers";

function ProductList() {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {partnerProductRange.map((item, index) => (
        <li key={item.title}>
          <Link
            href={item.href}
            className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:border-gold/40"
          >
            <span className="font-display text-lg text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-lg text-ink">{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function FarmersBusiness() {
  return (
    <>
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
              title="Building Strong Poultry Business Partnerships"
            />
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                A successful poultry value chain depends on strong relationships
                across production, supply and market channels.
              </p>
              <p>
                Sakthi Poultry believes in fair, mutually beneficial and
                long-term relationships with the businesses and stakeholders
                connected to our operations.
              </p>
              <p>
                We welcome relevant enquiries from traders, retailers, feed
                distributors, suppliers and institutional buyers looking to
                explore business opportunities with Sakthi Poultry.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="traders"
        aria-labelledby="farmers-traders-heading"
        className="scroll-mt-32 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="farmers-traders-heading"
              eyebrow="Traders & Retailers"
              title="Connect with a Quality-Focused Poultry Business"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Traders and retailers play an important role in connecting
                poultry production with the market.
              </p>
              <p>
                Sakthi Poultry welcomes enquiries from businesses interested in
                our poultry products and long-term commercial relationships.
              </p>
              <p>Our product portfolio includes:</p>
            </div>
            <ProductList />
            <p className="mt-8 text-base leading-relaxed text-muted">
              If you are a trader or retailer looking to discuss poultry product
              requirements, connect with our team.
            </p>
            <Button href={farmerEnquire.trader} variant="accent" className="mt-8">
              Trader / Retailer Enquiry
            </Button>
          </Reveal>
          <Reveal
            delay={0.08}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
          >
            <MediaImage
              src={farmerImages.traders}
              alt="Broiler birds supplied through Sakthi Poultry trader and retailer channels"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <section
        id="feed-distributors"
        aria-labelledby="farmers-feed-heading"
        className="scroll-mt-32 bg-cream-2 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="farmers-feed-heading"
              eyebrow="Feed Distributors"
              title="Grow with Our Poultry Feed Business"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Sakthi Poultry&apos;s poultry feed portfolio includes breeder
                feed and broiler feed supporting different stages of commercial
                poultry production.
              </p>
              <p>
                We welcome enquiries from businesses interested in exploring
                poultry feed distribution opportunities.
              </p>
              <p>
                Our approach focuses on developing business relationships that
                support both product availability and long-term market
                development.
              </p>
              <p>
                If you are involved in poultry feed distribution and would like
                to explore opportunities with Sakthi Poultry, speak with our
                team.
              </p>
            </div>
            <Button href={farmerEnquire.feed} variant="accent" className="mt-8">
              Feed Distributor Enquiry
            </Button>
          </Reveal>
          <Reveal
            delay={0.08}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
          >
            <MediaImage
              src={farmerImages.feed}
              alt="Sakthi Poultry feed manufacturing supporting breeder and broiler nutrition"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <section
        id="suppliers"
        aria-labelledby="farmers-suppliers-heading"
        className="scroll-mt-32 bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="farmers-suppliers-heading"
              eyebrow="Suppliers"
              title="Become Part of Our Supply Network"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Reliable supplier relationships contribute to the effective
                functioning of an integrated poultry business.
              </p>
              <p>
                Sakthi Poultry values fair and mutually beneficial relationships
                with suppliers and service providers who support different areas
                of our operations.
              </p>
              <p>
                Businesses interested in becoming a supplier to Sakthi Poultry
                can submit their company and product or service details for
                consideration by the appropriate team.
              </p>
            </div>
            <Button href={farmerEnquire.supplier} variant="accent" className="mt-8">
              Supplier Enquiry
            </Button>
          </Reveal>
          <Reveal
            delay={0.08}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
          >
            <MediaImage
              src={farmerImages.suppliers}
              alt="Sakthi Poultry operations supported by supplier and service partnerships"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <section
        id="institutional"
        aria-labelledby="farmers-institutional-heading"
        className="scroll-mt-32 bg-cream-2 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="farmers-institutional-heading"
              eyebrow="Institutional Buyers"
              title="Poultry Product Enquiries for Business Requirements"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                We welcome enquiries from institutional buyers interested in
                discussing relevant poultry product requirements with Sakthi
                Poultry.
              </p>
              <p>
                Our team can understand your business requirement and connect
                you with the appropriate product enquiry process.
              </p>
              <p>Products available within our approved portfolio include:</p>
            </div>
            <ProductList />
            <Button
              href={farmerEnquire.institutional}
              variant="accent"
              className="mt-8"
            >
              Institutional Buyer Enquiry
            </Button>
          </Reveal>
          <Reveal
            delay={0.08}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
          >
            <MediaImage
              src={farmerImages.institutional}
              alt="Sakthi Poultry product range for institutional buyer enquiries"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
