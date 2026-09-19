import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { equipmentGroups } from "@/lib/equipment";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Equipment",
  description:
    "The equipment Doha International Co. uses for wet utility, road, steel, blasting and coating works in Qatar.",
  path: "/equipments",
});

export default function EquipmentPage() {
  return (
    <>
      <PageHeader title="Equipment" intro="The plant and machinery behind our utility, road, steel and coating works." />
      <div className="mx-auto max-w-7xl space-y-16 px-5 py-16 md:py-20">
        {equipmentGroups.map((g) => (
          <section key={g.title}>
            <h2 className="heading text-2xl">{g.title}</h2>
            <p className="mt-1 text-muted">Supports: {g.supports}</p>
            <ul className="mt-6 grid gap-6 border-t border-ink pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((item, i) => (
                <li key={i}>
                  <Photo src={item.image} alt={`${item.name} (${g.title})`} ratio="4/3" />
                  <p className="heading mt-3 text-base">{item.name}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
