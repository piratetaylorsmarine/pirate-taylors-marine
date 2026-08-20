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
    instagram: "https://www.instagram.com/piratetaylorsmarine/",
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
    name: "Teak & Brightwork",
    short: "Teak restoration, varnish, and brightwork refinishing.",
    description:
      "From weathered, gray teak to a glass-smooth, deep-gloss finish — teak is stripped, sanded, and rebuilt with varnish or oil systems that hold up to the Southern California sun and salt.",
    bullets: [
      "Teak restoration & stripping",
      "Multi-coat varnish systems",
      "Oil finishes & maintenance coats",
      "Rails, caprails, hatches & interior wood",
    ],
  },
  {
    slug: "marine-carpentry",
    name: "Custom Woodwork & Carpentry",
    short: "Companionway doors, cockpit grates, and custom builds.",
    description:
      "One-off custom pieces built to marine standards — from companionway doors and cockpit floor grates to interior cabinetry and exterior woodworking. Every piece is built to fit, seal, and last aboard.",
    bullets: [
      "Custom companionway doors",
      "Custom cockpit floor grates",
      "Interior & exterior custom woodworking",
      "Hardware & cabinetry upgrades",
    ],
  },
  {
    slug: "repairs-restoration",
    name: "Repairs & Restoration",
    short: "Wood rot repair, handyman work, and window replacements.",
    description:
      "Whether it's a small repair or a larger restoration project, every job gets done right. Wood rot addressed properly, polycarbonate windows swapped cleanly, and general boat handyman work handled with care.",
    bullets: [
      "Wood rot repair & replacement",
      "Polycarbonate window replacements",
      "General boat handyman services",
      "Stainless & brass polishing",
    ],
  },
  {
    slug: "painting-refinishing",
    name: "Painting & Deck Work",
    short: "Topside paint and nonskid decks.",
    description:
      "Professional topside painting and nonskid deck work — properly prepped and applied for a clean, long-lasting finish that holds up in the water.",
    bullets: [
      "Topside paint",
      "Nonskid deck application",
      "Surface prep & fairing",
      "Cosmetic refresh & touch-ups",
    ],
  },
  {
    slug: "systems-upgrades",
    name: "Systems & Upgrades",
    short: "Solar, electrical, and onboard system installs.",
    description:
      "Practical upgrades that make life aboard easier and more efficient — solar system installs, electrical and hardware upgrades, and even custom compost toilet installations.",
    bullets: [
      "Solar system installation",
      "Electrical upgrades & wiring",
      "Custom compost toilet installation",
      "Hardware & accessory installs",
    ],
  },
];

// Soft-mention only
export const relatedServices = [
  "Fiberglass repair",
  "Canvas & upholstery referrals",
  "Engine compartment work",
];
