"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/projects") return pathname.startsWith("/projects") || pathname.startsWith("/project/");
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="hidden bg-ink text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
          <p>Office hours: {site.hours}</p>
          <p className="flex gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Text wordmark. Replace with the real logo (SVG) in /public when available. */}
        <Link href="/" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="display text-2xl text-maroon">{site.shortName}</span>
          <span className="hidden text-sm font-semibold leading-tight text-ink sm:block">
            Doha International Co.
            <span className="block text-xs font-normal text-muted">Contracting company, Qatar</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-2 text-[0.95rem] font-semibold underline-offset-8 hover:text-maroon ${
                      active ? "text-maroon underline decoration-2" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="btn border-line px-3 py-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
