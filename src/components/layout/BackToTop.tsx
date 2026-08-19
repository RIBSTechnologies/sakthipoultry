"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-24 z-50 inline-flex size-12 items-center justify-center rounded-full bg-forest text-white shadow-lg transition hover:bg-gold lg:right-6 lg:bottom-6"
      aria-label="Back to top"
    >
      <ChevronUp className="size-6" aria-hidden />
    </button>
  );
}
