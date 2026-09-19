"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1 block w-full border border-line bg-white px-3 py-2.5 text-base focus:border-maroon";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Your message could not be sent.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your message could not be sent.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Full name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Service
        <select name="service" defaultValue="" className={field}>
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold">
        Project details
        <textarea name="message" required rows={6} className={field} />
      </label>

      {/* Honeypot: hidden from people, filled in by simple bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div role="status" aria-live="polite">
        {status === "sent" && (
          <p className="border-l-4 border-sewer bg-white p-4">
            Message sent. Our team will reply to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="border-l-4 border-maroon bg-white p-4">
            {error} You can also email {site.email} or call {site.phone}.
          </p>
        )}
      </div>
    </form>
  );
}
