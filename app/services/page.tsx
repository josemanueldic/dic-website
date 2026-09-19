import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ServiceList } from "@/components/ServiceList";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services",
  description:
    "Wet utility works, road works, civil and infrastructure works, structural steel, MEP, epoxy flooring and coating, landscaping and street lighting in Qatar.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Utility, civil, steel, flooring and building services from one Qatari contractor."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <ServiceList />
      </section>
      <CtaBand />
    </>
  );
}
