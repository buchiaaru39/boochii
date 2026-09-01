# A Little Piece of Us

A private, password-protected digital memory world — a personal gift site with a timeline, photo gallery, songs, videos, and "open when..." letters.

## Tech

- [TanStack Start](https://tanstack.com/start) (React) + Vite
- Tailwind CSS v4
- Framer Motion for animations
- Deployed on Netlify

## Editing content (no coding required)

Everything you'd want to change — the passcode, timeline memories, photo captions, songs, videos, and letters — lives in one file:

```
src/data/content.ts
```

Open it, change the text between the quotes, save. To add real photos or videos, drop the files into `public/photos` or `public/videos` and reference them by filename in `content.ts` (see the comments in that file for the exact format).

## Running locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000 and enter the passcode set in `src/data/content.ts`.

## Deploying

The project deploys as-is on Netlify (`vite build`, publish directory `dist/client`).
