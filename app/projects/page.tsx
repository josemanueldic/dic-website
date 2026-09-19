import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Projects",
  description:
    "Selected projects by Doha International Co. for Ashghal, Kahramaa, Qatar Petroleum, Qatar Rail and leading main contractors in Qatar.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        intro="A selection of our work for government authorities and main contractors in Qatar."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <ProjectGrid items={projects} />
      </section>
      <CtaBand />
    </>
  );
}
