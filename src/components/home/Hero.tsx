"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
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
      {reduce ? (
        <MediaImage
          src={asset("aerial-farm-01.jpg")}
          alt="Sakthi Poultry integrated farm in Tamil Nadu"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <VideoPlayer
          src={site.heroVideo}
          poster={asset("aerial-farm-01.jpg")}
          className="hero-media pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/45 via-forest-deep/20 to-forest-deep/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-transparent to-forest-deep/15" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8"
        initial={reduce ? false : "hidden"}
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        }}
      >
        <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center rounded-full border border-gold bg-gold px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-md">
            Vencobb Family Associate
          </span>
          <span className="inline-flex items-center rounded-full border-2 border-gold-light bg-forest-deep/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light backdrop-blur-sm">
            Integrated Poultry Integration
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={item}
          className="mt-6 max-w-4xl font-display text-[2.7rem] font-medium leading-tight text-white"
        >
          Integrated Poultry Excellence.{" "}
          <span className="italic text-gold-light">Quality at Every Stage.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-lg font-medium text-white sm:text-xl"
        >
          Nourishing Families with quality poultry
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
          <Button href="/farmers-partners" variant="accent" size="lg">
            Partner With Us
          </Button>
          <Button href="#value-chain" variant="outlineLight" size="lg">
            Explore Our Business
          </Button>
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
