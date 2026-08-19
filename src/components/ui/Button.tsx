import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary: "bg-forest text-white hover:bg-forest-deep",
  gold: "bg-gold text-white hover:bg-[#92400e]",
  accent: "bg-gold text-white hover:bg-[#92400e]",
  outline: "border-2 border-forest-deep text-forest-deep bg-transparent hover:bg-forest-deep hover:text-white",
  ghost: "text-forest hover:text-gold",
  dark: "bg-forest-deep text-white hover:bg-forest",
  white: "bg-white text-forest-deep hover:bg-cream",
} as const;

const sizes = {
  sm: "px-4 py-2 text-xs tracking-[0.12em]",
  md: "px-5 py-2.5 text-[13px] tracking-[0.1em]",
  lg: "px-7 py-3.5 text-sm tracking-[0.12em]",
} as const;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
