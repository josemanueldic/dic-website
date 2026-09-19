import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { projects } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: `${service.name} in Qatar`,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects.filter((p) => p.serviceSlug === service.slug);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.summary,
          url: `${site.url}/services/${service.slug}`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "Country", name: "Qatar" },
        }}
      />
      <PageHeader
        title={service.name}
        intro={service.summary}
        crumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_340px] lg:gap-16">
        <div>
          <Photo src={service.image} alt={service.name} ratio="16/9" priority sizes="(min-width:1024px) 800px, 100vw" />

          <div className="mt-10 max-w-2xl space-y-5 text-lg text-muted">
            {service.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {service.points && (
            <div className="mt-10 max-w-2xl">
              <h2 className="heading text-xl">{service.points.title}</h2>
              <ul className="mt-4 border-t border-ink">
                {service.points.items.map((i) => (
                  <li key={i} className="border-b border-line py-3 text-muted">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Photo alt={`${service.name}, on site (1)`} ratio="4/3" sizes="(min-width:640px) 400px, 100vw" />
            <Photo alt={`${service.name}, on site (2)`} ratio="4/3" sizes="(min-width:640px) 400px, 100vw" />
          </div>
        </div>

        <aside className="space-y-10">
          <div className="bg-ink p-6 text-white on-dark">
            <h2 className="heading text-lg">Need {service.name.toLowerCase()}?</h2>
            <p className="mt-2 text-sm text-white/80">Send us your scope and we will reply shortly.</p>
            <Link href="/contact-us" className="btn btn-light mt-5 w-full">
              Request a quotation
            </Link>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="heading text-lg">Related projects</h2>
              <ul className="mt-3 border-t border-ink">
                {related.map((p) => (
                  <li key={p.slug} className="border-b border-line py-3">
                    <Link href={`/project/${p.slug}`} className="font-semibold hover:text-maroon">
                      {p.title}
                    </Link>
                    <span className="block text-sm text-muted">{p.client}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="heading text-lg">Other services</h2>
            <ul className="mt-3 border-t border-ink">
              {others.map((s) => (
                <li key={s.slug} className="border-b border-line py-2.5">
                  <Link href={`/services/${s.slug}`} className="hover:text-maroon hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <CtaBand />
    </>
  );
}
