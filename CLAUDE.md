@AGENTS.md

# Pirate Taylor's Marine

Marine carpentry marketing site (piratetaylorsmarine.com).

## Stack
Next.js 16.3.1, React 19.2.8, TypeScript, ESLint. Deployed on Vercel via push to `main` on GitHub (`piratetaylorsmarine/pirate-taylors-marine`).

**This repo's GitHub remote is owned by the `piratetaylorsmarine` account, not the personal `Simeon2509` account used for the other sites.** `gh`/git credential helper on the usual dev machine is authenticated as `piratetaylorsmarine` via a fine-grained PAT — push with plain `git push origin main`.

## Commands
- `npm run dev` / `npm run build` / `npm run start`
- `npm run lint`

## Conventions
- Brand colors (navy/teak/brass/crimson) in `src/app/globals.css`
- Business info (name, phone, email, etc.) centralized in `src/lib/site-config.ts` — update there, not inline
- Contact form uses EmailJS (migrated off Resend Aug 2026)

## Image assets
`public/projects/` holds all site photos, served live. New photos from the user are typically full-res phone photos (2-4MB, 4000px+) — resize to ~1600px wide / jpeg quality ~80 before wiring into pages. Some arrive mislabeled (HEIC content saved with a `.jpg` extension) — check with `file` before using, convert with `sips` if needed. Never commit reference/inspiration screenshots into `public/`.

## Workflow
Once a change is verified (`tsc` + local dev render check), commit and push without stopping to ask for confirmation — approved by the user 2026-08-20 for this repo specifically.
