import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtas } from "@/components/layout/MobileCtas";
import { BackToTop } from "@/components/layout/BackToTop";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Integrated Poultry Company in South India`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Sakthi Poultry",
    "integrated poultry South India",
    "Vencobb",
    "broiler chicks",
    "hatching eggs",
    "poultry feed",
    "contract farming poultry",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} | Quality at Every Stage`,
    description: site.description,
    images: [
      {
        url: "/assets/images/aerial-farm-01.jpg",
        width: 1200,
        height: 630,
        alt: "Sakthi Poultry farm infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col bg-cream font-sans text-ink"
        suppressHydrationWarning
      >
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCtas />
        <BackToTop />
      </body>
    </html>
  );
}
