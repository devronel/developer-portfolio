---
name: portfolio-ui
description: Build and refine a professional, developer-themed portfolio UI with shadcn/ui, Tailwind CSS and React/Next.js. Use whenever the user mentions their portfolio, personal website, landing page, hero, projects section, about page, resume page, or wants a UI that looks like a programmer's site (terminal, IDE, code-inspired, dark mode), even if they do not say "shadcn".
license: MIT
compatibility: opencode
metadata:
  stack: nextjs, react, tailwindcss, shadcn-ui, typescript
  audience: developers
---

# Portfolio UI with shadcn/ui (Programmer Aesthetic)

Build a portfolio that looks like it was made by an engineer who cares about craft:
clean, fast, dark-first, monospace accents, restrained motion. The goal is
**professional first, "developer vibe" second**. Hiring managers should read it in
30 seconds; fellow devs should smile at the details.

## When to use this skill

- Creating a new portfolio or restyling an existing one.
- Adding or changing any section: hero, about, skills, projects, experience, blog, contact, footer, navbar.
- The user asks to look "professional", "like a programmer", "techy", "terminal-style", or "clean".

## Step 0: Inspect before writing

1. Read `package.json`, `components.json`, `tailwind.config.*`, `app/globals.css` (or `src/`).
2. Detect: Next.js (App Router vs Pages), Vite + React, Tailwind v3 vs v4, TypeScript, package manager (lockfile).
3. If shadcn is not initialised, run `npx shadcn@latest init` (use the detected package manager equivalent). Choose **New York** style, **neutral** or **zinc** base color, CSS variables enabled.
4. Never overwrite the user's existing content, copy or routes without asking. Extend instead.
5. Ask once for missing real data (name, role, links, 3-6 projects). If not provided, use clearly marked placeholders in a single `data/portfolio.ts` file so content is easy to swap.

## Install only what is needed

```bash
npx shadcn@latest add button badge card separator tabs tooltip \
  command dialog sheet scroll-area avatar input textarea sonner \
  navigation-menu hover-card skeleton
```

Add extras only when a section requires them. Do not install the whole registry.

## Design system

### Mood
Dark-first IDE feel (think VS Code / GitHub / Vercel / Linear). Light theme is supported but dark is default.

### Typography
- Headings and body: **Geist Sans** or **Inter** (`next/font`).
- Accents (labels, tags, nav, code, section numbers, timestamps): **Geist Mono** or **JetBrains Mono**.
- Rule: **mono for metadata, sans for reading.** Never set long paragraphs in mono.
- Tight tracking on large headings (`tracking-tight`), `text-balance` on titles, `text-pretty` on paragraphs.

### Colour tokens (edit `globals.css`, never hardcode hex in components)
Use shadcn CSS variables. Suggested dark palette (HSL or oklch equivalent):

| Token | Value idea |
|---|---|
| `--background` | near-black, slightly cool (`#0a0a0b`) |
| `--card` | one step lighter (`#111113`) |
| `--border` | very subtle (`#1f1f23`) |
| `--muted-foreground` | `#8b8b94` |
| `--primary` | one accent only: emerald `#22c55e`, cyan `#06b6d4`, or violet `#8b5cf6` |

Rules:
- **One accent colour.** Use it for links, focus rings, active nav, the cursor, and small highlights.
- Contrast must meet WCAG AA (4.5:1 body text).
- Use `bg-background`, `text-muted-foreground`, `border-border` etc., not raw Tailwind colours.

### Layout
- Container: `mx-auto max-w-5xl px-6` (max-w-6xl for project grids).
- Section spacing: `py-20 md:py-28`.
- 8-pt spacing rhythm; consistent `rounded-lg` (match `--radius`).
- Borders over shadows. Cards are `border bg-card` with hover `border-primary/40`.
- Optional subtle background: faint grid or dot pattern using CSS (`bg-[radial-gradient(...)]`) masked with a fade. Keep opacity under 10%.

## Signature "programmer" details (use tastefully, 3-5 total, not all)

1. **Terminal-style hero**: small prompt line `~/portfolio $ whoami`, then name as H1, role, short pitch.
2. **Blinking cursor** after the tagline (CSS animation, disabled under `prefers-reduced-motion`).
3. **Command palette** (`⌘K` / `Ctrl+K`) using shadcn `Command` + `Dialog`: jump to sections, open GitHub, copy email, toggle theme.
4. **Section labels as comments or paths**: `// 01. projects`, `~/experience`, `/contact`.
5. **About as code**: render a typed object in a styled code block:
   ```ts
   const dev = {
     name: "Your Name",
     role: "Full-Stack Engineer",
     stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
     openToWork: true,
   } as const;
   ```
   Add a visually-hidden plain-text version for screen readers/SEO if the code block carries key info.
6. **Experience as a git log**: vertical timeline with short mono "hash" markers, dates, and role/company.
7. **Tech badges** using shadcn `Badge variant="secondary"` with `font-mono text-xs`.
8. **Status pill** in navbar or hero: green dot + "Available for work" (`animate-pulse` on the dot only).
9. **Window chrome** on project previews: three small dots + filename in a card header.
10. **Footer**: `© 2026 Name · built with Next.js & shadcn/ui` plus link to source repo.

Avoid: matrix rain, heavy glitch effects, fake hacker text walls, neon gradients everywhere, autoplaying sound, giant parallax. They look amateur.

## Section blueprints

