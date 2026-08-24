import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { productDetails } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductsDetail() {
  return (
    <>
      {productDetails.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          aria-labelledby={`${product.id}-heading`}
          className={cn(
            "scroll-mt-32 py-20 sm:py-24 lg:py-28",
            index % 2 === 0 ? "bg-white" : "bg-cream-2",
          )}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                id={`${product.id}-heading`}
                eyebrow={product.eyebrow}
                title={product.title}
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {product.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Button href={product.href} variant="accent" className="mt-8">
                {product.cta}
              </Button>
            </Reveal>
            <Reveal
              delay={0.08}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5"
            >
              <MediaImage
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
