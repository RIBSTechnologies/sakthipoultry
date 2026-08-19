"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 text-ink backdrop-blur-md">
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] sm:px-6 lg:px-8">
          <p className="font-semibold text-gold">Quality forever</p>
          <p className="hidden text-white/70 sm:block">Integrated Poultry Company · Tamil Nadu</p>
          <a href={`mailto:${site.email}`} className="truncate hover:text-gold">
            {site.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-2.5 sm:px-6 lg:gap-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src={site.logo}
            alt="Sakthi Poultry"
            width={52}
            height={68}
            className="h-11 w-auto sm:h-12"
            priority
          />
          <span className="flex flex-col">
            <span className="font-display text-lg leading-none text-ink sm:text-xl">
              Sakthi Poultry
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Pvt. Ltd.
            </span>
          </span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={cn(
                  "nav-link shrink-0 whitespace-nowrap px-1.5 py-2 text-[11px] font-semibold uppercase tracking-[0.04em] text-ink/70 hover:text-ink xl:px-2",
                  active && "text-ink",
                )}
              >
                {"short" in item ? item.short : item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <Button href="/contact" variant="gold" size="sm" className="hidden sm:inline-flex">
            Enquire Now
          </Button>
          <button
            type="button"
            className="rounded-full p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-white px-4 py-6 lg:hidden"
        >
          <nav className="grid gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] hover:bg-cream-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <Button href="/contact" variant="gold" size="lg" className="w-full">
              Enquire Now
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
