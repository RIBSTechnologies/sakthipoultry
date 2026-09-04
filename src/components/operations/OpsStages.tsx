import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { asset, birdFaceAsset, birdFaceImageClass } from "@/lib/utils";

const stages = [
  {
    id: "breeder-farms",
    eyebrow: "Breeder Farms",
    title: "Building Quality from the Beginning",
    image: birdFaceAsset(),
    alt: "A broiler bird at a Sakthi Poultry farm",
    imageClass: birdFaceImageClass,
    paragraphs: [
      "Our commitment to quality begins at our breeder farms, where parent birds form the foundation of the broiler production cycle.",
      "Careful management at this stage supports the production of fertile hatching eggs and contributes to the overall quality of the broiler poultry chain.",
      "Clean environments, balanced nutrition and responsible poultry management are important parts of our approach to breeder operations.",
      "Through continuous attention to poultry health and production practices, we work to maintain the standards expected throughout the subsequent stages of our integrated operations.",
      "From breeder management onward, quality remains our priority.",
    ],
  },
  {
    id: "hatcheries",
    eyebrow: "Poultry Hatcheries",
    title: "From Hatching Eggs to Broiler Day-Old Chicks",
    image: asset("sakthi-poultry-broiler-chicks.jpg"),
    alt: "Broiler day-old chicks from Sakthi Poultry hatcheries",
    paragraphs: [
      "Our poultry hatcheries play an important role in transforming fertile hatching eggs into broiler day-old chicks.",
      "Sakthi Poultry's broiler chicks are incubated and hatched in our own hatcheries. Hygiene and biosecurity remain important operational priorities throughout the hatchery process.",
      "By maintaining attention to hatchery management and production practices, we support the supply of broiler chicks for commercial poultry production.",
      "Our hatchery operations form an essential connection between breeder production and commercial broiler farming.",
    ],
    cta: {
      href: "/products#day-old-chicks",
      label: "Explore Our Broiler Day-Old Chicks",
    },
  },
  {
    id: "broiler-farms",
    eyebrow: "Broiler Farms",
    title: "Responsible Commercial Broiler Farming",
    image: asset("sakthi-poultry-contract-broiler-farm.jpg"),
    alt: "Commercial broiler farming in the Sakthi Poultry network",
    paragraphs: [
      "Our broiler farms represent an important stage in Sakthi Poultry's integrated production system.",
      "Broiler birds are raised in clean environments and provided balanced nutrition to support their growth and overall well-being.",
      "Our approach to commercial broiler farming focuses on responsible husbandry practices and consistent operational management throughout the growing cycle.",
      "Farmer partnerships also form an important part of our broiler business. Our team provides technical guidance and encourages proper husbandry practices and modern farming methods within the farming community.",
      "Through this combination of people, poultry management and nutrition, we work to support consistent broiler production.",
    ],
  },
];

export function OpsStages() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        {stages.map((stage, index) => (
          <article
            key={stage.id}
            id={stage.id}
            className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <Reveal
              className={
                index % 2
                  ? "lg:order-2 lg:col-span-6"
                  : "lg:col-span-6"
              }
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                {stage.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                {stage.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {stage.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {"cta" in stage && stage.cta ? (
                <Button href={stage.cta.href} variant="accent" className="mt-8">
                  {stage.cta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              ) : null}
            </Reveal>
            <Reveal
              delay={0.08}
              className={
                index % 2
                  ? "relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-1 lg:col-span-6"
                  : "relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6"
              }
            >
              <MediaImage
                src={stage.image}
                alt={stage.alt}
                fill
                className={
                  "imageClass" in stage && stage.imageClass
                    ? stage.imageClass
                    : "object-cover"
                }
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </Reveal>
          </article>
        ))}

        <article
          id="feed-manufacturing"
          className="scroll-mt-32 overflow-hidden rounded-2xl border border-line bg-cream-2 lg:grid lg:grid-cols-12"
        >
          <Reveal className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Poultry Feed Manufacturing
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Nutrition Supporting Poultry Growth & Performance
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Nutrition is a critical part of successful poultry farming. Sakthi
              Poultry&apos;s feed production supports different stages of the
              broiler poultry value chain through breeder feed and broiler feed.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white p-5">
                <h3 className="font-display text-xl text-ink">Breeder Feed</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Our breeder feed is intended to support breeder nutrition and
                  the production of quality fertile eggs and broiler chicks.
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5">
                <h3 className="font-display text-xl text-ink">Broiler Feed</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Our broiler feed provides the nutrition required to support
                  broiler growth and performance.
                </p>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted">
              By integrating feed production with our broader poultry
              operations, we maintain a strong focus on nutrition as an
              essential part of poultry health, development and production
              performance.
            </p>
            <Button href="/products#poultry-feed" variant="accent" className="mt-8">
              View Our Poultry Feed Products
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </Reveal>
          <div className="relative min-h-[260px] lg:col-span-5">
            <MediaImage
              src={asset("sakthi-poultry-feed-manufacturing.jpg")}
              alt="Sakthi Poultry feed manufacturing plant"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
