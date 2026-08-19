import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { AnchorIcon, ImageIcon } from "@/components/icons";
import { business, services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Project Gallery | Pirate Taylor's Marine — San Diego Marine Carpentry",
  description:
    "Photos of marine carpentry, brightwork restoration, boat painting, and refinishing projects by Pirate Taylor's Marine in Chula Vista & San Diego, CA.",
  alternates: { canonical: "https://piratetaylorsmarine.com/gallery" },
  openGraph: {
    title: "Project Gallery | Pirate Taylor's Marine — San Diego Marine Carpentry",
    description:
      "Marine carpentry, brightwork, and boat painting project photos from Chula Vista & San Diego, CA.",
    url: "https://piratetaylorsmarine.com/gallery",
  },
};

// TODO: Replace these placeholder tiles with real project photos.
// Swap <PlaceholderTile /> for a Next.js <Image src="/gallery/your-photo.jpg" .../>
// and drop the images into /public/gallery.
const placeholderProjects = services.flatMap((service) =>
  [1, 2].map((n) => ({
    id: `${service.slug}-${n}`,
    category: service.name,
  })),
);

function PlaceholderTile({ category }: { category: string }) {
  return (
    <div className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-sm border border-teak-200 bg-gradient-to-br from-navy-900 via-navy-800 to-teak-700 text-cream-100">
      <ImageIcon className="h-8 w-8 text-cream-100/60" />
      <span className="px-4 text-center text-xs font-semibold uppercase tracking-widest text-cream-100/70">
        {category}
      </span>
      <span className="text-[11px] text-cream-100/50">Photo coming soon</span>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <section className="wave-texture bg-navy-950 py-20 text-cream-100">
        <Container>
          <span className="flex w-fit items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass-400">
            <AnchorIcon className="h-3.5 w-3.5" />
            Gallery
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-5 max-w-xl text-cream-200/85">
            A look at recent brightwork, carpentry, paint, and electrical
            projects. Photos are added as jobs wrap up — check back often.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderProjects.map((project) => (
              <PlaceholderTile key={project.id} category={project.category} />
            ))}
          </div>

          <div className="mt-16 rounded-sm bg-teak-700/5 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl text-navy-950 sm:text-3xl">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-navy-800/80">
              Send us a few photos of your boat and what you&rsquo;re looking
              to do — we&rsquo;ll follow up with ideas and a free estimate.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
