export const site = {
  name: "Sakthi Poultry",
  legalName: "Sakthi Poultry Private Limited",
  shortName: "SPPL",
  tagline: "Quality at Every Stage. From Our Farms to the Market.",
  motto: "Quality forever",
  description:
    "Sakthi Poultry Private Limited is an integrated poultry company in Tamil Nadu focused on delivering quality across the broiler poultry value chain — from breeder farms and hatcheries to feed production and commercial broiler farms.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001",
  email: "sakthichicken_ho@yahoo.com",
  /** Update with the official enquiry / WhatsApp number. Leave blank to hide call buttons. */
  phone: "" as string,
  whatsapp: "" as string,
  cin: "U15134TZ2019PTC033064",
  founded: 2019,
  logo: "/assets/images/logo.png",
  heroVideo: "/assets/videos/sakthi-poultry-tamil-nadu-farm-hero.mp4",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  address: {
    line1: "No. 7, Om Shanthi Nagar, 1st Cross",
    line2: "Opp. Lathangi School, T. Kottampatti",
    city: "Pollachi",
    district: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "642002",
    country: "India",
    mapQuery: "Om Shanthi Nagar T.Kottampatti Pollachi",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/operations", label: "Operations" },
  { href: "/quality", label: "Quality" },
  { href: "/products", label: "Products" },
  { href: "/farmers-partners", label: "Farmers & Partners" },
  { href: "/locations", label: "Locations" },
  { href: "/news-events", label: "News & Events", short: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export function telHref() {
  return site.phone ? `tel:${site.phone.replace(/\s+/g, "")}` : null;
}

export function whatsappHref(message?: string) {
  if (!site.whatsapp) return null;
  const text = encodeURIComponent(
    message ?? "Hello Sakthi Poultry, I would like to enquire.",
  );
  return `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${text}`;
}

export function mapsHref(query: string = site.address.mapQuery) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function fullAddress() {
  const a = site.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.district}, ${a.state} ${a.pincode}, ${a.country}`;
}
