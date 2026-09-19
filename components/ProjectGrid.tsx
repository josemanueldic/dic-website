import Link from "next/link";
import { Photo } from "./Photo";
import type { Project } from "@/lib/projects";

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <li key={p.slug} className="relative">
          <Photo src={p.images?.[0]} alt={p.title} ratio="4/3" />
          <h3 className="heading mt-4 text-lg">
            <Link href={`/project/${p.slug}`} className="after:absolute after:inset-0">
              {p.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted">Client: {p.client}</p>
        </li>
      ))}
    </ul>
  );
}
