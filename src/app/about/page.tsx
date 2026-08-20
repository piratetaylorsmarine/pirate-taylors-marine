import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AnchorIcon, CheckIcon, MapPinIcon } from "@/components/icons";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Pirate Taylor's Marine | Chula Vista & San Diego Marine Carpenter",
  description:
    "Taylor is the craftsman behind Pirate Taylor's Marine Carpentry — 10 years of experience in teak restoration, marine carpentry, wood rot repair, and custom woodworking for boat owners across San Diego and Southern California.",
  alternates: { canonical: "https://piratetaylorsmarine.com/about" },
  openGraph: {
    title: "About Pirate Taylor's Marine | Chula Vista & San Diego Marine Carpenter",
    description:
      "10+ years of marine carpentry experience. Teak restoration, custom woodwork, painting, solar installs, and more. Serving San Diego and Southern California.",
    url: "https://piratetaylorsmarine.com/about",
  },
};

const specialties = [
  "Teak & brightwork restoration",
  "Marine carpentry",
  "Exterior woodwork",
  "Trim & rail repairs",
  "Wood rot repair",
  "Custom woodworking",
  "Topside paint & nonskid decks",
  "General boat improvements",
];

export default function AboutPage() {
  return (
    <>
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-crimson-500/50 bg-crimson-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-crimson-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            About
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            10 years of carpentry. A passion for boats. Every detail done right.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl text-navy-950 sm:text-3xl">
              Meet Taylor
            </h2>
            <div className="mt-5 space-y-4 text-navy-800/85 leading-relaxed">
              <p>
                I&rsquo;m Taylor, the craftsman behind Pirate Taylor&rsquo;s Marine Carpentry.
                With 10 years of carpentry experience and a passion for boats, woodworking, and
                craftsmanship, I specialize in helping boat owners restore, repair, and improve
                their vessels.
              </p>
              <p>
                My work includes teak and brightwork restoration, marine carpentry, exterior
                woodwork, trim and rail repairs, wood rot repair, custom woodworking, and general
                boat improvements.
              </p>
              <p>
                I&rsquo;m highly detail-oriented and take a lot of pride in my work. I believe
                the difference between good work and great work is in the preparation,
                craftsmanship, and attention to the small details. As a sailor and boat owner
                myself, I understand the importance of doing things properly and building work
                that can stand up to the marine environment.
              </p>
              <p>
                Whether it&rsquo;s bringing weathered teak back to life, repairing damaged wood,
                or building something completely custom, I&rsquo;m passionate about what I do and
                take pride in leaving every project better than I found it.
              </p>
              <p className="font-medium text-navy-950">
                Serving San Diego and Southern California marinas.
              </p>
            </div>

            <h2 className="font-display mt-12 text-2xl text-navy-950 sm:text-3xl">
              I Specialize In
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {specialties.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-800/85">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brass-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/contact" variant="primary">
                Send a Message or Get a Quote
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/taylor-portrait.jpg"
              alt="Taylor at the helm of a classic wooden boat"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "4/5" }}
            />

            <div className="rounded-sm border border-teak-200 bg-cream-100 p-8">
              <h3 className="font-display text-xl text-navy-950">
                Where I Work
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

            <div className="rounded-sm bg-navy-950 p-8 text-cream-100">
              <h3 className="font-display text-xl">By the Numbers</h3>
              <div className="mt-5 space-y-5">
                {[
                  { stat: "10+", label: "Years of carpentry experience" },
                  { stat: "5★",  label: "Google rating (3 reviews)" },
                  { stat: "12",  label: "Services offered" },
                ].map((v) => (
                  <div key={v.label}>
                    <p className="font-display text-2xl text-brass-400">{v.stat}</p>
                    <p className="mt-1 text-sm text-cream-200/80">{v.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-sm border border-teak-300 bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:border-brass-500 hover:text-brass-600 transition-colors"
            >
              See reviews on Google →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
