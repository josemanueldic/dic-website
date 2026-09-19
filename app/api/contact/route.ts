import { NextResponse } from "next/server";

// Sends enquiries by email through Resend (https://resend.com), using plain fetch.
// Needs these environment variables (see .env.example):
//   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
// Without them, production returns an error instead of pretending the message was sent.

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  const company = clean(body.company, 160);
  const phone = clean(body.phone, 40);
  const service = clean(body.service, 160);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and your message." }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact form, email not configured]", { name, email, company, phone, service, message });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "The contact form is not available right now." }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Company: ${company || "-"}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Service: ${service || "-"}`,
    "",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Your message could not be sent." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
