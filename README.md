# Magical Constructions — Website Documentation

Premium residential builder website for **Magical Constructions**, Sydney.
Built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

---

## Quick Start (Development)

```bash
cd "Example Website"
npm install
npm run dev
```

Site runs at → **http://localhost:5173**

---

## How to Add or Swap Photos

All photos live in one folder: **`public/images/`**

Simply replace any file with a new photo of the same name — no code changes needed.

| Filename | Used in |
|---|---|
| `hero-bg.jpg` | Hero section full-screen background |
| `service-decking-composite.jpg` | Services card — Composite Decking |
| `service-decking-hardwood.jpg` | Services card — Hardwood Decking |
| `service-cladding.jpg` | Services card — Aluminium Cladding & Facades |
| `service-interior.jpg` | Services card — Interior Renovations |
| `service-alfresco.jpg` | Services card — Alfresco Kitchens |
| `service-builds.jpg` | Services card — Full Builds & Renovations |
| `why-us.jpg` | Why Us split section (left image) |
| `gallery-01.jpg` … `gallery-12.jpg` | Gallery grid (12 project photos) |

**To swap a photo:** Drop the new file into `public/images/` with the exact same filename. The browser will pick it up immediately (no rebuild needed in dev, automatic in production).

**To add more gallery photos:** Edit `src/components/Gallery.tsx` — add a new entry to the `items` array with the image filename, project name, suburb, and category.

---

## How to Update Copy (Text Content)

| What you want to change | File to edit |
|---|---|
| Hero headline & subtext | `src/components/Hero.tsx` |
| Stats (project count, years, etc.) | `src/components/StatsBar.tsx` — edit the `stats` array |
| Service names & descriptions | `src/components/Services.tsx` — edit the `services` array |
| Process steps | `src/components/ProcessSteps.tsx` — edit the `steps` array |
| Why Us bullet points | `src/components/WhyUs.tsx` — edit the `items` array |
| Gallery project names & suburbs | `src/components/Gallery.tsx` — edit the `items` array |
| Testimonials | `src/components/Testimonials.tsx` — edit the `testimonials` array |
| Footer contact details / Instagram | `src/components/Footer.tsx` |
| Nav links | `src/components/Nav.tsx` |
| Marquee ticker text | `src/components/MarqueeTicker.tsx` |

---

## How to Update Colours or Design Tokens

All design tokens are defined in **two places** (keep them in sync):

1. **`tailwind.config.js`** — Tailwind utility classes
2. **`src/index.css`** — CSS custom properties (`:root` block)

The current palette:

| Token | Hex | Used for |
|---|---|---|
| `bg` | `#0D0B09` | Page background |
| `surface` | `#131109` | Cards, inputs |
| `surface-elevated` | `#1A1710` | Elevated surfaces |
| `gold` | `#C2A87A` | Primary accent (buttons, lines, MC logo) |
| `gold-hover` | `#D4B888` | Gold hover state |
| `text-primary` | `#F2EDE6` | Headings, body copy |
| `text-secondary` | `#9A9285` | Subtext, labels |
| `text-muted` | `#5A5248` | Placeholder, footer |
| `stone` | `#8A7A6A` | Section labels (WHAT WE BUILD etc.) |

---

## File Structure

```
src/
  components/
    Nav.tsx           ← Sticky nav, transparent → frosted on scroll
    Hero.tsx          ← Full-viewport hero with bg image
    StatsBar.tsx      ← 4 animated counter stats
    Services.tsx      ← 3×2 grid of service cards with hover
    ProcessSteps.tsx  ← 4-step horizontal process
    WhyUs.tsx         ← Split image + checklist section
    Gallery.tsx       ← Filterable 3-col photo grid
    QuoteForm.tsx     ← 3-step quote form with validation
    Testimonials.tsx  ← Auto-scrolling testimonial carousel
    MarqueeTicker.tsx ← Infinite scrolling services ticker
    Footer.tsx        ← 3-col footer with links + contact
  App.tsx             ← Assembles all components
  main.tsx            ← React entry point
  index.css           ← Global styles, fonts, CSS variables

public/
  images/             ← ALL photos go here
tailwind.config.js    ← Design tokens + Tailwind config
```

---

## Deploy to Netlify

### Option 1 — Drag & Drop (one-time)

```bash
npm run build          # creates /dist folder
```

Then drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

### Option 2 — Netlify CLI (recommended)

```bash
npm install -g netlify-cli
npm run build
netlify deploy --dir=dist --prod
```

First deploy will ask you to log in and create a site. After that, every deploy is one command.

### Option 3 — Connect GitHub (auto-deploy on push)

1. Push the project to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → New site from Git
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Every push to `main` auto-deploys

---

## Production Build

```bash
npm run build        # outputs to /dist
npm run preview      # locally preview the production build
```

TypeScript check:
```bash
npx tsc --noEmit
```

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility CSS |
| Framer Motion | Latest | Scroll animations |
| Lucide React | Latest | Icons |
| React Hook Form | Latest | Quote form validation |

---

## Contact & Instagram

- Instagram: [@magicalconstructions](https://www.instagram.com/magicalconstructions/)
- Email: hello@magicalconstructions.com.au
- Location: Sydney, NSW

---

*© 2026 Magical Constructions. All rights reserved.*
