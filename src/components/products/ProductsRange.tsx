import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { productRange } from "@/lib/products";

export function ProductsRange() {
  return (
    <section
      aria-labelledby="products-range-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="products-range-heading"
            eyebrow="Our Broiler Poultry Products"
            title="Our Product Range"
            subtitle="Our integrated poultry operations allow us to support key requirements across the broiler poultry value chain."
          />
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {productRange.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <Link href={item.href} className="block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md">
                  <div className="relative aspect-[4/3]">
                    <MediaImage
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 items-start gap-3 p-5">
                    <span className="font-display text-lg text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg leading-snug text-ink">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <p className="mt-10 text-base leading-relaxed text-muted">
            Each product is connected to our wider poultry production system and
            our continued focus on quality, nutrition, hygiene and responsible
            poultry practices.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
