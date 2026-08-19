"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="back-to-top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-24 z-50 inline-flex size-12 items-center justify-center rounded-full bg-forest text-white shadow-lg transition hover:bg-gold lg:right-6 lg:bottom-6"
          aria-label="Back to top"
        >
          <ChevronUp className="size-6" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
