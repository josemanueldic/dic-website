import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="display text-4xl">Page not found</h1>
      <p className="mt-4 text-lg text-muted">
        The page you are looking for has moved or does not exist. Try our services or projects instead.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn btn-primary">
          Go to the home page
        </Link>
        <Link href="/services" className="btn border-ink">
          View services
        </Link>
      </div>
    </section>
  );
}
