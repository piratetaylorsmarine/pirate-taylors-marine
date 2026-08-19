import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import {
  AnchorIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact | ${business.name}`,
  description: `Get a free quote from ${business.name}. Serving ${business.serviceArea}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            Contact
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            Get a Free Quote
          </h1>
          <p className="mt-5 max-w-xl text-cream-200/85">
            Tell us about your boat and what you need done. We&rsquo;ll get
            back to you to talk through scope, timeline, and pricing.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-sm border border-teak-200 bg-white p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-sm bg-navy-950 p-8 text-cream-100 sm:p-10">
              <h2 className="font-display text-2xl">Reach Us Directly</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                  <div>
                    <p className="text-cream-100/60">Call or text</p>
                    <a
                      href={`tel:${business.phoneTel}`}
                      className="font-semibold text-cream-100 hover:text-brass-400"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                  <div>
                    <p className="text-cream-100/60">Email</p>
                    <a
                      href={`mailto:${business.email}`}
                      className="font-semibold text-cream-100 hover:text-brass-400"
                    >
                      {business.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                  <div>
                    <p className="text-cream-100/60">Service area</p>
                    <p className="font-semibold text-cream-100">
                      {business.serviceArea}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass-500" />
                  <div>
                    <p className="text-cream-100/60">Hours</p>
                    {business.hours.map((h) => (
                      <p key={h.day} className="font-semibold text-cream-100">
                        {h.day}: {h.time}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-sm border border-teak-200 bg-teak-700/5 p-6 text-sm text-navy-800/80">
              Prefer to talk it through first? Give us a call — we&rsquo;re
              happy to answer questions before you fill out a form.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
