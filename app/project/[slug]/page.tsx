import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { getProject, projects } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMeta({ title: project.title, description: project.summary, path: `/project/${project.slug}` });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const service = getService(project.serviceSlug);
  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const images = project.images ?? [];

  return (
    <>
      <PageHeader
        title={project.title}
        intro={project.summary}
        crumbs={[{ label: "Projects", href: "/projects" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <Photo src={images[0]} alt={project.title} ratio="16/9" priority sizes="(min-width:1024px) 800px, 100vw" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Photo src={images[1]} alt={`${project.title} (2)`} ratio="4/3" sizes="(min-width:640px) 400px, 100vw" />
            <Photo src={images[2]} alt={`${project.title} (3)`} ratio="4/3" sizes="(min-width:640px) 400px, 100vw" />
          </div>
        </div>

        <aside>
          <dl className="border-t border-ink">
            <div className="border-b border-line py-4">
              <dt className="text-sm text-muted">Client</dt>
              <dd className="heading mt-1 text-lg">{project.client}</dd>
            </div>
            {service && (
              <div className="border-b border-line py-4">
                <dt className="text-sm text-muted">Service</dt>
                <dd className="mt-1">
                  <Link href={`/services/${service.slug}`} className="text-link">
                    {service.name}
                  </Link>
                </dd>
              </div>
            )}
          </dl>
          <Link href="/contact-us" className="btn btn-primary mt-8 w-full">
            Discuss a similar project
          </Link>
        </aside>
      </section>

      <section className="border-t border-line bg-concrete/60">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="display text-[clamp(1.5rem,3vw,2.2rem)]">More projects</h2>
          <ul className="mt-8 grid gap-x-6 gap-y-8 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug} className="relative">
                <Photo src={p.images?.[0]} alt={p.title} ratio="4/3" />
                <h3 className="heading mt-3 text-base">
                  <Link href={`/project/${p.slug}`} className="after:absolute after:inset-0">
                    {p.title}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
