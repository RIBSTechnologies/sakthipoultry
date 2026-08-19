"use client";

import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export function MobileCtas() {
  const pathname = usePathname();
  if (pathname === "/contact" || pathname === "/farmers-partners") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-cream/95 p-3 backdrop-blur-md lg:hidden">
      <Button href="/farmers-partners#apply" variant="gold" size="sm">
        Become a Farmer
      </Button>
      <Button href="/contact" variant="dark" size="sm">
        Enquire Now
      </Button>
    </div>
  );
}
