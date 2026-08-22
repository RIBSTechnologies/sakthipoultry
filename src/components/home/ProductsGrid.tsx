import {
  ArrowRight,
  Egg,
  Bird,
  Wheat,
  Drumstick,
} from "lucide-react";
import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { asset } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const products = [
  {
    name: "Hatching Eggs",
    badge: "Genetics",
    tags: [] as string[],
    detail:
      "Fertile broiler hatching eggs from our parent operations, handled for viability, uniformity and hatchery-ready quality.",
    href: "/products#hatching-eggs",
    cta: "Explore Hatching Eggs",
    icon: Egg,
    image: asset("sakthi-poultry-hatching-eggs.jpg"),
  },
  {
    name: "Broiler Chicks",
    badge: "Day-old chicks",
    tags: [] as string[],
    detail:
      "Healthy day-old broiler chicks from regulated hatchery incubation, graded and dispatched for placement.",
    href: "/products#day-old-chicks",
    cta: "Explore Broiler Chicks",
    icon: Bird,
    image: asset("sakthi-poultry-broiler-chicks.jpg"),
  },
  {
    name: "Sakthi Bromix Broiler Feed",
    badge: "Nutrition",
    tags: ["Pre-Starter Crumble", "Starter Crumble", "Finisher Pellet"],
    detail:
      "Stage-specific broiler nutrition from our automated plant, formulated to support growth, gut health and feed conversion.",
    href: "/products#poultry-feed",
    cta: "Explore Poultry Feed",
    icon: Wheat,
    image: asset("sakthi-bromix-broiler-feed.jpg"),
  },
  {
    name: "Broiler Birds",
    badge: "Live birds",
    tags: [] as string[],
    detail:
      "Market-ready broilers from our integrated farming network, grown with veterinary oversight and consistent husbandry.",
    href: "/products#live-broilers",
    cta: "Explore Broiler Birds",
    icon: Bird,
    image: asset("sakthi-poultry-broiler-birds.jpg"),
  },
  {
    name: "Chicken Meat",
    badge: "Processing",
    tags: [] as string[],
    detail:
      "Chicken products sourced from our broiler chain for buyers who need a reliable South Indian supply connection.",
    href: "/contact?type=product",
    cta: "Explore Chicken Products",
    icon: Drumstick,
    image: asset("sakthi-poultry-chicken-meat.jpg"),
  },
  {
    name: "Breeder Feed",
    badge: "Nutrition",
    tags: [] as string[],
    detail:
      "Our breeder poultry feed is designed to support breeder nutrition and the production of quality fertile eggs and broiler chicks.",
    href: "/products#poultry-feed",
    cta: "Explore Breeder Feed",
    icon: Wheat,
    image: asset("sakthi-poultry-breeder-feed.jpg"),
  },
];

export function ProductsGrid() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-28 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="products-heading"
            eyebrow="Products & Services"
            title="Poultry Products & Solutions for a Growing Industry"
          />
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <StaggerItem key={product.name} className="h-full">
              <article
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <MediaImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-forest-deep/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    <Icon className="size-3.5 text-gold-light" aria-hidden />
                    {product.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {product.name}
                  </h3>
                  {product.tags.length > 0 ? (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-cream-2 px-2.5 py-1 text-[11px] font-semibold text-forest"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {product.detail}
                  </p>
                  <Link
                    href={product.href}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-gold transition hover:text-forest"
                  >
                    {product.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
              </StaggerItem>
            );
          })}
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
