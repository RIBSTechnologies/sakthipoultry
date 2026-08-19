import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { operations } from "@/lib/data";
import { asset } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Operations",
  description:
    "Breeder farms, hatcheries, broiler contract network, automated feed mills, in-house lab and a broiler sales network across Tamil Nadu.",
  alternates: { canonical: "/operations" },
};

export default function OperationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Operations", path: "/operations" }]} />
      <PageHero
        title="Operations built as a closed loop"
        description="Each unit exists to protect the next: healthy parent stock, clean hatch, precise nutrition, disciplined grow-out, and dependable offtake."
        image={asset("aerial-farm-03.jpg")}
        crumbs={[{ label: "Operations" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-20">
          {operations.map((op, i) => (
            <article
              key={op.slug}
              id={op.slug}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  0{i + 1}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-forest">{op.title}</h2>
                <ul className="mt-6 grid gap-3">
                  {op.points.map((p) => (
                    <li key={p} className="flex gap-3 text-muted">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <MediaImage
                  src={op.image}
                  alt={op.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border border-line bg-white p-8 text-center">
          <p className="text-lg text-forest">
            Looking to place chicks, book feed, or join as a grower?
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/farmers-partners" variant="gold">
              Farmers & partners
            </Button>
            <Button href="/contact" variant="outline">
              Commercial enquiry
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
