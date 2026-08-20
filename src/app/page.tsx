import type { ComponentType } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import {
  VarnishIcon,
  CarpentryIcon,
  PaintIcon,
  BoltIcon,
  CheckIcon,
  AnchorIcon,
} from "@/components/icons";
import { business, services } from "@/lib/site-config";

const REVIEWS = [
  {
    name: "Claudio Cordero",
    rating: 5,
    quote:
      "Taylor did an outstanding job working on my boat! He handled everything from varnish work to building custom cabinets and refinishing the teak padding, and the results were exceptional. His attention to detail and craftsmanship really stand out — every surface looks flawless, and the custom pieces fit perfectly with the boat's design. He was also professional, reliable, and easy to communicate with throughout the project.",
  },
  {
    name: "Kasey Baltz",
    rating: 5,
    quote:
      "Taylor Arroway's Marine Carpentry was excellent, quality craftsmanship and unique woodworking — he makes any home or boat uniquely beautiful and luxurious.",
  },
  {
    name: "Jaz Kaner",
    rating: 5,
    quote:
      "The best woodwork I've seen anywhere. Literally 'resurrected' our old boat. (And added $$ to the resale!) Worth every penny.",
  },
];

const serviceIcons: Record<string, ComponentType<{ className?: string }>> = {
  "brightwork-varnishing": VarnishIcon,
  "repairs-restoration": CarpentryIcon,
  "systems-upgrades": BoltIcon,
  "marine-carpentry": CarpentryIcon,
  "painting-refinishing": PaintIcon,
  "marine-electrical": BoltIcon,
};

