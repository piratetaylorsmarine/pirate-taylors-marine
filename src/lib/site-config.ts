// ---------------------------------------------------------------------------
// SITE CONFIG — single source of truth for business info used across the site.
//
// Everything marked "TODO" below is a placeholder. Update these values with
// real business info before launch — nothing else in the codebase needs to
// change, every page pulls from here.
// ---------------------------------------------------------------------------

export const business = {
  name: "Pirate Taylor's Marine",
  shortName: "Pirate Taylor's",
  tagline: "Marine Carpentry & Refinishing, Done Right",
  domain: "piratetaylorsmarine.com",

  phoneDisplay: "(714) 329-9718",
  phoneTel: "+17143299718",

  email: "Piratetaylorsmarine@gmail.com",

  address: {
    street: "640 Marina Pkwy",
    city: "Chula Vista",
    state: "CA",
    zip: "91910",
    full: "640 Marina Pkwy, Chula Vista, CA 91910",
  },

  googleMapsUrl:
    "https://www.google.com/maps/place/Pirate+Taylor%27s+Marine+Services/@32.6,-117.1,17z/data=!4m2!3m1!1s0x0:0x77b6111314868479",

  googleRating: 5,
  googleReviewCount: 3,

  // Service area
  primaryCity: "Chula Vista, CA",
  serviceArea: "San Diego & Southern California",
  serviceCities: [
    "Chula Vista",
    "San Diego",
    "Coronado",
    "National City",
    "Oceanside",
    "Dana Point",
    "Newport Beach",
    "Long Beach",
    "Marina del Rey",
    "San Pedro",
  ],

  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 5:00 PM" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],

  social: {
    instagram: "https://instagram.com/pirate_taylor",
    facebook: "https://www.facebook.com/taylor.arroway",
  },
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
};

// Core services as described by the client. Add/remove/edit freely — every
// page that lists services reads from this array.
export const services: Service[] = [
  {
    slug: "brightwork-varnishing",
    name: "Brightwork & Varnishing",
    short: "Teak restoration, varnish, and oil finishes.",
    description:
      "From tired, gray teak to a glass-smooth, deep-gloss finish — we strip, sand, and rebuild varnish and oil finishes on rails, caprails, hatches, and trim so your brightwork holds up to the sun and salt.",
    bullets: [
      "Teak stripping & restoration",
      "Multi-coat varnish systems",
      "Oil finishes & maintenance coats",
      "Caprails, hatches, trim & interior wood",
    ],
  },
  {
    slug: "marine-carpentry",
    name: "Marine Carpentry & Custom Woodwork",
    short: "Custom builds, repairs, and interior joinery.",
    description:
      "Structural repairs, custom cabinetry, interior joinery, and one-off builds — built to marine standards so it fits, seals, and lasts aboard.",
    bullets: [
      "Custom cabinetry & interior joinery",
      "Structural wood repair",
      "Teak decking & soles",
      "One-off custom builds",
    ],
  },
  {
    slug: "painting-refinishing",
    name: "Painting & Refinishing",
    short: "Topside painting, gelcoat, and Awlgrip finishes.",
    description:
      "Professional topside and hull refinishing — gelcoat repair, fairing, and premium two-part paint systems for a factory-quality, long-lasting finish.",
    bullets: [
      "Topside & hull painting",
      "Gelcoat repair & color matching",
      "Awlgrip & two-part paint systems",
      "Fairing & surface prep",
    ],
  },
  {
    slug: "marine-electrical",
    name: "Marine Electrical",
    short: "Wiring, panel upgrades, and troubleshooting.",
    description:
      "Clean, code-compliant electrical work — from tracking down a stubborn short to full panel upgrades and new installs for electronics and accessories.",
    bullets: [
      "Wiring & rewiring",
      "Panel & breaker upgrades",
      "Troubleshooting & repair",
      "Electronics & accessory installs",
    ],
  },
];

// Soft-mention only — not billed as core services until confirmed.
export const relatedServices = [
  "Fiberglass repair",
  "Teak deck restoration",
  "Custom canvas & upholstery referrals",
];
