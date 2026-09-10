import { Button } from "@/components/ui/Button";
import { SectionBackdrop } from "./SectionBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

const links = [
  { href: "/operations", label: "Explore Our Business" },
  { href: "/products", label: "View Our Products" },
  { href: "/contact?type=general", label: "Send an Enquiry" },
];

export function ClosingCTA() {
  return (
    <section
      id="closing"
      aria-labelledby="closing-heading"
      className="relative isolate overflow-hidden bg-ink py-12 sm:py-16 lg:py-20"
    >
      <SectionBackdrop
        src={asset("aerial-complex-01.jpg")}
      />

      <Reveal>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
          Quality Forever
        </p>
        <h2
          id="closing-heading"
          className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.7rem] text-white"
        >
          Quality Begins at the Source
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          From Breeding and Hatching to Feed, Farming and Market — Sakthi Poultry
          Connects the Value Chain with One Consistent Commitment: Quality Forever.
        </p>

        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          {links.map((link) => (
            <Button key={link.href} href={link.href} variant="accent" className="w-full sm:w-auto">
              {link.label}
            </Button>
          ))}
        </div>
        </div>
      </Reveal>
    </section>
  );
}
