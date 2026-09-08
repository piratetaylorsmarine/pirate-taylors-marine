@AGENTS.md

# Pirate Taylor's Marine

Marine carpentry marketing site (piratetaylorsmarine.com).

## Stack
Next.js 16.3.1, React 19.2.8, TypeScript, ESLint. Deployed on Vercel via push to `main` on GitHub (`piratetaylorsmarine/pirate-taylors-marine`).

**This repo's GitHub remote is owned by the `piratetaylorsmarine` account, not the personal `Simeon2509` account used for the other sites.** Both accounts are logged into `gh` via keyring, but `gh`'s credential helper only serves the currently-*active* account's token to git, regardless of which repo you're in. If `Simeon2509` is active (the usual default), a plain `git push` here fails with 403. Before pushing:
```
gh auth switch --hostname github.com --user piratetaylorsmarine
git push origin main
gh auth switch --hostname github.com --user Simeon2509   # switch back afterward
```

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

## Hosting & DNS
Deployed on its own separate Vercel account (not Simeon's personal one). Domain DNS is on its own separate Porkbun account (porkbun.com) — also not Simeon's personal one. This matches the GitHub setup above: this business is kept on fully separate accounts end-to-end.

## Sibling sites
This is one of four marketing sites Simeon runs; the other three (colodrone.com, denverwebcrew.com, sillygoosepottery.com) share his personal GitHub/Vercel/Porkbun accounts and a lighter Next.js 14/React 18 stack — this site runs newer versions (Next 16/React 19) and is otherwise unrelated infrastructure-wise. Don't assume a fix here transfers to those, or vice versa.
