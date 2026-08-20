import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AnchorIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Past Projects | Pirate Taylor's Marine — San Diego Boat Restoration",
  description:
    "Before & after photos of marine carpentry, brightwork, teak restoration, and boat painting projects by Pirate Taylor's Marine in Chula Vista & San Diego, CA.",
  alternates: { canonical: "https://piratetaylorsmarine.com/projects" },
  openGraph: {
    title: "Past Projects | Pirate Taylor's Marine — San Diego Boat Restoration",
    description:
      "Before & after photos of marine carpentry, brightwork, teak restoration, and painting projects in Chula Vista & San Diego.",
    url: "https://piratetaylorsmarine.com/projects",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ADD PROJECTS HERE
// Each project needs:
//   title       - short name, e.g. "Teak Deck Restoration"
//   category    - one of the service categories
//   description - what was done
//   before      - path to before photo, e.g. "/projects/job1-before.jpg"
//   after       - path to after photo, e.g. "/projects/job1-after.jpg"
//
// Drop photos into /public/projects/ then add entries below.
// ─────────────────────────────────────────────────────────────────────────────
const projects: {
  title: string;
  category: string;
  description: string;
  before?: string;
  after?: string;
}[] = [
  // Example — replace with real projects:
  // {
  //   title: "Teak Cockpit Grate",
  //   category: "Marine Carpentry",
  //   description: "Custom cockpit floor grate built from scratch to replace rotted original. Teak sourced and fitted to exact dimensions.",
  //   before: "/projects/cockpit-grate-before.jpg",
  //   after: "/projects/cockpit-grate-after.jpg",
  // },
];

function PlaceholderImg({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-sm bg-gradient-to-br from-navy-900 via-navy-800 to-teak-700 text-cream-100/60">
      <span className="text-xs font-semibold uppercase tracking-widest">{label}</span>
      <span className="text-[11px] opacity-60">Photo coming soon</span>
    </div>
  );
}

export default function ProjectsPage() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            Past Projects
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            Before &amp; After
          </h1>
          <p className="mt-5 max-w-xl text-cream-200/85">
            Real projects, real results. Every boat is different — here&rsquo;s
            a look at some of the work Taylor has done for boat owners across
            San Diego and Southern California.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {hasProjects ? (
            <div className="space-y-20">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 gap-8 rounded-sm border border-teak-200 bg-white p-8 sm:p-10 lg:grid-cols-2"
                >
                  {/* Before */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-navy-800/60">
                      Before
                    </p>
                    {p.before ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.before}
                        alt={`${p.title} — before`}
                        className="w-full rounded-sm object-cover aspect-[4/3]"
                      />
                    ) : (
                      <PlaceholderImg label="Before" />
                    )}
                  </div>

                  {/* After */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brass-600">
                      After
                    </p>
                    {p.after ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.after}
                        alt={`${p.title} — after`}
                        className="w-full rounded-sm object-cover aspect-[4/3]"
                      />
                    ) : (
                      <PlaceholderImg label="After" />
                    )}
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-teak-600">
                      {p.category}
                    </span>
                    <h2 className="font-display mt-1 text-2xl text-navy-950">{p.title}</h2>
                    <p className="mt-3 leading-relaxed text-navy-800/85">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-teak-200 bg-white p-12 text-center">
              <p className="font-display text-2xl text-navy-950">Projects coming soon</p>
              <p className="mx-auto mt-3 max-w-md text-navy-800/75">
                Photos of completed work are being added. Check back soon — or reach
                out directly and Taylor can share examples relevant to your project.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">Get a Free Quote</Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-xl text-3xl sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="max-w-lg text-cream-200/80">
            Send photos of your boat and describe what needs doing — Taylor will
            get back to you with a free estimate.
          </p>
          <Button href="/contact" variant="primary">Get a Free Quote</Button>
        </Container>
      </section>
    </>
  );
}
