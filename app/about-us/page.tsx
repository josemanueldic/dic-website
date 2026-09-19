import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Us",
  description:
    "Doha International Co. is a Qatari-based contracting company specializing in infrastructure, civil works, buildings and general engineering works.",
  path: "/about-us",
});

const milestones = [
  {
    year: "2013",
    text: "Epoxy flooring and coating works established in Qatar, in partnership with Engineering Group for Contracting (ECG).",
  },
  {
    year: "2018",
    text: "DIC Steel Division established in response to growing demand for structural steel works and services.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Doha International Co."
        intro="A Qatari-based contracting company specializing in infrastructure, civil works, buildings and general engineering works."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
        <div className="max-w-2xl space-y-5 text-lg text-muted">
          <p>
            We bring {site.yearsExperience} years of working experience to every project. Since our founding we have
            executed projects for private entities and local government agencies, including Ashghal, Kahramaa,
            Qatar Petroleum, Qatar Rail, the Private Engineering Office and the Qatar Olympic Committee.
          </p>
          <p>
            Customer satisfaction is our first priority. We put community well-being, environmental impact and our
            clients&rsquo; interests first, and we prefer to carry out projects collaboratively.
          </p>
          <p>
            DIC Steel Division is ISO-certified and implements an Integrated Quality, Health and Safety Management
            System to ensure quality in all aspects of its operations and the welfare of its workers and employees.
          </p>
        </div>
        <Photo alt="Doha International Co. team or head office" ratio="4/3" sizes="(min-width:1024px) 420px, 100vw" />
      </section>

      <section className="border-y border-line bg-concrete/60">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="display text-[clamp(1.5rem,3vw,2.2rem)]">How we grew</h2>
          <ol className="mt-8 max-w-3xl border-l-2 border-maroon">
            {milestones.map((m) => (
              <li key={m.year} className="relative pb-8 pl-8 last:pb-0">
                <span className="heading text-xl text-maroon">{m.year}</span>
                <p className="mt-1 text-muted">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-14">
          <Photo
            src={site.chairman.image}
            alt={`${site.chairman.title}, ${site.chairman.name}`}
            ratio="3/4"
            sizes="280px"
          />
          <div>
            <p className="heading text-2xl">{site.chairman.name}</p>
            <p className="text-muted">{site.chairman.title}</p>
            {/* Optional: add a short message from the Chairman here. */}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
