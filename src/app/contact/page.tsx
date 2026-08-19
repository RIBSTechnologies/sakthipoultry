import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForms } from "@/components/contact/ContactForms";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { site, fullAddress, mapsHref } from "@/lib/site";
import { asset } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Product, farmer, dealer, vendor and general enquiries for Sakthi Poultry Private Limited, Pollachi, Tamil Nadu.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero
        title="Talk to the right desk"
        description="Bulk purchase, farmer onboarding, feed distribution, vendor registration or a general office query — pick a form so the right team responds."
        image={asset("aerial-complex-01.jpg")}
        crumbs={[{ label: "Contact" }]}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
        <aside className="lg:col-span-4">
          <h2 className="text-2xl font-semibold text-forest">Head office</h2>
          <a
            href={mapsHref()}
            className="mt-4 flex gap-3 text-muted hover:text-forest"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin className="mt-1 size-5 shrink-0 text-gold" />
            {fullAddress()}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 flex gap-3 text-muted hover:text-forest"
          >
            <Mail className="mt-1 size-5 shrink-0 text-gold" />
            {site.email}
          </a>
          <p className="mt-6 text-sm text-muted">
            CIN {site.cin}
            <br />
            Production: South Singampunari, Sivagangai District
          </p>
          <div className="relative mt-8 h-48 overflow-hidden rounded-2xl">
            <MediaImage
              src={asset("aerial-complex-07.jpg")}
              alt="Sakthi Poultry production complex"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
          <iframe
            title="Sakthi Poultry head office map"
            className="mt-8 h-64 w-full border border-line"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&z=14&output=embed`}
            loading="lazy"
          />
        </aside>
        <div className="lg:col-span-8">
          <Suspense fallback={<p className="text-muted">Loading forms…</p>}>
            <ContactForms />
          </Suspense>
        </div>
      </div>
    </>
  );
}
