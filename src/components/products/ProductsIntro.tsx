import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { productEnquireHref } from "@/lib/products";
import { asset } from "@/lib/utils";

export function ProductsIntro() {
  return (
    <section
      aria-labelledby="products-intro-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="lg:col-span-7">
          <SectionHeading
            id="products-intro-heading"
            eyebrow="Poultry Products"
            title="A focused range supporting commercial broiler production"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Sakthi Poultry Private Limited offers a focused range of poultry
              products supporting different stages of commercial broiler
              production.
            </p>
            <p>
              Our product portfolio includes hatching eggs, broiler day-old
              chicks, broiler birds, breeder feed and broiler feed, supported by
              our integrated poultry operations covering breeder farms,
              hatcheries, feed production and commercial broiler farms.
            </p>
            <p>
              Quality is considered throughout the production chain—from parent
              birds and poultry nutrition to hatching and broiler farming.
            </p>
            <p>
              Driven by our philosophy of “Quality forever,” we work to provide
              dependable poultry products for farmers, poultry businesses,
              traders, distributors and other business partners.
            </p>
          </div>
          <Button href={productEnquireHref()} variant="accent" className="mt-8">
            Product Enquiry
          </Button>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
          <MediaImage
            src={asset("sakthi-poultry-hatching-eggs.jpg")}
            alt="Hatching eggs from Sakthi Poultry product operations"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
