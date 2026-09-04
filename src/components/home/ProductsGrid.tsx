import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { productRange } from "@/lib/products";
import { birdFaceImageClass, cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const homeProductRange = productRange.map((item) => ({
  ...item,
  href: item.href.startsWith("#") ? `/products${item.href}` : item.href,
}));

export function ProductsGrid() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-28 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="products-heading"
            eyebrow="Products & Services"
            title="Our Product Range"
          />
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {homeProductRange.map((product, index) => (
            <StaggerItem key={product.title} className="h-full">
              <Link href={product.href} className="block h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <MediaImage
                      src={product.image}
                      alt={product.title}
                      fill
                      className={cn(
                        "transition duration-700 group-hover:scale-105",
                        product.href.includes("live-broilers")
                          ? birdFaceImageClass
                          : "object-cover",
                      )}
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 items-start gap-3 p-5">
                    <span className="font-display text-lg text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg leading-snug text-ink">
                      {product.title}
                    </h3>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button href="/products" variant="accent" size="lg">
              View More
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
