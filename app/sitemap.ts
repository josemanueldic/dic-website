import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about-us", "/services", "/projects", "/gallery", "/equipments", "/our-clients", "/contact-us"];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, priority: 0.7 })),
    ...projects.map((p) => ({ url: `${site.url}/project/${p.slug}`, priority: 0.6 })),
  ];
}