const whyUs = [
  {
    title: "Craftsmanship First",
    body: "Every job — from a single varnish coat to a full custom build — gets the same attention to detail and marine-grade standards.",
  },
  {
    title: "Local to Southern California",
    body: `Based in ${business.primaryCity} and working marinas and boatyards across ${business.serviceArea}.`,
  },
  {
    title: "One Crew, Full Scope",
    body: "Carpentry, brightwork, paint, and electrical under one roof — fewer contractors to coordinate, one point of contact.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — photo with overlapping card */}
      <section className="overflow-hidden bg-cream-200 pt-10 pb-20 sm:pt-14 sm:pb-24">
        <Container>
          <div className="relative lg:pl-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/unnamed.webp"
              alt="Classic wooden sailboat teak cockpit restoration at a marina lined with palm trees"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "16/9" }}
            />
            <div className="relative -mt-10 mx-4 rounded-sm bg-navy-950 p-8 text-cream-100 shadow-xl sm:p-10 lg:absolute lg:left-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[28rem] lg:-translate-y-1/2">
              <span className="flex w-fit items-center gap-2 rounded-full border border-brass-400/60 bg-navy-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-300">
                <AnchorIcon className="h-3.5 w-3.5" />
                Serving San Diego &amp; Southern California Marinas
              </span>
              <h1 className="font-display mt-4 text-3xl leading-tight sm:text-4xl">
                {business.tagline}
              </h1>
              <div className="mt-4 h-px w-24 bg-brass-400/70" />
              <p className="mt-4 text-sm leading-relaxed text-cream-200/85">
                Custom marine carpentry, brightwork restoration, painting, and
                electrical work for boat owners across San Diego and Southern
                California. Built by hand, finished to last.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary">
                  Get a Free Quote
                </Button>
                <Button href="/projects" variant="secondary">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-y border-brass-400/30 bg-navy-950 text-cream-200">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4 text-xs font-semibold uppercase tracking-widest sm:justify-between">
          <span className="flex items-center gap-2">
            <CheckIcon className="h-3.5 w-3.5 text-brass-400" /> Custom Marine Carpentry
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="h-3.5 w-3.5 text-brass-400" /> Serving Southern California
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="h-3.5 w-3.5 text-brass-400" /> Free Estimates
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="h-3.5 w-3.5 text-brass-400" /> Boatyard &amp; In-Water Service
          </span>
        </Container>
      </section>

      {/* Meet the Craftsman — photo with overlapping card */}
      <section className="overflow-hidden bg-cream-200 py-20 sm:py-24">
        <Container>
          <div className="relative lg:pr-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/20250822_132236.jpg"
              alt="Looking up at glossy varnished teak rail and ship's wheel against blue sky"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "16/9" }}
            />
            <div className="relative -mt-10 mx-4 rounded-sm bg-navy-950 p-8 text-cream-100 shadow-xl sm:p-10 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[26rem] lg:-translate-y-1/2">
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-400">
                Meet the Craftsman
              </span>
              <h2 className="font-display mt-3 text-2xl sm:text-3xl">
                10 years of carpentry. A passion for boats.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-200/85">
                Taylor is the craftsman behind every project — hands-on from
                first sanding pass to final coat of varnish, working boatyards
                and marinas across San Diego and Southern California.
              </p>
              <Button href="/about" variant="primary" className="mt-6">
                Meet Taylor →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section className="border-y border-brass-400/30 bg-navy-950 py-14 text-cream-100">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 text-center sm:grid-cols-4">
            {[
              { stat: "10+", label: "Years of Experience" },
              { stat: "5.0★", label: `${business.googleReviewCount} Google Reviews` },
              { stat: "100%", label: "Marine-Grade Materials" },
              { stat: "7", label: "Core Services Offered" },
            ].map((v) => (
              <div key={v.label}>
                <p className="font-display text-3xl text-brass-400 sm:text-4xl">{v.stat}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-cream-200/75 sm:text-sm">
                  {v.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services teaser */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-navy-950 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-navy-800/80">
              Full-service marine carpentry and refinishing, from single
              repairs to complete refits.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? CarpentryIcon;
              return (
                <div
                  key={service.slug}
                  className="group flex flex-col rounded-sm border border-teak-200 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-navy-950/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950">
                    <Icon className="h-6 w-6 text-brass-400" />
                  </div>
                  <h3 className="font-display mt-5 text-lg text-navy-950">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/75">
                    {service.short}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="ghost">
              See All Services →
            </Button>
          </div>
        </Container>
      </section>

      {/* Brass anchor divider */}
      <div className="flex items-center gap-4 px-6 py-5 bg-cream-200">
        <div className="flex-1 h-px bg-brass-400/40" />
        <AnchorIcon className="h-5 w-5 text-brass-500 shrink-0" />
        <div className="flex-1 h-px bg-brass-400/40" />
      </div>

      {/* Recent Work photo showcase */}
      <section className="py-16 bg-cream-200">
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl text-navy-950 sm:text-4xl">Recent Work</h2>
              <p className="mt-2 text-navy-800/75">A few shots from the water.</p>
            </div>
            <Button href="/projects" variant="ghost">
              See All Projects →
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/Screenshot_20260819_181041_Photos.jpg" alt="Classic sloop teak brightwork" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/IMG_20260724_121040_159.webp" alt="Custom carved teak bowsprit scroll" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/unnamed(1).webp" alt="Classic sailboat teak cockpit and helm" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/IMG_20260623_170639_259.webp" alt="Fresh nonskid deck paint" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/Screenshot_20260819_180554_Photos.jpg" alt="Full teak cockpit restoration" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/IMG_20260724_121110_177.webp" alt="Grand Banks trawler teak rubrail" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/Screenshot_20260819_180818_Photos.jpg" alt="Teak caprail with brass fitting and marina" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/Screenshot_20260819_181133_Photos.jpg" alt="Teak cockpit and wooden helm wheel under blue sky" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/Screenshot_20260819_181216_Photos.jpg" alt="Freshly varnished teak companionway hatch" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/20250822_132236.jpg" alt="Glossy varnished teak bow rail and ship's wheel against blue sky" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/20250822_132447.jpg" alt="Restored ship's wheel and teak deck at the marina" className="w-full rounded-sm object-cover" style={{ aspectRatio: "3/4" }} />
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-teak-700 py-24 text-cream-100 border-t-2 border-brass-400/40">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl">
              Why Boat Owners Choose {business.shortName}
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center sm:text-left">
                <h3 className="font-display text-xl text-brass-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/85">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-cream-100">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-teak-600 hover:text-teak-500"
            >
              <span>★★★★★</span>
              <span>5.0 · {business.googleReviewCount} Reviews on Google</span>
            </a>
            <h2 className="font-display mt-4 text-3xl text-navy-950 sm:text-4xl">
              What Boat Owners Say
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="flex flex-col gap-4 rounded-sm border border-teak-200 bg-white p-7"
              >
                <div className="text-brass-500 tracking-wide">{"★".repeat(r.rating)}</div>
                <p className="flex-1 text-sm leading-relaxed text-navy-800/85 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="font-semibold text-sm text-navy-950">{r.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-teak-300 bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:border-brass-500 hover:text-brass-600 transition-colors"
            >
              See all reviews on Google →
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl text-navy-950 sm:text-4xl">Common Questions</h2>
            <p className="mt-3 text-navy-800/75">
              Quick answers — full FAQ at{" "}
              <a href="/faq" className="font-medium text-crimson-500 hover:text-crimson-600 underline underline-offset-2">piratetaylorsmarine.com/faq</a>.
            </p>
            <div className="faq-list mt-8">
              {[
                {
                  q: "Do you come to my boat, or do I need to haul it?",
                  a: "I come to you — marina, boatyard, or private dock. No hauling required.",
                },
                {
                  q: "Can I get a quote from photos?",
                  a: `Yes. Email photos to ${business.email} (or text ${business.phoneDisplay}) and I can give you a solid estimate. For larger jobs I'll usually want to come take a look in person, but photos get us most of the way there.`,
                },
                {
                  q: "How much does teak restoration cost?",
                  a: `It varies by the size of the boat, condition of the wood, and how many coats you want. A small brightwork refresh might run a few hundred dollars; a full restoration on a larger boat can be several thousand. Best way to find out is to email photos to ${business.email} — I'll give you a clear number before anything starts.`,
                },
                {
                  q: "Do you work on fiberglass boats?",
                  a: "Yes. A lot of my work — painting, nonskid decks, wood rot repair, hardware and electrical — is done on fiberglass vessels.",
                },
                {
                  q: "Are you insured?",
                  a: "Yes, I carry liability insurance. Happy to provide proof before we start.",
                },
                {
                  q: "What areas do you serve?",
                  a: "Based in Chula Vista and working marinas across San Diego and Southern California — Coronado, National City, Oceanside, Dana Point, Newport Beach, and more.",
                },
              ].map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{faq.q}</summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="wave-texture bg-navy-950 py-20 text-cream-100 border-t-2 border-brass-400/40">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-xl text-3xl sm:text-4xl">
            Ready to restore, build, or refit? Let&rsquo;s talk about your boat.
          </h2>
          <p className="max-w-lg text-cream-200/80">
            Tell us what you&rsquo;re working with and we&rsquo;ll get back to
            you with a free estimate.
          </p>
          <Button href="/contact" variant="primary">
            Get a Free Quote
          </Button>
        </Container>
      </section>
    </>
  );
}
