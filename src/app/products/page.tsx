import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Hatching eggs, broiler day-old chicks, live broiler birds, and poultry & livestock feed including breeder, broiler and cattle rations.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Products", path: "/products" }]} />
      <PageHero
        title="A catalogue built from our own chain"
        description="Genetics, chicks, live birds and nutrition manufactured or grown inside the Sakthi system — with enquiry paths for bulk and scheduled supply."
        image={asset("feed-trough.jpg")}
        crumbs={[{ label: "Products" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ProductGrid />
      </div>
    </>
  );
}
