import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AnchorIcon, CheckIcon, MapPinIcon } from "@/components/icons";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Pirate Taylor's Marine | Chula Vista & San Diego Marine Carpenter",
  description:
    "Pirate Taylor's Marine is a 5-star rated marine carpentry and refinishing company based at 640 Marina Pkwy, Chula Vista, CA. Serving San Diego and Southern California boat owners.",
  alternates: { canonical: "https://piratetaylorsmarine.com/about" },
  openGraph: {
    title: "About Pirate Taylor's Marine | Chula Vista & San Diego Marine Carpenter",
    description:
      "5-star rated marine carpentry and refinishing based in Chula Vista, CA. Serving San Diego and all of Southern California.",
    url: "https://piratetaylorsmarine.com/about",
  },
};

const values = [
  {
    title: "Marine-Grade Standards",
    body: "Every repair and build is done to hold up against sun, salt, and open water — not just look good on day one.",
  },
  {
    title: "Honest Estimates",
    body: "You'll know the scope and the cost before work starts, with no surprises when the invoice arrives.",
  },
  {
    title: "Respect for the Boat",
    body: "We treat every vessel — daysailer or long-range cruiser — like it's our own, from prep through final walkthrough.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            About Us
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            Marine carpentry &amp; refinishing, built on craft and word of mouth.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl text-navy-950 sm:text-3xl">
              Our Story
            </h2>
            {/* TODO: replace with the real founder story / company history */}
            <div className="mt-5 space-y-4 text-navy-800/85 leading-relaxed">
              <p>
                {business.name} is a {business.primaryCity}-based marine
                carpentry and refinishing outfit built around one idea: boats
                deserve craftsmanship, not shortcuts. What started as
                hands-on brightwork and carpentry work around local marinas
                has grown into a full-service shop covering woodwork,
                painting, and marine electrical.
              </p>
              <p>
                Whether it&rsquo;s bringing tired teak back to a deep-gloss
                finish, building a custom piece for a cabin, or tracking down
                an electrical gremlin, every job gets the same attention to
                detail — because a boat only gets one hull, and it deserves
                to be done right.
              </p>
              <p>
                Today, we work with boat owners, brokers, and yards across
                San Diego and Southern California, on everything from single
                repairs to full interior and exterior refits.
              </p>
            </div>

            <h2 className="font-display mt-12 text-2xl text-navy-950 sm:text-3xl">
              How We Work
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                "Free on-boat or in-yard consultation and estimate",
                "Clear scope of work and timeline before we start",
                "Marine-grade materials and finishes throughout",
                "Final walkthrough so you sign off on every detail",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-800/85">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brass-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-sm border border-teak-200 bg-cream-100 p-8">
              <h3 className="font-display text-xl text-navy-950">
                Where We Work
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-800/80">
                Based in {business.primaryCity}, working boatyards, marinas,
                and private docks across {business.serviceArea}.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm text-navy-800/85">
                {business.serviceCities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-brass-500" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-sm bg-navy-950 p-8 text-cream-100">
              <h3 className="font-display text-xl">Our Values</h3>
              <div className="mt-5 space-y-5">
                {values.map((v) => (
                  <div key={v.title}>
                    <p className="font-semibold text-brass-400">{v.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-cream-200/80">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button href="/contact" variant="primary" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
