import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Spotlight Landing — Conversion-first Next.js Landing Page",
  description:
    "A clean, conversion-driven landing page blueprint with HeroSpotlight, social proof, features, testimonials, pricing, FAQ, and a final CTA—built with Next.js, Tailwind, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans bg-background text-foreground`}>
        <Navbar
          brandName="Spotlight Landing"
          links={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/#features" },
            { label: "Testimonials", href: "/#testimonials" },
            { label: "Pricing", href: "/#pricing" },
            { label: "FAQ", href: "/#faq" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Get Starter Kit"
          ctaHref="/#pricing"
        />
        {children}
        <Footer
          brandName="Spotlight Landing"
        />
      </body>
    </html>
  );
}
