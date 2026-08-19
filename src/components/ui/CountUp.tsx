"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : "0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const match = value.match(/^([\d.,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const numeric = match[1].replace(/,/g, "");
    const suffix = match[2];
    const decimals = numeric.includes(".") ? (numeric.split(".")[1]?.length ?? 0) : 0;
    const target = Number(numeric);
    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    const duration = 1300;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      const current = target * eased;
      const formatted = decimals
        ? current.toFixed(decimals)
        : Math.round(current).toLocaleString("en-IN");
      setDisplay(`${formatted}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
