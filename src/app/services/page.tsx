import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import {
  AnchorIcon,
  VarnishIcon,
  CarpentryIcon,
  PaintIcon,
  BoltIcon,
  CheckIcon,
} from "@/components/icons";
import { business, services, relatedServices } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Services | ${business.name}`,
  description: `Marine carpentry, brightwork, painting, and electrical services in ${business.serviceArea}.`,
};

const serviceIcons: Record<string, ComponentType<{ className?: string }>> = {
  "brightwork-varnishing": VarnishIcon,
  "marine-carpentry": CarpentryIcon,
  "painting-refinishing": PaintIcon,
  "marine-electrical": BoltIcon,
};

const process = [
  { step: "01", title: "Consultation", body: "We look at the boat (or photos) and talk through what you need." },
  { step: "02", title: "Estimate", body: "You get a clear, written scope of work and price before anything starts." },
  { step: "03", title: "The Work", body: "Marine-grade materials, careful prep, and craftsmanship at every stage." },
  { step: "04", title: "Walkthrough", body: "We review the finished work together before you sign off." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            Services
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            Full-Service Marine Carpentry &amp; Refinishing
          </h1>
          <p className="mt-5 max-w-xl text-cream-200/85">
            From a single coat of varnish to a full interior rebuild, here&rsquo;s
            what we do for boat owners across {business.serviceArea}.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-16">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug] ?? CarpentryIcon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 items-center gap-10 rounded-sm border border-teak-200 bg-white p-8 sm:p-10 lg:grid-cols-5"
              >
                <div className={`lg:col-span-3 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950">
                    <Icon className="h-6 w-6 text-brass-400" />
                  </div>
                  <h2 className="font-display mt-5 text-2xl text-navy-950 sm:text-3xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-navy-800/85">
                    {service.description}
                  </p>
                </div>
                <div className={`lg:col-span-2 ${reversed ? "lg:order-1" : ""}`}>
                  <div className="rounded-sm bg-teak-700/5 p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-teak-600">
                      Includes
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-navy-800/85">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="bg-teak-700 py-16 text-cream-100">
        <Container className="text-center">
          <h2 className="font-display text-2xl sm:text-3xl">Also Asked About</h2>
          <p className="mt-3 text-cream-100/80">
            Don&rsquo;t see exactly what you need? Ask — we regularly help with:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {relatedServices.map((r) => (
              <span
                key={r}
                className="rounded-full border border-cream-100/30 px-4 py-1.5 text-sm text-cream-100/90"
              >
                {r}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-navy-950 sm:text-4xl">
              How a Project Works
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <span className="font-display text-4xl text-brass-500">{p.step}</span>
                <h3 className="font-display mt-3 text-lg text-navy-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/75">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/contact" variant="primary">
              Get a Free Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
