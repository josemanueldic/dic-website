import Link from "next/link";
import { services } from "@/lib/services";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark mt-auto bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="display text-2xl text-white">{site.shortName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{site.description}</p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="heading text-base text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="heading text-base text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav
              .filter((n) => n.href !== "/services")
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white hover:underline">
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="heading text-base text-white">Reach us</h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p>
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p>
              <a href={site.phoneHref} className="hover:text-white hover:underline">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">
                {site.email}
              </a>
            </p>
            <p>Office hours: {site.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-sm text-white/65">
          © {new Date().getFullYear()} {site.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
