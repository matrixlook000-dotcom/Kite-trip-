import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    template: "%s | Zephyra Travels",
    default: "Zephyra Travels | Sri Lanka Tour Packages from Colombo | Local Travel Experts",
  },
  description:
    "Book affordable Sri Lanka tours with local experts. Budget family packages from $499, honeymoon tours with Ella train ride, Yala wildlife safaris, Kandy cultural tours. Direct booking, no middleman, 24/7 support. SLTDA registered.",
  keywords: [
    "budget Sri Lanka tour packages",
    "affordable Sri Lanka holidays Colombo",
    "family tours Sri Lanka from $499",
    "honeymoon package Ella train ride",
    "Yala wildlife safari booking",
    "Kandy cultural heritage tours",
    "SLTDA registered tour operator",
  ],
  authors: [{ name: "Zephyra Travels Pvt Ltd" }],
  metadataBase: new URL("https://www.zephyratravels.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zephyratravels.com",
    siteName: "Zephyra Travels",
    images: [
      {
        url: "https://cdn.zephyratravels.com/public/logo.avif",
        width: 1200,
        height: 630,
        alt: "Zephyra Travels - Affordable Sri Lanka Tour Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zephyratravels",
    creator: "@zephyratravels",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0f1e] text-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
