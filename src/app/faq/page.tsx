import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AnchorIcon } from "@/components/icons";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ | Pirate Taylor's Marine — San Diego Marine Carpentry",
  description:
    "Common questions about marine carpentry, brightwork, boat painting, and working with Pirate Taylor's Marine in Chula Vista and San Diego, CA.",
  alternates: { canonical: "https://piratetaylorsmarine.com/faq" },
  openGraph: {
    title: "FAQ | Pirate Taylor's Marine",
    description:
      "Answers to common questions about teak restoration, pricing, booking, and more from Pirate Taylor's Marine in San Diego.",
    url: "https://piratetaylorsmarine.com/faq",
  },
};

const faqs = [
  {
    q: "Do you come to my boat, or do I need to bring it somewhere?",
    a: "I come to you. I work at marinas, boatyards, and private docks across San Diego and Southern California — wherever your boat is. No hauling or trailering required.",
  },
  {
    q: "Do you work on all types of boats?",
    a: "Yes — sailboats, powerboats, trawlers, classic woodies, you name it. Most of my work is on sailboats, but I'm equally comfortable on power vessels of any size.",
  },
  {
    q: "Can I get a quote without you seeing the boat in person?",
    a: "Absolutely. Send photos of the area needing work through the contact form and I can give you a solid ballpark. For larger or more complex jobs I'll usually want to come take a look in person before giving a final number, but photos get us most of the way there.",
  },
  {
    q: "How much does teak restoration cost?",
    a: "It varies a lot depending on the size of the boat, the condition of the wood, and how many coats you want. A small brightwork refresh can run a few hundred dollars; a full teak restoration on a larger boat can be several thousand. The best way to find out is to send photos and get a free estimate — I'll give you a clear price before anything starts.",
  },
  {
    q: "How long does brightwork or varnish work take?",
    a: "A typical varnish job takes anywhere from one day to a week depending on scope and how many coats are needed. Each coat needs time to dry before the next goes on. I'll give you a realistic timeline when we talk through the project.",
  },
  {
    q: "Do you work on fiberglass boats?",
    a: "Yes. A lot of my work — painting, nonskid decks, wood rot repair, hardware upgrades, electrical — is done on fiberglass boats. I do refer out work like fiberglass lamination and gelcoat repair to specialists, but most general boat work I handle myself.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "It depends on the time of year. Spring and summer get busy, so booking a few weeks ahead is smart for larger jobs. Smaller repairs and quick turnaround work I can often fit in sooner. Reach out and we'll find a time that works.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. I carry liability insurance and operate as a licensed contractor. Happy to provide proof of insurance before we start any work.",
  },
  {
    q: "How do I maintain my varnish between service visits?",
    a: "Keep it clean, keep it covered when you can, and don't let water pool on it. Wipe it down after heavy rain or saltwater exposure. Most varnish systems benefit from a maintenance coat every 6–12 months in Southern California — catching it before it starts to peel is much cheaper than stripping and starting over.",
  },
  {
    q: "What areas do you serve?",
    a: `I'm based in ${business.primaryCity} and work throughout ${business.serviceArea}. Regularly at marinas in ${business.serviceCities.slice(0, 5).join(", ")}, and more. If you're not sure whether I cover your area, just ask.`,
  },
  {
    q: "Do you do interior boat work?",
    a: "Yes — cabinetry, trim, interior wood refinishing, hardware upgrades, and general handyman work inside the cabin. If you can see it on the boat, I've probably worked on it.",
  },
  {
    q: "How do I get started?",
    a: "Send me a message through the contact form with some photos and a description of what you need. I'll get back to you quickly with questions or a quote. No pressure, no commitment — just a free conversation about your boat.",
  },
];

// JSON-LD FAQ schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-crimson-500/50 bg-crimson-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-crimson-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            Common Questions
          </h1>
          <p className="mt-5 max-w-xl text-cream-200/85">
            Everything you might want to know before reaching out — answered straight.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{faq.q}</summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-sm border border-teak-200 bg-white p-8 text-center">
            <h2 className="font-display text-2xl text-navy-950">Still have a question?</h2>
            <p className="mt-3 text-navy-800/80">
              Send a message and Taylor will get back to you — usually the same day.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">Get in Touch</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-xl text-3xl sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="max-w-lg text-cream-200/80">
            Send photos of your boat and describe what needs doing — Taylor will get back to you with a free estimate.
          </p>
          <Button href="/contact" variant="primary">Get a Free Quote</Button>
        </Container>
      </section>
    </>
  );
}
