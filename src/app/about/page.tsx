import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { leadership, timeline, values } from "@/lib/data";
import { asset } from "@/lib/utils";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sakthi Poultry Private Limited — incorporated in Pollachi in 2019, led by A. Nagarajan, building an integrated poultry value chain across Tamil Nadu.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Sakthi Poultry", images: ["/assets/images/farm-complex.jpg"] },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "About", path: "/about" }]} />
      <PageHero
        title="A family enterprise built for integration"
        description="From a Pollachi registered office to farms, hatchery and feed milling, Sakthi Poultry is structured so quality, biosecurity and supply can scale together."
        image={asset("farm-complex.jpg")}
        crumbs={[{ label: "About" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Company profile"
              title="Sakthi Poultry Private Limited"
              description={`${site.legalName} (CIN ${site.cin}) was incorporated on 27 November 2019 and is registered with ROC Coimbatore. The company produces commercial broilers and hatching eggs, with automated mash and pellet feed manufacturing serving internal and partner demand.`}
            />
            <p className="mt-6 leading-relaxed text-muted">
              Managing Director A. Nagarajan brings more than three decades of
              poultry industry experience. Together with directors A. Sekar,
              A. Vairamani and R. Ezhilarasi, the board steers an integrated
              model: parent stock, hatchery throughput, nutrition, grow-out and
              market offtake.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative min-h-[360px] overflow-hidden">
              <MediaImage
                src={asset("aerial-complex-02.jpg")}
                alt="Sakthi Poultry production complex"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Journey" title="Milestones along the value chain" />
          <ol className="mt-12 grid gap-0 border-l border-gold md:grid-cols-1">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <li className="relative grid gap-2 border-b border-line py-8 pl-8 last:border-b-0 md:grid-cols-12">
                  <span className="absolute -left-[5px] top-10 size-2.5 rounded-full bg-gold" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold md:col-span-3">
                    {item.year}
                  </p>
                  <div className="md:col-span-9">
                    <h3 className="text-xl font-semibold text-forest">{item.title}</h3>
                    <p className="mt-2 text-muted leading-relaxed">{item.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Vision, mission and the people who hold them"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="border border-line bg-forest p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
                Vision
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                To be Tamil Nadu’s most trusted integrated poultry house —
                where farmers, buyers and communities can rely on consistent,
                bio-secure supply.
              </p>
            </article>
            <article className="border border-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Mission
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Run breeding, hatching, feed and grow-out as one quality system;
                onboard contract farmers fairly; and serve markets with uniform
                birds and nutrition.
              </p>
            </article>
            <article className="border border-line bg-cream-2 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Promise
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Capability over empty scale. Every expansion must strengthen
                biosecurity, bird welfare and the integrity of farmer payments.
              </p>
            </article>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <article key={person.name} className="border border-line bg-white p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-lg font-semibold text-gold">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-semibold text-forest">{person.name}</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Values" title="How we decide, every day" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <article key={v.title} className="border border-line p-6">
                <h3 className="text-lg font-semibold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Infrastructure"
            title="Modern hatchery, automated feed, bio-secured farms"
            description="Climate-controlled housing, organised shed layouts, mill throughput and veterinary–lab capability sit behind the birds and bags that leave our gates."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { img: asset("aerial-farm-01.jpg"), t: "Bio-secured farm environments" },
              { img: asset("farm-complex.jpg"), t: "Hatchery & support buildings" },
              { img: asset("feed-bags-chicks.jpg"), t: "Automated feed manufacturing" },
            ].map((c) => (
              <figure key={c.t} className="relative aspect-[4/3] overflow-hidden">
                <MediaImage src={c.img} alt={c.t} fill className="object-cover" sizes="33vw" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-forest-deep/75 px-4 py-3 text-sm text-white">
                  {c.t}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
