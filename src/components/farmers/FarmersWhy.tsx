import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { whyPartner } from "@/lib/farmers";

export function FarmersWhy() {
  return (
    <section
      aria-labelledby="farmers-why-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="farmers-why-heading"
            title="Why Partner with Sakthi Poultry?"
          />
        </Reveal>
        <Stagger className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyPartner.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-cream-2 p-6 shadow-sm sm:p-8">
                <span className="font-display text-lg text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
