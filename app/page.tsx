import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ServiceList } from "@/components/ServiceList";
import { UtilityDiagram } from "@/components/UtilityDiagram";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { systems } from "@/lib/systems";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-ink text-white">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="heading text-sm uppercase tracking-[0.16em] text-white/60">
              {site.yearsExperience} years in Qatar
            </p>
            <h1 className="display mt-4 max-w-xl text-[clamp(2.1rem,5.2vw,4.2rem)]">
              Civil, infrastructure and utility contractor in Qatar
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              {site.name} delivers wet utility, road, steel, flooring and building works for Ashghal, Kahramaa,
              QatarEnergy, Qatar Rail and the main contractors who work with them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn btn-light">
                Request a quotation
              </Link>
              <Link href="/projects" className="btn btn-outline-light">
                View our projects
              </Link>
            </div>
          </div>
          <UtilityDiagram className="lg:justify-self-end lg:max-w-md" />
        </div>
      </section>

      {/* Approvals */}
      <section aria-label="Approvals" className="border-b border-line bg-concrete">
        <div className="mx-auto max-w-7xl px-5 py-7">
          <p className="text-sm font-semibold text-muted">Approved contractor for</p>
          <ul className="mt-3 grid grid-cols-2 gap-y-3 md:grid-cols-4">
            {site.approvals.map((a) => (
              <li
                key={a}
                className="heading border-l-2 border-maroon pl-4 text-lg md:text-xl"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wet utilities */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display text-[clamp(1.7rem,3.4vw,2.6rem)]">
              Wet utility works are our main expertise
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted">
              We complete and maintain wet utility works with major clients on key projects in Doha, and hold
              approvals from Ashghal, Kahramaa, QP and Qatar Rail. Our scope covers new network installation,
              diversion, protection, testing and commissioning.
            </p>
            <p className="mt-4 max-w-xl text-muted">
              Recent work with ALYSJ JV, ISG JV, FYAP JV, Daewoo E&amp;C and CHEC.
            </p>
            <p className="mt-8">
              <Link href="/services/wet-utility-works" className="text-link">
                Read about wet utility works
              </Link>
            </p>
          </div>
          <div>
            <ul className="border-t border-ink">
              {systems.map((s) => (
                <li key={s.name} className="flex items-center gap-5 border-b border-line py-4">
                  <span aria-hidden="true" className="h-4 w-16 shrink-0 rounded-full" style={{ background: s.color }} />
                  <span>
                    <span className="heading block text-lg">{s.name}</span>
                    <span className="text-sm text-muted">{s.note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Photo alt="Wet utility works on site" ratio="16/9" className="mt-6" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-concrete/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-[clamp(1.7rem,3.4vw,2.6rem)]">What we do</h2>
            <Link href="/services" className="text-link">
              All services
            </Link>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-[clamp(1.7rem,3.4vw,2.6rem)]">Recent projects</h2>
          <Link href="/projects" className="text-link">
            All projects
          </Link>
        </div>
        <ProjectGrid items={projects} />
      </section>

      {/* About */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,380px)_1fr] md:items-center md:gap-16 md:py-24">
          <figure>
            <Photo
              src={site.chairman.image}
              alt={`${site.chairman.title}, ${site.chairman.name}`}
              ratio="3/4"
              sizes="(min-width:768px) 380px, 100vw"
            />
            <figcaption className="mt-3">
              <span className="heading block">{site.chairman.name}</span>
              <span className="text-sm text-muted">{site.chairman.title}</span>
            </figcaption>
          </figure>
          <div>
            <h2 className="display text-[clamp(1.7rem,3.4vw,2.6rem)]">
              {site.yearsExperience} years of working experience in Qatar
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Doha International Co. specializes in infrastructure, civil works, buildings and general engineering
              works. We have executed projects for private entities and local government agencies including
              Ashghal, Kahramaa, Qatar Petroleum, Qatar Rail, the Private Engineering Office and the Qatar Olympic
              Committee.
            </p>
            <p className="mt-6">
              <Link href="/about-us" className="text-link">
                About Doha International Co.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
