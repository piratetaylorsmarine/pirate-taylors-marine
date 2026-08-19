import type { Metadata } from "next";
// Fonts are self-hosted via @fontsource (bundled npm packages) rather than
// next/font/google, so the build never depends on reaching Google Fonts at
// build time — works offline and behind restrictive network/proxy setups.
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${business.name} | Marine Carpentry & Refinishing in ${business.primaryCity}`,
  description: `${business.tagline}. Brightwork, custom carpentry, painting & refinishing, and marine electrical — serving ${business.serviceArea}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-cream-200 text-navy-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
