"use client";

import { FormEvent, ReactNode, useState } from "react";
import { business, services } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch {
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

      {/* Photo Upload */}
      <Field label="Photos (optional)" htmlFor="photos">
        <input
          id="photos"
          name="photos"
          type="file"
          multiple
          accept="image/*"
          className="form-input cursor-pointer text-sm text-navy-800 file:mr-4 file:rounded file:border-0 file:bg-navy-950 file:px-4 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:tracking-wide file:text-cream-100 hover:file:bg-navy-800"
        />
        <p className="mt-1.5 text-xs text-navy-800/60">
          Attach photos of your boat or the area needing work — helps Taylor provide an accurate quote.
        </p>
      </Field>

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
