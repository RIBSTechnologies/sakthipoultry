import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { navItems, site, fullAddress, mapsHref } from "@/lib/site";
import { enquiryTypes } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/10 bg-gold py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink">
        Quality forever
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={site.logo}
              alt=""
              width={48}
              height={64}
              className="h-14 w-auto bg-white p-0.5"
            />
            <span>
              <span className="block font-display text-xl">Sakthi Poultry</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gold">
                Private Limited
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
          <p className="mt-4 text-xs text-white/45">CIN {site.cin}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            {navItems.slice(1, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Enquiries</p>
          <ul className="mt-4 grid gap-2 text-sm text-white/75">
            {enquiryTypes.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Head office</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/75">
            <a href={mapsHref()} className="inline-flex gap-2 hover:text-gold" target="_blank" rel="noreferrer">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              {fullAddress()}
            </a>
            <a href={`mailto:${site.email}`} className="mt-3 inline-flex gap-2 hover:text-gold">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Pollachi · Sivagangai · Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
