import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[88vh] overflow-hidden bg-forest-deep"
    >
      <VideoPlayer
        src={site.heroVideo}
        poster={asset("aerial-farm-01.jpg")}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/70 to-forest-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/40" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8">
        <p className="inline-flex w-fit items-center rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light backdrop-blur-sm">
          Vencobb Family Associate • Integrated Poultry Integration
        </p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl"
        >
          Integrated Poultry Excellence.{" "}
          <span className="italic text-gold-light">Quality at Every Stage.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg font-medium text-white sm:text-xl">
          Quality Poultry from an Integrated Poultry Company in Tamil Nadu
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-[17px]">
          From parent breeder farms and hatcheries to broiler chicks, poultry
          feed, broiler farming and distribution, Sakthi Poultry Private Limited
          manages an integrated poultry value chain focused on consistent quality,
          efficient operations, bird health and responsible farming practices.
          Driven by our enduring philosophy —{" "}
          <em className="font-medium not-italic text-gold-light">“Quality Forever”</em>.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="/contact?type=product" variant="accent" size="lg">
            Product Enquiry
          </Button>
          <Button
            href="/farmers-partners"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-forest-deep"
          >
            Partner With Us
          </Button>
          <Link
            href="#value-chain"
            className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-gold-light hover:underline"
          >
            Explore Our Business
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
