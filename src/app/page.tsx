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
      {/* Hero */}
      <section className="wave-texture relative overflow-hidden bg-navy-950 text-cream-100">
        <Container className="relative grid grid-cols-1 items-center gap-12 py-24 sm:py-32 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <span className="flex items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-400">
              <AnchorIcon className="h-3.5 w-3.5" />
              {business.serviceArea}
            </span>
            <h1 className="font-display max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {business.tagline}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-cream-200/85">
              Custom marine carpentry, brightwork restoration, painting, and
              electrical work for boat owners across San Diego and Southern
              California. Built by hand, finished to last.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Get a Free Quote
              </Button>
              <Button href="/projects" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/unnamed.webp"
              alt="Classic wooden sailboat teak cockpit restoration — Pirate Taylor's Marine"
              className="w-full rounded-sm object-cover shadow-2xl shadow-navy-950"
              style={{ aspectRatio: "3/4", maxHeight: "560px" }}
            />
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-b border-teak-200 bg-cream-100">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 text-sm font-medium text-navy-800 sm:justify-between">
          <span className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-brass-500" /> Custom Marine Carpentry
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-brass-500" /> Serving All of Southern California
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-brass-500" /> Free Estimates
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-brass-500" /> Boatyard & In-Water Service
          </span>
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

      {/* Recent Work photo showcase */}
      <section className="py-20 bg-cream-50">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl text-navy-950 sm:text-4xl">Recent Work</h2>
              <p className="mt-2 text-navy-800/75">A few shots from the water.</p>
            </div>
            <Button href="/projects" variant="ghost">
              See All Projects →
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/Screenshot_20260819_181041_Photos.jpg"
              alt="Classic sloop Footloose — teak brightwork restoration"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "3/4" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/IMG_20260724_121040_159.webp"
              alt="Custom hand-carved teak bowsprit scroll — Pirate Taylor's Marine"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "3/4" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/IMG_20260623_170639_259.webp"
              alt="Fresh nonskid deck paint — cruising sailboat"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "3/4" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/Screenshot_20260819_180554_Photos.jpg"
              alt="Classic wooden sailboat full teak cockpit restoration"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-teak-700 py-24 text-cream-100">
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

      {/* CTA */}
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
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
