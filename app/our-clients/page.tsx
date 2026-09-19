import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { authorities, partners, type Client } from "@/lib/clients";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Clients",
  description:
    "Clients and approvals of Doha International Co.: Ashghal, Kahramaa, QatarEnergy, Qatar Rail, Qatar Olympic Committee and leading main contractors.",
  path: "/our-clients",
});

function LogoGrid({ items }: { items: Client[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-3 lg:grid-cols-5">
      {items.map((c) => (
        <li key={c.name}>
          <Photo src={c.logo} alt={`${c.name} logo`} ratio="3/2" sizes="(min-width:1024px) 20vw, 50vw" />
          <p className="heading mt-2 text-base">{c.name}</p>
          {c.note && <p className="text-sm text-muted">{c.note}</p>}
        </li>
      ))}
    </ul>
  );
}

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        title="Our Clients"
        intro="We work directly with government authorities and alongside leading main contractors."
      />
      <div className="mx-auto max-w-7xl space-y-16 px-5 py-16 md:py-20">
        <section>
          <h2 className="display text-[clamp(1.4rem,2.6vw,2rem)]">Authorities and public bodies</h2>
          <div className="mt-6 border-t border-ink pt-6">
            <LogoGrid items={authorities} />
          </div>
        </section>
        <section>
          <h2 className="display text-[clamp(1.4rem,2.6vw,2rem)]">Main contractors and developers</h2>
          <div className="mt-6 border-t border-ink pt-6">
            <LogoGrid items={partners} />
          </div>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
