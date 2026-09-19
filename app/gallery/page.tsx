import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { gallery } from "@/lib/gallery";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gallery",
  description:
    "Photos from Doha International Co. sites across Qatar: wet utility works, road works, steel, flooring and landscaping.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" intro="Our work and our teams on site across Qatar." />
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <li key={i} className="mb-5 break-inside-avoid">
              <figure>
                <Photo src={g.image} alt={g.caption} ratio={g.ratio} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                <figcaption className="mt-2 text-sm text-muted">{g.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
