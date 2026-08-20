"use client";

import { FormEvent, ReactNode, useState } from "react";
import emailjs from "@emailjs/browser";
import { business, services } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS is not configured — missing NEXT_PUBLIC_EMAILJS_* env vars");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-brass-400 bg-brass-500/10 p-8 text-center">
        <p className="font-display text-xl text-navy-950">Thanks — message sent.</p>
        <p className="mt-2 text-sm text-navy-800/80">
          Taylor will get back to you shortly to discuss your project and provide a quote.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold uppercase tracking-wide text-teak-600 hover:text-teak-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name *" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input"
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Phone *" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="form-input"
            placeholder="(555) 123-4567"
          />
        </Field>
      </div>

      <Field label="Email *" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input"
          placeholder="you@email.com"
        />
      </Field>

      {/* Boat Info */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Boat Make & Model" htmlFor="boat">
          <input
            id="boat"
            name="boat"
            type="text"
            className="form-input"
            placeholder="e.g. 2004 Catalina 36"
          />
        </Field>
        <Field label="Boat Length" htmlFor="boat_size">
          <input
            id="boat_size"
            name="boat_size"
            type="text"
            className="form-input"
            placeholder="e.g. 36 ft"
          />
        </Field>
      </div>

      <Field label="Marina / Location of Boat" htmlFor="location">
        <input
          id="location"
          name="location"
          type="text"
          className="form-input"
          placeholder="e.g. Chula Vista Marina, San Diego"
        />
      </Field>

      <Field label="Service Needed" htmlFor="service">
        <select id="service" name="service" className="form-input" defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Multiple / Not sure">Multiple / Not sure</option>
        </select>
      </Field>

      <Field label="Describe the Work Needed *" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input resize-none"
          placeholder="Tell Taylor what needs to be done — the more detail the better. Include any measurements, materials, or condition of current work if relevant."
        />
      </Field>

      <p className="text-xs text-navy-800/60">
        Have photos of your boat or the area needing work? Email them to{" "}
        <a href={`mailto:${business.email}`} className="font-medium text-teak-600 hover:text-teak-500">
          {business.email}
        </a>{" "}
        or text {business.phoneDisplay} — it helps Taylor give a more accurate quote.
      </p>

      {status === "error" && (
        <p className="text-sm font-medium text-crimson-600">
          Something went wrong sending your message. Please try again, or
          call/email directly at {business.phoneDisplay} / {business.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-sm bg-brass-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-950 transition-colors hover:bg-brass-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Quote Request"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </label>
      {children}
    </div>
  );
}
