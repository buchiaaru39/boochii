# AGENTS.md

Overview of this project for future AI agents / developers.

## Project Overview

A private, single-page "digital memory world" gifted to a partner. It sits behind a passcode gate and presents a hero, a timeline ("Our Story"), a photo gallery, a songs section (Spotify embeds), a videos section, "open when..." letters, and a closing section. Built with TanStack Start, deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (custom CSS variables for the plum/champagne palette in `src/styles.css`) |
| Animation | Framer Motion |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── photos/          # Real photo files go here (referenced from content.ts)
│   └── videos/          # Real video files go here (referenced from content.ts)
├── src
│   ├── components
│   │   ├── PasswordGate.tsx    # Passcode screen; unlocks via sessionStorage
│   │   ├── Hero.tsx            # Home screen: glowing heart, intro copy, CTA
│   │   ├── Nav.tsx             # Sticky in-page section nav
│   │   ├── Story.tsx           # Timeline + live "days together" counter
│   │   ├── Photos.tsx          # Cinematic gallery with full-screen viewer
│   │   ├── Songs.tsx           # Spotify embed cards
│   │   ├── Videos.tsx          # "Little Moments" video cards
│   │   ├── Letters.tsx         # "Open when..." letter cards + modal reveal
│   │   ├── Ending.tsx          # Closing section
│   │   ├── GlowHeart.tsx       # Reusable glowing heart SVG
│   │   └── FloatingParticles.tsx  # Decorative floating hearts/dots
│   ├── data
│   │   └── content.ts   # SINGLE SOURCE OF TRUTH for all editable content (passcode,
│   │                     timeline, photos, songs, videos, letters). Non-technical edits
│   │                     should only ever touch this file.
│   ├── routes
│   │   ├── __root.tsx   # Root layout, page <head> metadata (noindex — private site)
│   │   └── index.tsx    # The single page; assembles all sections behind PasswordGate
│   ├── router.tsx
│   └── styles.css       # Fonts (Cormorant Garamond + Inter), color variables, keyframes
├── netlify.toml
├── tsconfig.json         # `@/*` alias → `src/*`
└── vite.config.ts
```

## Key Concepts

### Content model

All user-facing text/data lives in `src/data/content.ts`, typed and commented so it can be edited without touching component code. Photos/videos default to `src: null`, which renders a styled placeholder tile instead of a broken image — components must keep handling the `null` case rather than assuming real media is present.

### Password gate

`PasswordGate` compares user input against `SITE_PASSCODE` (plaintext, in `content.ts`) and stores an unlocked flag in `sessionStorage`. This is a lightweight privacy gate for a personal gift, not a security boundary — do not upgrade it to hold sensitive data without revisiting the approach.

### Routing

Single route (`/`). All sections render on one scrolling page; `Nav` links to in-page anchors (`#story`, `#photos`, etc.) rather than separate routes.

## Conventions

- Components: PascalCase, one section per file in `src/components/`.
- Import paths use the `@/` alias.
- Styling: Tailwind utility classes plus the CSS custom properties defined in `styles.css` (`var(--plum)`, `var(--champagne)`, etc.) — keep new UI within that palette rather than introducing new colors.
- Framer Motion `whileInView` is used for scroll-triggered reveals; keep durations slow (0.6s+) to match the intended calm, cinematic feel.

## Development Commands

```bash
pnpm dev      # Start dev server (vite dev --port 3000)
pnpm build    # Production build
```
