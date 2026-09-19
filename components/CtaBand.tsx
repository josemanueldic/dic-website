import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({ title = "Tell us about your project" }: { title?: string }) {
  return (
    <section className="on-dark bg-maroon text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="display text-[clamp(1.6rem,3.2vw,2.4rem)]">{title}</h2>
          <p className="mt-3 max-w-xl text-white/85">
            Send us the scope or tender enquiry and our team will reply shortly.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact-us" className="btn btn-light">
            Request a quotation
          </Link>
          <a href={site.phoneHref} className="btn btn-outline-light">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
