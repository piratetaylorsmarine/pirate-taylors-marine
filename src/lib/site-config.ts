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

  // Service area
  primaryCity: "San Diego, CA",
  serviceArea: "San Diego & all of Southern California",
  serviceCities: [
    "San Diego",
    "Coronado",
    "Oceanside",
    "Dana Point",
    "Newport Beach",
    "Long Beach",
    "Marina del Rey",
    "San Pedro",
  ],

  // TODO: confirm hours
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
