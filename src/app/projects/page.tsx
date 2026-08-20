import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AnchorIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Past Projects | Pirate Taylor's Marine — San Diego Boat Restoration",
  description:
    "Before & after photos of marine carpentry, brightwork, teak restoration, nonskid painting, and wood rot repair by Pirate Taylor's Marine in Chula Vista & San Diego, CA.",
  alternates: { canonical: "https://piratetaylorsmarine.com/projects" },
  openGraph: {
    title: "Past Projects | Pirate Taylor's Marine — San Diego Boat Restoration",
    description:
      "Before & after photos of marine carpentry, brightwork, teak restoration, and boat painting in Chula Vista & San Diego.",
    url: "https://piratetaylorsmarine.com/projects",
  },
};

type Project = {
  title: string;
  category: string;
  description: string;
  before?: string;
  after?: string;
  photos?: string[]; // for showcase-only projects with multiple shots
  beforeLabel?: string;
  afterLabel?: string;
};

const projects: Project[] = [
  {
    title: "Nonskid Deck Painting",
    category: "Painting & Deck Work",
    description:
      "Full nonskid deck repaint on a cruising sailboat. Deck was showing significant staining and worn patches. Masked off, prepped, and repainted with fresh white nonskid — clean, safe, and looking brand new.",
    before: "/projects/IMG_20260623_100716_958.webp",
    after: "/projects/IMG_20260623_170639_259.webp",
    beforeLabel: "Masked & prepped",
    afterLabel: "Fresh nonskid applied",
  },
  {
    title: "Classic Wooden Sailboat — Full Teak Restoration",
    category: "Brightwork & Varnishing",
    description:
      "Complete teak restoration on a classic wooden sailboat. Cockpit, rails, caprail, tiller, and all trim stripped, sanded, and brought back to a deep gloss varnish finish. Every piece of wood on this boat got the full treatment.",
    before: "/projects/Screenshot_20260618_123610_Facebook.jpg",
    after: "/projects/unnamed.webp",
    beforeLabel: "Before — weathered teak",
    afterLabel: "After — deep gloss varnish",
  },
  {
    title: "Teak Caprail & Rubrail Brightwork",
    category: "Brightwork & Varnishing",
    description:
      "Caprail and rubrail varnish restoration with brass fitting work. Rail stripped back and rebuilt with multiple coats of spar varnish — the brass fitting cleaned and polished to match.",
    before: "/projects/Screenshot_20260623_182126_Photos.jpg",
    after: "/projects/Screenshot_20260819_180818_Photos.jpg",
    beforeLabel: "Before — oxidation & staining",
    afterLabel: "After — fresh varnish & polished brass",
  },
  {
    title: "Wood Rot Removal — Deck Hatch Surround",
    category: "Restoration & Repairs",
    description:
      "Hatch surround opened up to reveal significant wood rot underneath. All rotted material removed, area cleaned out, and rebuilt with marine-grade lumber — properly sealed before reinstalling the hatch.",
    before: "/projects/Screenshot_20260819_181000_Photos.jpg",
    after: "/projects/Screenshot_20260819_181018_Photos.jpg",
    beforeLabel: "Before — rot excavated",
    afterLabel: "After — fresh varnished caprail rebuild",
  },
  {
    title: "Custom Carved Teak Bowsprit",
    category: "Marine Carpentry",
    description:
      "Custom teak bowsprit built from scratch with a hand-carved scroll end detail — designed and fitted to match the character of a classic wooden sailboat. Finished with multiple coats of varnish to hold up at sea.",
    before: "/projects/IMG_20260530_131322_745.webp",
    after: "/projects/IMG_20260724_121040_159.webp",
    beforeLabel: "Original bowsprit",
    afterLabel: "Custom carved & varnished",
  },
  {
    title: "Grand Banks Trawler — Teak Rail & Deck",
    category: "Brightwork & Varnishing",
    description:
      "Teak rubrail and side deck brightwork on a Grand Banks trawler. Rail cleaned, sanded, and oiled to restore the rich color and protect against sun and salt.",
    before: "/projects/Screenshot_20260819_180837_Photos.jpg",
    after: "/projects/IMG_20260724_121110_177.webp",
    beforeLabel: "Before — hatch rot",
    afterLabel: "After — Grand Banks teak rail restored",
  },
  {
    title: "Classic Sloop — Full Cockpit Teak",
    category: "Brightwork & Varnishing",
    description:
      "Full cockpit teak restoration on a classic sloop — decking, helm, coamings, and all trim brought back with a deep gloss finish. Teak cockpit floor grates fitted and varnished to match.",
    before: "/projects/Screenshot_20260819_180734_Photos.jpg",
    after: "/projects/Screenshot_20260819_180554_Photos.jpg",
    beforeLabel: "Before — weathered cockpit",
    afterLabel: "After — full teak restoration",
  },
  {
    title: "Sailboat Side Deck & Caprail",
    category: "Brightwork & Varnishing",
    description:
      "Caprail varnish and side deck nonskid refresh on a cruising sailboat. Rail stripped, sanded, and rebuilt with fresh varnish coats — deck repainted for a consistent finish.",
    before: "/projects/IMG_20260430_085450_441.webp",
    after: "/projects/Screenshot_20260819_180508_Photos.jpg",
    beforeLabel: "Before — during work",
    afterLabel: "After — varnished caprail",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-crimson-500/50 bg-crimson-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-crimson-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            Past Projects
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            Before &amp; After
          </h1>
          <p className="mt-5 max-w-xl text-cream-200/85">
            Real projects, real results — marine carpentry, brightwork, painting,
            and restoration work for boat owners across San Diego and Southern California.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {projects.map((p, i) => (
              <div
                key={i}
                className="rounded-sm border border-teak-200 bg-white p-6 sm:p-8"
              >
                {/* Category + Title */}
                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-teak-600">
                    {p.category}
                  </span>
                  <h2 className="font-display mt-1 text-2xl text-navy-950">{p.title}</h2>
                  <p className="mt-2 max-w-2xl leading-relaxed text-navy-800/80 text-sm">{p.description}</p>
                </div>

                {/* Before / After images */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-navy-800/50">
                      {p.beforeLabel ?? "Before"}
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.before}
                      alt={`${p.title} — before`}
                      className="w-full rounded-sm object-cover"
                      style={{ aspectRatio: "4/3" }}
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brass-600">
                      {p.afterLabel ?? "After"}
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.after}
                      alt={`${p.title} — after`}
                      className="w-full rounded-sm object-cover"
                      style={{ aspectRatio: "4/3" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display max-w-xl text-3xl sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="max-w-lg text-cream-200/80">
            Describe what needs doing and Taylor will get back to you with a
            free estimate.
          </p>
          <Button href="/contact" variant="primary">Get a Free Quote</Button>
        </Container>
      </section>
    </>
  );
}
