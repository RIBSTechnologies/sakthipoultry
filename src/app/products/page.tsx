import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Hatching eggs, broiler day-old chicks, live broiler birds and Sakthi Bromix poultry feed from our integrated Tamil Nadu operations.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Products", path: "/products" }]} />
      <PageHero
        title="A catalogue built from our own chain"
        description="Hatching eggs, day-old chicks, live broiler birds and poultry feed from our own breeding, hatchery, feed and farming network."
        image={asset("feed-trough.jpg")}
        crumbs={[{ label: "Products" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ProductGrid />
      </div>
    </>
  );
}
