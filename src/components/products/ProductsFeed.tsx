import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { feedProducts } from "@/lib/products";
import { asset, cn } from "@/lib/utils";

export function ProductsFeed() {
  return (
    <>
      <section
        id="poultry-feed"
        aria-labelledby="products-feed-heading"
        className="scroll-mt-32 bg-cream-2 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="products-feed-heading"
              eyebrow="Poultry Feed"
              title="Nutrition for Breeder and Broiler Operations"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>Balanced nutrition plays an important role in poultry production.</p>
              <p>
                Sakthi Poultry&apos;s poultry feed range supports two important
                stages of our broiler production system:
              </p>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Breeder Feed", "Broiler Feed"].map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-sm"
                >
                  <span className="font-display text-lg text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-relaxed text-muted">
              Our feed operations form part of the integrated poultry value chain
              and support the nutritional requirements of birds at different
              stages of production.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
            <MediaImage
              src={asset("sakthi-poultry-feed-manufacturing.jpg")}
              alt="Sakthi Poultry feed manufacturing supporting breeder and broiler nutrition"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {feedProducts.map((product, index) => {
        const last = index === feedProducts.length - 1;

        return (
          <section
            key={product.id}
            id={product.id}
            aria-labelledby={`${product.id}-heading`}
            className={cn(
              "scroll-mt-32 py-12 sm:py-16 lg:py-20",
              index % 2 === 0 ? "bg-white" : "bg-cream-2",
              last && "pb-10 sm:pb-12 lg:pb-14",
            )}
          >
            <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
              <Reveal className="flex h-full flex-col lg:col-span-7">
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
                <div className="mt-8 self-start lg:mt-auto lg:pt-8">
                  <Button href={product.href} variant="accent">
                    {product.cta}
                  </Button>
                </div>
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
        );
      })}
    </>
  );
}
