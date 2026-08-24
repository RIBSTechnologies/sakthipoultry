"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      className="relative bg-[#f5f5f4] pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          <motion.p
            variants={item}
            className="inline-flex w-fit items-center rounded-full border border-line bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold"
          >
            Vencobb Family Associate • Integrated Poultry Integration
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-6 font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl lg:text-[3.15rem]"
          >
            Integrated Poultry Excellence.{" "}
            <span className="italic text-gold">Quality at Every Stage.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-ink sm:text-xl"
          >
            Quality Poultry from an Integrated Poultry Company in Tamil Nadu
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-base leading-relaxed text-muted sm:text-[17px]"
          >
            From parent breeder farms and hatcheries to broiler chicks, poultry
            feed, broiler farming and distribution, Sakthi Poultry Private Limited
            manages an integrated poultry value chain focused on consistent quality,
            efficient operations, bird health and responsible farming practices.
            Driven by our enduring philosophy —{" "}
            <em className="font-medium not-italic text-ink">“Quality Forever”</em>.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/contact?type=product" variant="accent" size="lg">
              Product Enquiry
            </Button>
            <Button href="/farmers-partners" variant="outline" size="lg">
              Partner With Us
            </Button>
            <Link
              href="#value-chain"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-forest underline-offset-4 transition hover:text-gold hover:underline"
            >
              Explore Our Business
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-line lg:col-span-7 lg:aspect-[16/10]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <MediaImage
            src={asset("aerial-farm-01.jpg")}
            alt="Sakthi Poultry broiler farm in Tamil Nadu"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
          {reduce ? null : (
            <VideoPlayer
              src={site.heroVideo}
              poster={asset("aerial-farm-01.jpg")}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
