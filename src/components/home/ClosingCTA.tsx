import { Button } from "@/components/ui/Button";
import { SectionBackdrop } from "./SectionBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

const links = [
  { href: "/operations", label: "Explore Our Business" },
  { href: "/products", label: "View Our Products" },
  { href: "/farmers-partners#apply", label: "Become Sakthi Farmer" },
  { href: "/contact?type=general", label: "Send an Enquiry" },
];

export function ClosingCTA() {
  return (
    <section
      id="closing"
      aria-labelledby="closing-heading"
      className="relative isolate overflow-hidden bg-forest py-20 sm:py-24 lg:py-28"
    >
      <SectionBackdrop
        src={asset("aerial-complex-01.jpg")}
        overlay="from-forest/90 via-forest/82 to-forest-deep/88"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #f59e0b 0, transparent 40%), radial-gradient(circle at 80% 80%, #0f382c 0, transparent 45%)",
        }}
      />

      <Reveal>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
          Quality Forever
        </p>
        <h2
          id="closing-heading"
          className="mt-3 font-display text-3xl font-medium text-white sm:text-5xl"
        >
          Quality Begins at the Source
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          From Breeding and Hatching to Feed, Farming and Market — Sakthi Poultry
          Connects the Value Chain with One Consistent Commitment: Quality Forever.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map((link, i) => (
            <Button
              key={link.href}
              href={link.href}
              variant={i === 0 ? "accent" : "outlineLight"}
            >
              {link.label}
            </Button>
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
}
