import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em]">
      <ol className="flex flex-wrap items-center gap-1.5 text-white/70">
        <li>
          <Link href="/" className="hover:text-gold-light">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3 opacity-70" aria-hidden />
            {item.href ? (
              <Link href={item.href} className="hover:text-gold-light">
                {item.label}
              </Link>
            ) : (
              <span className="text-gold-light">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
