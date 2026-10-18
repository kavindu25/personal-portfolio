# Kavindu de Alwis: portfolio

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit the content

All copy lives in `app/data/`, not in components:

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, headline, summary, job-search status, links, Medium handle, hero trace rows |
| `experience.ts` | Employers, roles and highlights |
| `projects.ts` | Case studies (`professional`) and side projects (`personal`) |
| `capabilities.ts` | Skills, grouped by what they solve |
| `education.ts` | Education |

Placeholders are marked `[TODO ...]`. List what is left with `npm run todos`.

## Contact form

`app/api/send/route.ts` sends mail through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. Without a key the form tells visitors to email directly.

## Theme

Colours are CSS variables in `app/globals.css`. Light is the default, dark follows the OS, and the toggle in the nav stores the visitor's choice.

Text has three tones, strongest to quietest: `--ink` (titles, key facts), `--ink-2` (running text, bullets) and `--ink-soft` (dates, labels, chips, nested bullets). Use `text-ink`, `text-ink-2`, `text-ink-soft`.

## Typography

Typefaces are chosen in one place: `app/fonts.ts`. It declares a heading face (Funnel Display), a text face (Atkinson Hyperlegible Next) and a mono face (Atkinson Hyperlegible Mono). To change one, swap its `next/font/google` import and call there; the CSS variable names stay the same, so no component changes.

Sizes come from named roles in `app/globals.css` (`text-display`, `text-title`, `text-heading`, `text-lead`, `text-body`, `text-small`, `text-meta`, `text-micro`) rather than arbitrary values. Nested bullets use the `.bullets` class so a sub-bullet is always one tone and size quieter than its parent.
