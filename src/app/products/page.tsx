import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductsIntro } from "@/components/products/ProductsIntro";
import { ProductsRange } from "@/components/products/ProductsRange";
import { ProductsDetail } from "@/components/products/ProductsDetail";
import { ProductsFeed } from "@/components/products/ProductsFeed";
import { ProductsWhy } from "@/components/products/ProductsWhy";
import { ProductsEnquire } from "@/components/products/ProductsEnquire";
import { ProductsClose } from "@/components/products/ProductsClose";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { productsSeo } from "@/lib/products";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: productsSeo.title },
  description: productsSeo.description,
  alternates: { canonical: "/products" },
  openGraph: {
    title: productsSeo.title,
    description: productsSeo.description,
    images: ["/assets/images/sakthi-poultry-hatching-eggs.jpg"],
  },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Products", path: "/products" }]} />
      <PageHero
        title="Poultry Products in South India"
        description="Sakthi Poultry Private Limited offers a focused range of poultry products supporting different stages of commercial broiler production."
        image={asset("sakthi-poultry-hatching-eggs.jpg")}
        crumbs={[{ label: "Products" }]}
      />
      <ProductsIntro />
      <ProductsRange />
      <ProductsDetail />
      <ProductsFeed />
      <ProductsWhy />
      <ProductsEnquire />
      <ProductsClose />
    </>
  );
}
