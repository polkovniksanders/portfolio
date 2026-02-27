# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 8080 with Turbopack
npm run build    # Production build
npm run lint     # ESLint (next/core-web-vitals + prettier)
```

No test suite is configured.

## Architecture

Single-page portfolio app built with Next.js 15 (App Router). The entire site renders as one scrollable page with smooth scroll navigation. Follows **Feature-Sliced Design (FSD)** conventions.

**Directory structure** (`src/`):
```
src/
  app/               ← Next.js App Router (layout.tsx, page.tsx, globals.css, Providers.tsx)
  widgets/           ← Large independent page blocks
    navbar/ui/Navbar.tsx          — fixed nav with active-section highlight
    hero/ui/HeroSection.tsx       — landing hero (Client Component)
    skills/ui/SkillsSection.tsx   + model/data.ts
    projects/ui/ProjectsSection.tsx + ProjectCard.tsx  + model/data.ts + model/types.ts
    technologies/ui/TechnologiesSection.tsx  + model/data.ts
    faq/ui/FaqSection.tsx         + model/data.ts
  shared/            ← Reusable atomic pieces
    ui/              ← Section, Card, Button, IconWithText, SectionTitle, BlockTitle, Text, index.ts
    hooks/           ← useActiveSection, useScrollToSection
    config/          ← navigation.ts (NAV_ITEMS, SECTION_IDS), contacts.ts (TELEGRAM_URL)
```

Each widget folder has a barrel `index.ts`. `app/page.tsx` imports all widgets directly (no `next/dynamic`).

**Navigation** is driven by DOM `id` attributes. `NAV_ITEMS` in `shared/config/navigation.ts` is the single source of truth for nav labels and section IDs. `useActiveSection` (IntersectionObserver) highlights the active item; `useScrollToSection` smooth-scrolls on click. Adding a new section: add entry to `NAV_ITEMS`, create a new widget, render it in `app/page.tsx`.

**Content** — all portfolio data lives in `model/data.ts` files co-located with each widget. Edit those files to update content without touching component logic.

**Shared UI** (`src/shared/ui/`):
- `Section` — base wrapper with consistent padding; every section uses it with the section's `id` prop.
- `Button` — unified button with `variant: 'primary' | 'outline'`.
- `SectionTitle`, `BlockTitle`, `Text` — consistent type scale.
- `Card`, `IconWithText` — reusable card and icon+label primitives.

**Styling** — Tailwind CSS v4 (PostCSS plugin). Theme tokens defined via `@theme inline` in `globals.css`. `clsx` for conditional class merging.

**Path alias** — `@/` maps to `src/` (configured in `tsconfig.json`).

**Config** — `src/shared/config/contacts.ts` exports `TELEGRAM_URL` used for the contact link.
