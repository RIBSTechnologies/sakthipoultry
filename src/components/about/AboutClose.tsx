import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { aboutLinks } from "@/lib/about";

export function AboutClose() {
  return (
    <section
      aria-labelledby="about-close-heading"
      className="border-t border-line bg-[#f7f4ef] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="mx-auto block h-px w-16 bg-gold" />
          <h2
            id="about-close-heading"
            className="mt-8 font-display text-5xl text-forest sm:text-6xl"
          >
            Quality Forever
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {aboutLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  index === 0
                    ? "inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#92400e]"
                    : "inline-flex rounded-full border-2 border-forest-deep px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-forest-deep transition hover:bg-forest-deep hover:text-white"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
