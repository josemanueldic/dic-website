import type { Metadata } from "next";
import { site } from "./site";

/** Per-page metadata with a canonical URL and social tags. */
export function pageMeta(opts: { title: string; description: string; path: string }): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: `${opts.title} | ${site.name}`,
      description: opts.description,
      url: opts.path,
      siteName: site.name,
      type: "website",
      locale: "en_QA",
    },
  };
}
