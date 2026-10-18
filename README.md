# ronelflorida.dev

A dark-first personal portfolio for **Ronel Florida**, full-stack engineer.
Built with Next.js (App Router), React 19, Tailwind CSS v4, and shadcn/ui, and
rendered fully static.

The design leans into a developer/terminal aesthetic: a hero that reads like a
shell prompt, `// 01. section` comment labels, an about block shaped like a typed
object, a git-log experience timeline, and a ⌘K command palette.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (all routes prerender to static)
npm start        # serve the production build
npm run lint     # ESLint
npx tsc --noEmit # type-check
```

## Editing content

**All site copy lives in one file: [`data/portfolio.ts`](data/portfolio.ts).**
You should not need to touch a component to change what the site says.

Search that file for `TODO` to find every placeholder. Sections:

| Export         | Controls                                                                |
| -------------- | ----------------------------------------------------------------------- |
| `siteConfig`   | Site name, production URL, meta description, source link, copyright year |
| `profile`      | Name, handle, role, location, availability pill, tagline, stack, email, CV |
| `navItems`     | Navbar links and their in-page anchors (also drives `sectionIds`)        |
| `socials`      | Footer + palette links (GitHub, LinkedIn, email)                         |
| `skillGroups`  | Skills grid, grouped by category                                         |
| `projects`     | Project cards; set `featured: true` for the wide top card                |
| `experience`   | Git-log timeline entries (role, company, period, highlights)             |

### Before you deploy

- [ ] Replace every `TODO` in `data/portfolio.ts`.
- [ ] Set `profile.resumeUrl` to your CV — drop the file at `public/resume.pdf`
      (or use a hosted URL) to reveal the "Download CV" buttons. It stays `"#"`
      (buttons hidden) until you do.
- [ ] Set `siteConfig.url` to your real production domain (used for canonical + OG URLs).
- [ ] Set `siteConfig.sourceUrl` to this repository (shown in the footer).
- [ ] Bump `siteConfig.copyrightYear` if you redeploy in a new year — the page is
      prerendered, so `new Date()` is intentionally not used for the footer.

### Customizing the look

- Colors, fonts, and radius tokens are CSS variables in
  [`app/globals.css`](app/globals.css) (design tokens defined in `oklch`).
- The accent color is a single token — change `--primary` / `--accent` (and the
  `ring` tokens) to retheme the whole site.
- To change type, swap the `next/font` imports in [`app/layout.tsx`](app/layout.tsx).

## Project structure

```
.
├── app/
│   ├── globals.css          # design tokens, base styles, Tailwind sources
│   ├── layout.tsx           # fonts, theme provider, navbar/footer shell, metadata
│   ├── opengraph-image.tsx  # build-time 1200x630 social card
│   └── page.tsx             # composes the sections + Person JSON-LD
├── components/
│   ├── sections/            # one file per page section (hero, about, ...)
│   ├── site/                # shared shell + UI pieces (navbar, footer, ...)
│   └── ui/                  # shadcn/ui primitives
├── data/
│   └── portfolio.ts         # ← all site content
├── hooks/                   # small client hooks (scroll spy, platform detect)
├── lib/                     # shared utilities (cn, ...)
└── public/                  # static assets (e.g. resume.pdf)
```

## Conventions

- **Content is data.** Components read from `data/portfolio.ts`; keep copy there.
- **Server components by default.** `"use client"` only where interactivity
  requires it (theme toggle, command palette, scroll spy, copy button).
- **Accessible by default.** Semantic landmarks, a skip link, keyboard-operable
  nav and palette, visible focus rings, and `prefers-reduced-motion` guards.
- **Links that look like buttons use `ButtonLink`** (not `Button render={<a/>}`),
  so anchors keep real link semantics.

## Tech stack

Next.js (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 ·
shadcn/ui (Base UI) · `next-themes` · `cmdk` · `lucide-react` · `sonner`
