"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[88vh] overflow-hidden bg-forest-deep"
    >
      <YouTubeBackground
        id={site.heroYoutubeId}
        poster={asset("aerial-farm-01.jpg")}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/70 to-forest-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/40" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8"
        initial={reduce ? false : "hidden"}
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
      >
        <motion.p
          variants={item}
          className="inline-flex w-fit items-center rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light backdrop-blur-sm"
        >
          Vencobb Family Associate • Integrated Poultry Integration
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={item}
          className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.12] text-white sm:text-5xl lg:text-6xl"
        >
          Integrated Poultry Excellence.{" "}
          <span className="italic text-gold-light">Quality at Every Stage.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-lg font-medium text-white sm:text-xl"
        >
          Quality Poultry from an Integrated Poultry Company in Tamil Nadu
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-[17px]"
        >
          From parent breeder farms and hatcheries to broiler chicks, poultry
          feed, broiler farming and distribution, Sakthi Poultry Private Limited
          manages an integrated poultry value chain focused on consistent quality,
          efficient operations, bird health and responsible farming practices.
          Driven by our enduring philosophy —{" "}
          <em className="font-medium not-italic text-gold-light">“Quality Forever”</em>.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
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
        </motion.div>
      </motion.div>

      <motion.a
        href="#about-overview"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 sm:block"
        aria-label="Scroll to next section"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-7" aria-hidden />
      </motion.a>
    </section>
  );
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function YouTubeBackground({
  id,
  poster,
}: {
  id: string;
  poster: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <MediaImage
        src={poster}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&si=${site.heroYoutubeShare}`}
        title="Sakthi Poultry farm film"
        allow="autoplay; encrypted-media; picture-in-picture"
        className="absolute top-1/2 left-1/2 aspect-video h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
      />
    </div>
  );
}
