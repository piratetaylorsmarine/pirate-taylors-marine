# Pirate Taylor's Marine — Website

A Next.js (App Router, TypeScript, Tailwind CSS v4) marketing site for Pirate
Taylor's Marine, a marine carpentry & refinishing business serving San Diego
and Southern California.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout (fonts, header, footer, metadata)
    page.tsx           Home
    about/page.tsx      About
    services/page.tsx   Services
    gallery/page.tsx     Gallery
    contact/page.tsx     Contact
    globals.css         Theme (colors, fonts) + small utility classes
  components/
    Header.tsx, Footer.tsx, Container.tsx, Button.tsx
    ContactForm.tsx      Client-side contact form
    icons.tsx           Inline SVG icon set (no icon library dependency)
  lib/
    site-config.ts       All business info in one place (see below)
```

Fonts (Inter + Playfair Display) are self-hosted via `@fontsource` rather
than `next/font/google`, so the build doesn't depend on reaching Google
Fonts — it works offline and behind restrictive networks/proxies, and on
Vercel.

## Before you launch — things to update

Everything below lives in **`src/lib/site-config.ts`**, marked with `TODO`
comments. Nothing else in the codebase needs to change — every page reads
from this file.

1. **Phone number** — `phoneDisplay` / `phoneTel`
2. **Email** — `email`
3. **Hours** — `hours` array
4. **Social links** — `social.instagram` / `social.facebook` (remove any
   that don't apply)
5. **Services** — the `services` array has the 4 confirmed services
   (brightwork/varnishing, carpentry, painting/refinishing, electrical).
   Edit descriptions/bullets or add more services as needed.
6. **About page story** — `src/app/about/page.tsx` has a placeholder
   founder/company story (marked with a `TODO` comment) — swap in the real
   history, experience, licensing/insurance info, etc.

## Adding real photos

The gallery currently shows placeholder tiles (`PlaceholderTile` in
`src/app/gallery/page.tsx`) labeled by service category — no real photos
were provided yet. To add real ones:

1. Drop image files into `public/gallery/`.
2. In `src/app/gallery/page.tsx`, replace a `<PlaceholderTile />` with:
   ```tsx
   import Image from "next/image";
   <Image
     src="/gallery/your-photo.jpg"
     alt="Description of the project"
     width={800}
     height={600}
     className="aspect-[4/3] w-full rounded-sm object-cover"
   />
   ```

A logo isn't wired in yet either — the header/footer use a simple ship's
wheel icon as a placeholder mark. Drop a logo file into `public/` and swap
the `<WheelIcon />` in `src/components/Header.tsx` / `Footer.tsx` for an
`<Image>` once you have one.

## Wiring up the contact form

The form at `/contact` currently validates and shows a confirmation message
but **does not send an email anywhere** — there's no backend configured yet.
`src/components/ContactForm.tsx` has the two easiest options documented
inline:

1. **Formspree** (fastest, no code) — create a form at formspree.io and
   point the form's `action` at the endpoint it gives you.
2. **A Next.js Route Handler** — add `src/app/api/contact/route.ts` that
   sends the submission via an email API (Resend, SendGrid, etc.), and call
   it with `fetch()` from the form's submit handler.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new, import the repo, and click Deploy — Vercel
   auto-detects Next.js, no config needed.
3. Once live, add your custom domain (piratetaylorsmarine.com) under the
   project's Settings → Domains, and update your domain's DNS as Vercel
   instructs.

Alternatively, from the project directory: `npx vercel` (after
`npm i -g vercel` and `vercel login`).
