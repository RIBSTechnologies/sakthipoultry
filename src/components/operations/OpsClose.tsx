import { Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/home/SectionBackdrop";
import { partnerLinks } from "@/lib/operations";
import { asset } from "@/lib/utils";

export function OpsClose() {
  return (
    <>
      <section
        aria-labelledby="ops-quality-heading"
        className="bg-cream-2 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Quality Across Every Stage
            </p>
            <h2
              id="ops-quality-heading"
              className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl"
            >
              Quality is not treated as a single checkpoint
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              It starts with breeder operations and continues through poultry
              hatcheries, feed manufacturing, commercial broiler farming, sales
              and distribution.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Our operational approach focuses on maintaining clean
              environments, balanced poultry nutrition, hygiene, biosecurity,
              responsible husbandry practices and bird well-being throughout the
              poultry production process.
            </p>
            <div className="mt-8 inline-flex items-center gap-3">
              <Quote className="size-6 text-gold" aria-hidden />
              <p className="whitespace-nowrap font-display text-3xl text-forest">
                Quality Forever
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="ops-partner-heading"
        className="relative isolate overflow-hidden bg-forest py-20 sm:py-24 lg:py-28"
      >
        <SectionBackdrop
          src={asset("sakthi-poultry-farm-aerial-complex.jpg")}
          overlay="from-forest/90 via-forest/82 to-forest-deep/88"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
              Partner with Sakthi Poultry
            </p>
            <h2
              id="ops-partner-heading"
              className="mt-3 font-display text-3xl font-medium text-white sm:text-5xl"
            >
              Connect with our team
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Our operations are strengthened by the farmers, customers,
              distributors, suppliers and business partners who form part of the
              Sakthi Poultry ecosystem. Whether you are looking for broiler
              day-old chicks, hatching eggs, broiler birds, breeder feed,
              broiler feed or an opportunity to work with Sakthi Poultry,
              connect with our team to discuss your requirement.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {partnerLinks.map((link, index) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant={index === 0 ? "accent" : "outlineLight"}
                >
                  {link.label}
                </Button>
              ))}
            </div>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-gold-light">
              Sakthi Poultry Private Limited
            </p>
            <p className="mt-2 text-sm text-white/75">
              Integrated Poultry Operations. Consistent Quality. Strong
              Partnerships.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
