import type { Metadata } from "next";
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
  metadataBase: new URL("https://piratetaylorsmarine.com"),
  title: {
    default: "Pirate Taylor's Marine | Marine Carpentry & Refinishing — Chula Vista & San Diego, CA",
    template: "%s | Pirate Taylor's Marine",
  },
  description:
    "Pirate Taylor's Marine offers expert marine carpentry, brightwork & varnishing, boat painting, and marine electrical in Chula Vista, San Diego, and all of Southern California. 5-star rated. Free estimates.",
  keywords: [
    "marine carpentry san diego",
    "boat carpentry chula vista",
    "brightwork varnishing san diego",
    "marine refinishing southern california",
    "teak restoration san diego",
    "boat painting san diego",
    "marine electrical san diego",
    "custom boat woodwork san diego",
    "marine carpentry chula vista ca",
    "boat restoration san diego ca",
    "marine contractor san diego",
    "yacht carpentry san diego",
    "brightwork restoration chula vista",
  ],
  authors: [{ name: "Pirate Taylor's Marine", url: "https://piratetaylorsmarine.com" }],
  creator: "Pirate Taylor's Marine",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pirate Taylor's Marine",
    title: "Pirate Taylor's Marine | Marine Carpentry & Refinishing — San Diego, CA",
    description:
      "Expert marine carpentry, brightwork, boat painting, and electrical work in Chula Vista & San Diego. 5-star rated, free estimates.",
    url: "https://piratetaylorsmarine.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirate Taylor's Marine | Marine Carpentry & Refinishing — San Diego, CA",
    description:
      "Expert marine carpentry, brightwork, boat painting, and electrical work in Chula Vista & San Diego. 5-star rated, free estimates.",
  },
  alternates: {
    canonical: "https://piratetaylorsmarine.com",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description:
    "Marine carpentry, brightwork & varnishing, boat painting, refinishing, and marine electrical services in Chula Vista, San Diego, and Southern California.",
  url: `https://${business.domain}`,
  telephone: business.phoneTel,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.6235,
    longitude: -117.0967,
  },
  areaServed: [
    { "@type": "City", name: "Chula Vista", sameAs: "https://en.wikipedia.org/wiki/Chula_Vista,_California" },
    { "@type": "City", name: "San Diego", sameAs: "https://en.wikipedia.org/wiki/San_Diego" },
    { "@type": "City", name: "Coronado", sameAs: "https://en.wikipedia.org/wiki/Coronado,_California" },
    { "@type": "City", name: "National City", sameAs: "https://en.wikipedia.org/wiki/National_City,_California" },
    { "@type": "City", name: "Oceanside", sameAs: "https://en.wikipedia.org/wiki/Oceanside,_California" },
    { "@type": "City", name: "Dana Point", sameAs: "https://en.wikipedia.org/wiki/Dana_Point,_California" },
    { "@type": "City", name: "Newport Beach", sameAs: "https://en.wikipedia.org/wiki/Newport_Beach,_California" },
    { "@type": "City", name: "Long Beach", sameAs: "https://en.wikipedia.org/wiki/Long_Beach,_California" },
    { "@type": "City", name: "Marina del Rey", sameAs: "https://en.wikipedia.org/wiki/Marina_del_Rey,_California" },
    { "@type": "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "00:00",
      closes: "00:00",
      description: "By appointment",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.googleRating,
    reviewCount: business.googleReviewCount,
    bestRating: 5,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Claudio Cordero" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Taylor did an outstanding job working on my boat! He handled everything from varnish work to building custom cabinets and refinishing the teak padding, and the results were exceptional. His attention to detail and craftsmanship really stand out — every surface looks flawless, and the custom pieces fit perfectly with the boat's design.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kasey Baltz" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Taylor Arroway's Marine Carpentry was excellent, quality craftsmanship and unique woodworking he makes any home or boat uniquely beautiful and luxurious.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jaz Kaner" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "The best woodwork I've seen anywhere. Literally 'resurrected' our old boat. (And added $$ to the resale!) Worth every penny.",
    },
  ],
  priceRange: "$$",
  sameAs: [
    business.social.instagram,
    business.social.facebook,
    business.googleMapsUrl,
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: business.name,
  url: `https://${business.domain}`,
  description:
    "Marine carpentry, brightwork, boat painting, and electrical work in Chula Vista & San Diego, CA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Chula Vista, California" />
        <meta name="geo.position" content="32.6235;-117.0967" />
        <meta name="ICBM" content="32.6235, -117.0967" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-cream-200 text-navy-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
