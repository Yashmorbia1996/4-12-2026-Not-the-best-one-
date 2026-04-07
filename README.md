# Portfolio Starter Template

A production-grade portfolio template for engineers and technical professionals. Built on Astro 5 + React 19 with a Linear-inspired design system, MDX content collections, and full dark/light mode support.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 5](https://astro.build) (static output, Island architecture) |
| UI | [React 19](https://react.dev) + [shadcn/ui](https://ui.shadcn.com) (Radix primitives) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with CSS variable theming |
| Content | [Astro MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/) + Zod-validated collections |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | DM Sans Â· DM Serif Display Â· JetBrains Mono (self-hosted via Fontsource) |
| Scroll | [Lenis](https://lenis.darkroom.engineering) smooth scroll |
| SEO | Astro Sitemap Â· Open Graph Â· Twitter Card Â· canonical URLs |

---

## Features

- **Linear Ash / Midnight theme** â€” Two handcrafted palettes (light + dark) using CSS variables. Theme toggle persists to `localStorage` with FOUC prevention.
- **MDX content collections** â€” Type-safe schemas for Projects, Blog, and Work Experience. Add content by dropping `.mdx` files into the right folder; no component changes needed.
- **Design Evolution timeline** â€” Per-project stepper component with step badges, connecting lines, and image placeholders, ready to swap in real renders.
- **Impact metrics bar** â€” Hero stat cards (e.g., `$4M â†’ $15M`) with a glassmorphic lift, configurable from `site.ts`.
- **Capabilities grid** â€” 2Ã—2 card grid for your four core competencies, icon + title + description.
- **Scroll-reveal animations** â€” Sections animate in on scroll using `IntersectionObserver`. Respects `prefers-reduced-motion`.
- **Fully responsive** â€” Mobile-first layouts. Navigation collapses to a slide-out Sheet on small screens. TOC sidebar and avatar column appear at `md`/`xl` breakpoints.
- **Accessible** â€” Semantic HTML, visible focus rings, ARIA labels on icon-only buttons, 4.5:1+ contrast ratios for body text.

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/your-username/portfolio-starter-template.git
cd portfolio-starter-template

# 2. Install
npm install        # or pnpm install / yarn

# 3. Dev server
npm run dev        # â†’ http://localhost:4321
```

---

## Project Structure

```
.
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ images/
â”‚   â”‚   â”œâ”€â”€ avatar.svg              # Your profile photo
â”‚   â”‚   â”œâ”€â”€ og.jpg                  # Open Graph image (1200Ã—630)
â”‚   â”‚   â””â”€â”€ projects/               # Project cover images
â”‚   â””â”€â”€ robots.txt
â”‚
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ layout/
â”‚   â”‚   â”‚   â”œâ”€â”€ Header.tsx          # Fixed nav + theme toggle
â”‚   â”‚   â”‚   â”œâ”€â”€ Footer.tsx
â”‚   â”‚   â”‚   â””â”€â”€ Section.tsx         # Labeled section wrapper
â”‚   â”‚   â”œâ”€â”€ ui/                     # shadcn/ui primitives (badge, button, cardâ€¦)
â”‚   â”‚   â”œâ”€â”€ Hero.tsx                # Headline, sub-copy, CTAs, stat cards
â”‚   â”‚   â”œâ”€â”€ CapabilitiesGrid.tsx    # Four-card competency grid
â”‚   â”‚   â”œâ”€â”€ FeaturedProjects.tsx    # Up to 3 featured projects on home
â”‚   â”‚   â”œâ”€â”€ ProjectCard.tsx         # Reusable project card
â”‚   â”‚   â”œâ”€â”€ EvolutionTimeline.tsx   # Per-project design evolution stepper
â”‚   â”‚   â”œâ”€â”€ ExperienceTimeline.tsx  # Work history on About page
â”‚   â”‚   â”œâ”€â”€ SkillsGrid.tsx          # Skills pills on About page
â”‚   â”‚   â”œâ”€â”€ AboutSection.tsx        # About preview on Home
â”‚   â”‚   â”œâ”€â”€ NextSection.tsx         # CTA / "what I want next"
â”‚   â”‚   â”œâ”€â”€ BlogPostCard.tsx
â”‚   â”‚   â”œâ”€â”€ LatestPosts.tsx
â”‚   â”‚   â”œâ”€â”€ ThemeProvider.tsx
â”‚   â”‚   â””â”€â”€ ThemeToggle.tsx
â”‚   â”‚
â”‚   â”œâ”€â”€ content/
â”‚   â”‚   â”œâ”€â”€ projects/               # *.mdx â€” one file per project
â”‚   â”‚   â”œâ”€â”€ blog/                   # *.mdx â€” one file per post
â”‚   â”‚   â”œâ”€â”€ work/                   # *.mdx â€” one file per role
â”‚   â”‚   â””â”€â”€ config.ts               # Zod schemas for all three collections
â”‚   â”‚
â”‚   â”œâ”€â”€ layouts/
â”‚   â”‚   â””â”€â”€ BaseLayout.astro        # HTML shell: head, header, footer, theme script
â”‚   â”‚
â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ index.astro             # /
â”‚   â”‚   â”œâ”€â”€ about.astro             # /about
â”‚   â”‚   â”œâ”€â”€ 404.astro
â”‚   â”‚   â”œâ”€â”€ projects/
â”‚   â”‚   â”‚   â”œâ”€â”€ index.astro         # /projects
â”‚   â”‚   â”‚   â””â”€â”€ [slug].astro        # /projects/:slug
â”‚   â”‚   â””â”€â”€ blog/
â”‚   â”‚       â”œâ”€â”€ index.astro         # /blog
â”‚   â”‚       â””â”€â”€ [slug].astro        # /blog/:slug
â”‚   â”‚
â”‚   â”œâ”€â”€ config/
â”‚   â”‚   â””â”€â”€ site.ts                 # â† Start here. Name, role, bio, socials, skills.
â”‚   â”‚
â”‚   â”œâ”€â”€ lib/
â”‚   â”‚   â””â”€â”€ utils.ts                # cn() helper
â”‚   â”‚
â”‚   â””â”€â”€ styles/
â”‚       â””â”€â”€ globals.css             # Tailwind @theme, color tokens, fonts, animations
â”‚
â”œâ”€â”€ astro.config.mjs
â”œâ”€â”€ components.json                 # shadcn/ui config
â””â”€â”€ tsconfig.json
```

---

## Customization Guide

### 1. Personal info

Everything starts in `src/config/site.ts`:

```ts
export const siteConfig = {
  name:     "Jane Smith",
  role:     "Principal Mechanical Engineer",
  bio:      "15 years designing FDA-cleared electromechanical systems...",
  avatar:   "/images/avatar.jpg",
  location: "Boston, MA",

  url:         "https://janesmith.dev",
  description: "Portfolio of Jane Smith â€” precision hardware from concept to production.",
  ogImage:     "/images/og.jpg",

  social: {
    github:   "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
    twitter:  "https://twitter.com/janesmith",
    email:    "jane@example.com",
  },

  skills: ["SolidWorks", "GD&T", "DFM", "Thermal Analysis", "ISO 13485"],
};
```

### 2. Add a project

Create `src/content/projects/my-project.mdx`:

```mdx
---
title: "Press Test Fixture"
summary: "Designed a precision press-fit fixture that cut defect escapes from 4.2% to 0.3%."
date: 2024-03-01
featured: true
cover: "/images/projects/press-fixture.jpg"
tags: ["SolidWorks", "GD&T", "DFM"]
liveUrl: "https://example.com"       # optional
repoUrl: "https://github.com/..."    # optional
duration: "3 months"                 # optional
---

## Overview
...

## Problem
...

## Approach
...

## Outcome
- Defect escape rate: 4.2% â†’ 0.3%
- Inspection cycle time: âˆ’55%
```

Set `featured: true` on up to 3 projects â€” they appear in the **Featured Work** section on the home page.

**Project frontmatter schema:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | âœ… | |
| `summary` | string â‰¤ 300 chars | âœ… | Used in cards and meta |
| `date` | date | âœ… | ISO 8601 or `YYYY-MM-DD` |
| `cover` | string | âœ… | Path under `public/` |
| `tags` | string[] (min 1) | âœ… | Rendered as pills |
| `featured` | boolean | â€” | Default: `false` |
| `liveUrl` | URL | â€” | |
| `repoUrl` | URL | â€” | |
| `duration` | string | â€” | e.g., `"6 months"` |

### 3. Add a work experience entry

Create `src/content/work/acme-corp.mdx`:

```mdx
---
company: "Acme Medical"
role: "Senior Mechanical Engineer"
startDate: "Jan 2021"
endDate: "Dec 2023"      # omit if current
current: false
order: 1                 # lower = higher in the list
description: "Led mechanical design for a Class II electromechanical analyzer."
achievements:
  - "Scaled production from 500 to 1,500 units/week"
  - "8 FDA audits with zero major findings"`r`n  - "Reduced BOM cost by 18% through DFM review"
---
```

**Work frontmatter schema:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `company` | string | âœ… | |
| `role` | string | âœ… | |
| `startDate` | string | âœ… | e.g., `"Jan 2021"` |
| `endDate` | string | â€” | Omit if current |
| `current` | boolean | â€” | Default: `false` |
| `description` | string | âœ… | One-sentence summary |
| `achievements` | string[] | âœ… | Bullet points |
| `order` | number | â€” | Controls sort order |

### 4. Add a blog post

Create `src/content/blog/tolerance-stacks.mdx`:

```mdx
---
title: "Tolerance Stacks in 15 Minutes"
summary: "A practical guide to 1D worst-case and RSS tolerance analysis."
date: 2024-01-10
tags: ["GD&T", "Manufacturing"]
featured: false
cover: "/images/blog/tolerance-stacks.jpg"   # optional
---

Your MDX content here...
```

### 5. Customize the theme

Colors live in `src/styles/globals.css` under `@theme` (light) and `.dark` (dark):

```css
@theme {
  --color-background:     #F4F5F8;   /* page background */
  --color-foreground:     #1A1A21;   /* primary text */
  --color-primary-accent: #5E6AD2;   /* Linear indigo â€” buttons, links, highlights */
  --color-card:           #FFFFFF;
  --color-muted-foreground: #8A8F98; /* secondary text */
  /* ... */
}

.dark {
  --color-background:     #08090A;
  --color-foreground:     #F4F5F8;
  /* ... */
}
```

Change `--color-primary-accent` to swap the entire accent color across buttons, badges, and highlights in one edit.

> **Note:** This project uses Tailwind CSS v4 with class-based dark mode. The `@variant dark (&:is(.dark *))` directive in `globals.css` binds `dark:` utilities to the `.dark` class managed by the theme toggle â€” not to the OS `prefers-color-scheme` setting.

### 6. Update the Design Evolution timeline

The `EvolutionTimeline` component accepts a `steps` prop so each project can define its own evolution. Pass steps from the project's `[slug].astro` page:

```tsx
<EvolutionTimeline steps={[
  {
    number: 1,
    phase: "Concept",
    decision: "Define form factor from user needs",
    description: "Initial requirements gathered from clinical stakeholders...",
    imageSrc: "/images/projects/concept-sketch.jpg",
    imageAlt: "Concept sketches and initial CAD layout",
  },
  // ...
]} />
```

If no `steps` prop is passed, the component uses built-in default steps.

---

## Scripts

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build static output to dist/
npm run preview   # Serve the dist/ build locally
```

---

## Deployment

The output is a fully static site in `dist/`. Deploy to any static host:

**Vercel** â€” Import the repo, framework preset: **Astro**. Zero config needed.

**Netlify** â€” Build command: `npm run build` Â· Publish directory: `dist`

**GitHub Pages** â€” Add `base` to `astro.config.mjs` if hosting at a sub-path, then deploy `dist/` to the `gh-pages` branch.

Before deploying, update two values:

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://your-domain.com',   // â† your real URL
  // ...
});
```

```ts
// src/config/site.ts
url: "https://your-domain.com",
```

These values power the sitemap and canonical URLs.

---

## Adding Images

| Type | Location | Recommended size |
|---|---|---|
| Avatar | `public/images/avatar.jpg` | 400Ã—400px |
| Open Graph | `public/images/og.jpg` | 1200Ã—630px |
| Project covers | `public/images/projects/*.jpg` | 1200Ã—675px (16:9) |
| Blog covers | `public/images/blog/*.jpg` | 1200Ã—675px (16:9) |

---

## Included Example Content

The repo ships with placeholder content you can replace or delete:

- **Projects** â€” Press Test Fixture, LIV Optical Test Rig, Thermal Redesign Journey (all featured), plus Analytics Dashboard and Design System Rebuild (not featured)
- **Blog** â€” "Getting Started with Astro"
- **Work** â€” Acme Corp, Startup Inc

---

## License

MIT â€” use it, fork it, ship it.

