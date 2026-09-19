import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { site } from "@/lib/site";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  intro,
  crumbs = [],
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs, { label: title }];

  return (
    <section className="on-dark bg-ink text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
          })),
        }}
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-white/70">
          <ol className="flex flex-wrap gap-x-2">
            {trail.map((c, i) => (
              <li key={c.label} className="flex gap-2">
                {c.href ? (
                  <Link href={c.href} className="underline underline-offset-4 hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
                {i < trail.length - 1 && <span aria-hidden="true">/</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="display mt-5 max-w-4xl text-[clamp(1.9rem,4.4vw,3.4rem)]">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-white/80">{intro}</p>}
      </div>
    </section>
  );
}
