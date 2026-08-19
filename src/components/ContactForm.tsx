"use client";

import { FormEvent, ReactNode, useState } from "react";
import { services } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

// -----------------------------------------------------------------------
// This form currently only validates + shows a confirmation message on the
// client. No email is actually sent yet.
//
// To wire it up for real, the easiest options are:
//   1. Formspree (https://formspree.io) — swap the onSubmit handler below
//      for a plain <form action="https://formspree.io/f/xxxxxxx" method="POST">
//   2. A Next.js Route Handler (src/app/api/contact/route.ts) that sends
//      the payload via Resend, SendGrid, etc., called via fetch() below.
// -----------------------------------------------------------------------

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // TODO: replace this with a real submission (see comment above).
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    e.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-brass-400 bg-brass-500/10 p-8 text-center">
        <p className="font-display text-xl text-navy-950">Thanks — message sent.</p>
        <p className="mt-2 text-sm text-navy-800/80">
          We&rsquo;ll get back to you shortly to talk through your project.
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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input"
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
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

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input"
          placeholder="you@email.com"
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Boat Make / Model" htmlFor="boat">
          <input
            id="boat"
            name="boat"
            type="text"
            className="form-input"
            placeholder="e.g. 2004 Catalina 36"
          />
        </Field>
        <Field label="Service Interested In" htmlFor="service">
          <select id="service" name="service" className="form-input" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </Field>
      </div>

      <Field label="Tell us about your project" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input resize-none"
          placeholder="What are you looking to have done, and where's the boat located?"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-sm bg-brass-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-950 transition-colors hover:bg-brass-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
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
