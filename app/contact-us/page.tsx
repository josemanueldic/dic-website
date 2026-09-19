import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Contact Doha International Co. in Doha, Qatar for quotations and tender enquiries: phone, email, address and enquiry form.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        intro="Send us your scope or tender enquiry and our team will reply shortly."
      />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:py-20 lg:grid-cols-[1fr_380px] lg:gap-20">
        <div className="max-w-2xl">
          <h2 className="heading text-2xl">Send an enquiry</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <aside>
          <h2 className="heading text-2xl">Our office</h2>
          <address className="mt-6 space-y-6 border-t border-ink pt-6 not-italic">
            <p className="text-muted">
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p>
              <span className="block text-sm text-muted">Phone</span>
              <a href={site.phoneHref} className="text-link">
                {site.phone}
              </a>
            </p>
            <p>
              <span className="block text-sm text-muted">Email</span>
              <a href={`mailto:${site.email}`} className="text-link">
                {site.email}
              </a>
            </p>
            <p>
              <span className="block text-sm text-muted">Office hours</span>
              {site.hours}
            </p>
            <p>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                Open in Google Maps
              </a>
            </p>
          </address>
        </aside>
      </section>
    </>
  );
}
