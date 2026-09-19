import Link from "next/link";
import { Photo } from "./Photo";
import { services } from "@/lib/services";

/** A ruled list of services. The whole row is clickable through the title link. */
export function ServiceList() {
  return (
    <ul className="border-t border-ink">
      {services.map((s) => (
        <li
          key={s.slug}
          className="relative grid gap-4 border-b border-line py-6 hover:bg-white md:grid-cols-[220px_1fr] md:gap-8 md:px-2"
        >
          <Photo src={s.image} alt={s.name} ratio="3/2" sizes="220px" className="max-w-[240px] md:max-w-none" />
          <div>
            <h3 className="heading text-xl">
              <Link href={`/services/${s.slug}`} className="after:absolute after:inset-0">
                {s.name}
              </Link>
            </h3>
            <p className="mt-2 max-w-2xl text-muted">{s.summary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