### Navbar
- Sticky, `backdrop-blur`, `border-b`, height 56-64px.
- Left: mono logo like `<YourName />` or `yn@dev`.
- Center/right: section links (anchor scroll with `scroll-smooth` and `scroll-mt-20` on sections), theme toggle, `⌘K` hint button (`Button variant="outline"` with `kbd`).
- Mobile: shadcn `Sheet` menu.

### Hero
- Prompt line (mono, muted), H1 name (`text-4xl md:text-6xl font-semibold tracking-tight`), role line, 1-2 sentence value pitch.
- CTAs: primary `Button` "View projects", outline `Button` "Download CV" / "Contact".
- Icon links (GitHub, LinkedIn, Email) with `Tooltip`. Use `lucide-react`.
- Optional right column: small code card or terminal card, not a stock illustration.

### About
- Two columns on desktop: prose left, code-object card right.
- 2-3 short paragraphs. Concrete outcomes beat adjectives ("cut API latency 40%").
- Avatar optional; if used, `Avatar` with border ring in accent colour.

### Skills
- Group by category (Languages, Frontend, Backend, Data/DevOps, Tools) in a grid of `Card`s, or `Tabs`.
- Badges only. **No percentage bars or star ratings** (meaningless and unprofessional).

### Projects (most important section)
- Grid `md:grid-cols-2`, 3-6 projects. Featured project may span full width.
- Each `Card`: title, one-line problem/impact, tech `Badge`s, links (Live, GitHub) using `Button variant="ghost" size="sm"` with icons.
- Optional screenshot in a window-chrome frame (`next/image`, fixed aspect ratio, `loading="lazy"`, meaningful `alt`).
- Hover: border colour shift + 2px translate-y. Whole card focusable if clickable.
- Content formula: **What it is, why it matters, how it's built, result.**

### Experience
- Git-log style timeline: left rail line (`border-l`), dot markers, mono dates, role + company, 2-3 bullet outcomes.

### Blog / Writing (optional)
- Simple list rows: date (mono) + title + reading time. No heavy cards.

### Contact
- Short pitch, email copy-to-clipboard button with `sonner` toast ("Copied email"), social links.
- If a form is requested: shadcn `Input`, `Textarea`, `Button`; validate with `react-hook-form` + `zod`; handle loading/error/success states; add honeypot field. Never fake submission success.

## Motion

- Subtle only: fade/slide-up on scroll (`framer-motion` or CSS), 150-300ms, `ease-out`.
- Stagger lists by 40-60ms max.
- Wrap in `prefers-reduced-motion` guard (`motion-safe:` Tailwind variants or `useReducedMotion`).
- No layout shift from animations.

## Code quality requirements

- TypeScript, strict. No `any`.
- Content in `data/portfolio.ts` (typed). Components are presentational.
- Structure:
  ```
  app/
    layout.tsx        # fonts, ThemeProvider, metadata
    page.tsx          # composes sections
    globals.css       # tokens
  components/
    ui/               # shadcn generated (do not hand-edit unless necessary)
    sections/         # hero.tsx, about.tsx, projects.tsx, ...
    site/             # navbar.tsx, footer.tsx, command-menu.tsx, theme-toggle.tsx
  data/portfolio.ts
  lib/utils.ts
  ```
- Use `cn()` for conditional classes. Prefer composition of shadcn primitives over custom CSS.
- Server components by default; add `"use client"` only for interactivity (command menu, theme toggle, animations).
- Theme via `next-themes` with `attribute="class"`, `defaultTheme="dark"`, `suppressHydrationWarning` on `<html>`.

## Accessibility and performance checklist

- [ ] Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`.
- [ ] One `h1`; headings in order.
- [ ] Visible focus ring (`focus-visible:ring-2 ring-ring`).
- [ ] Icon-only buttons have `aria-label`.
- [ ] Keyboard: command palette opens with `⌘K`/`Ctrl+K`, closes with `Esc`, focus is trapped in dialogs.
- [ ] Skip-to-content link.
- [ ] Images: `next/image`, explicit sizes, `alt`.
- [ ] Fonts via `next/font` with `display: swap`.
- [ ] Metadata: title, description, Open Graph image, `favicon`, `theme-color`.
- [ ] Lighthouse target: 95+ across Performance, Accessibility, Best Practices, SEO.
- [ ] Responsive at 360, 768, 1024, 1440px. No horizontal scroll.

## Workflow

1. **Inspect** the repo (Step 0) and state the detected stack in one line.
2. **Plan** briefly: list sections and the 3-5 signature details chosen.
3. **Set up** tokens, fonts, theme provider, and install shadcn components.
4. **Build** data file, then layout, navbar/footer, then sections top to bottom.
5. **Polish**: hover/focus states, empty states, mobile nav, motion guards.
6. **Verify**: run the type check, lint and build (`pnpm lint && pnpm build` or equivalent). Fix errors before reporting done. If a dev server is available, check the page at mobile and desktop widths.
7. **Report**: summarise files changed, how to edit content (`data/portfolio.ts`), and any placeholders still to replace.

## Copywriting rules

- First person, confident, concrete. Lead with what you build and for whom.
- Quantify results where real numbers exist; never invent metrics. Mark unknowns as `TODO`.
- No clichés ("passionate", "ninja", "rockstar", "guru").
- Keep the hero pitch under 30 words.

## Common mistakes to avoid

- Mixing multiple accent colours or gradients on everything.
- Hardcoded colours instead of theme tokens.
- Editing `components/ui/*` heavily instead of wrapping them.
- Skill-percentage bars, stock illustrations, lorem ipsum left in place.
- Huge client bundles from importing entire icon or animation libraries.
- Dark theme only tested; check light theme contrast too.
- Terminal gimmicks that hurt readability or accessibility.