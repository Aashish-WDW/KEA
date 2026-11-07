import type { Metadata } from "next";
import { Host_Grotesk, Libertinus_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const serif = Libertinus_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karnataka Equestrian Association | KEA",
    template: "%s | KEA — Karnataka Equestrian Association",
  },
  description:
    "The official governing body for equestrian sports in Karnataka. Affiliated with the Equestrian Federation of India (EFI), KOA, and MYAS.",
  keywords: ["equestrian", "Karnataka", "horse riding", "dressage", "show jumping", "eventing", "tent pegging", "endurance", "KEA", "EFI"],
  openGraph: {
    title: "Karnataka Equestrian Association",
    description: "The official governing body for equestrian sports in Karnataka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">
        <Preloader />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
