import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { productEnquiries, productEnquireHref } from "@/lib/products";

export function ProductsEnquire() {
  return (
    <section
      aria-labelledby="products-enquire-heading"
      className="bg-cream-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="products-enquire-heading"
            eyebrow="Product Enquiries"
            title="Looking for Poultry Products?"
            subtitle="Whether your requirement is for hatching eggs, broiler day-old chicks, broiler birds, breeder feed or broiler feed, our team is ready to understand your business needs."
          />
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productEnquiries.map((item, index) => (
            <StaggerItem key={item.title} className="h-full">
              <Link href={item.href} className="block h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md">
                  <span className="font-display text-lg text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08}>
          <Button href={productEnquireHref()} variant="accent" className="mt-10">
            Enquire About Our Products
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
