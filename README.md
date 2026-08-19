# USA Web App Coder — Homepage Build

A single, fully responsive, SEO-optimized homepage for **USA Web App Coder** — a US-based web design, app development, and digital marketing agency.

## 🎯 Project Overview

This is a design/development test submission demonstrating:
- Design skill & UI/UX judgment
- Front-end engineering quality (Next.js 14+, TypeScript, Tailwind CSS)
- Content structuring & conversion-focused thinking
- SEO implementation (metadata, Open Graph, JSON-LD, sitemap, robots.txt)
- Performance & accessibility best practices

---

## 🛠 Tech Stack

| Category | Tools/Libraries |
|----------|-----------------|
| Framework | **Next.js 16.3.1** (App Router, TypeScript) |
| Styling | **Tailwind CSS v4** (custom theme with brand tokens) |
| Fonts | **Sora** (headings) + **Inter** (body) via `next/font/google` |
| Icons | **lucide-react** v0.400+ |
| Animation | **framer-motion** (installed, ready for scroll-reveal) |
| Images | **next/image** (all images optimized) |
| SEO | Next.js Metadata API, JSON-LD (ProfessionalService schema) |
| Deployment | Vercel-compatible static export |

**No CMS, database, or backend** — content lives in typed data files under `src/lib/data/`.

---

## 🎨 Design Decisions

### Color Palette (Tailwind Theme)

```ts
// tailwind.config.ts
colors: {
  navy: { 950: '#0A1B33', 900: '#0F2748', 700: '#1E3A66', 500: '#3A5A8C', 100: '#E7ECF5' },
  red:  { 700: '#A3121F', 600: '#D62839', 100: '#FBE1E4' },
  white: '#FFFFFF',
  gray: { 900: '#1A1D23', 600: '#5B6472', 200: '#E4E7EC', 50: '#F7F8FA' },
}
```

**Usage Rules:**
- White and pale navy/gray alternate as section backgrounds (never two identical backgrounds in a row)
- Navy-900 = default heading/nav/footer color
- Red-600 = CTAs, key highlights, small accents only (never large background fills)
- WCAG AA contrast verified for all text/background combinations

### Typography

- **Headings:** Sora (600–700 weight) — modern, geometric, confident
- **Body:** Inter (400/500/600) — high readability at small sizes
- **Scale (mobile → desktop):**
  - H1: `text-4xl → text-6xl`
  - H2: `text-3xl → text-4xl`
  - H3: `text-xl → text-2xl`
  - Body: `text-base → text-lg`
- Loaded via `next/font/google` — self-hosted, no CLS/FOUC

### Logo / Wordmark

Built as a **text-based component** (`src/components/ui/Logo.tsx`) — no image file needed:
- "USA" in **Red-600** (`--color-red-600`)
- "Web App Coder" in **Navy-900** (`--color-navy-900`)
- Consistent across Header, Footer, and favicon fallback
- Trivial to swap for a real logo file later

---

## 📁 Project Structure

```
usa-web-app-coder/
├── CLAUDE.md                 # Single source of truth (this project's spec)
├── README.md                 # This file
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.ico
│   ├── og-image.png          # 1200x630 social preview
│   └── images/
│       ├── portfolio/        # 6 SVG placeholder project images
│       └── testimonials/     # 3 SVG avatar placeholders
└── src/
    ├── app/
    │   ├── layout.tsx        # Root layout, fonts, metadata, JSON-LD
    │   ├── page.tsx          # Composes all 10 sections in order
    │   ├── globals.css       # CSS variables, base styles, utilities
    │   ├── sitemap.ts        # Auto-generated sitemap.xml
    │   └── robots.ts         # robots.txt
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx    # Sticky nav, logo, mobile menu, CTA
    │   │   └── Footer.tsx    # 4-column footer
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Services.tsx
    │   │   ├── WhyChooseUs.tsx
    │   │   ├── ProcessSteps.tsx
    │   │   ├── Portfolio.tsx
    │   │   ├── Testimonials.tsx
    │   │   ├── FAQ.tsx
    │   │   └── LeadCTA.tsx
    │   ├── ui/
    │   │   ├── Logo.tsx
    │   │   ├── Button.tsx    # Polymorphic (asChild), variants, sizes
    │   │   ├── Card.tsx      # Compound component (Card, CardHeader, CardTitle, CardContent)
    │   │   ├── SectionHeading.tsx
    │   │   └── Container.tsx
    │   └── seo/
    │       └── JsonLd.tsx    # ProfessionalService schema
    └── lib/
        ├── constants.ts      # Site config, nav links, social links, contact
        └── data/
            ├── services.ts   # 9 services (icon, title, description)
            ├── process.ts    # 5 publishing steps
            ├── portfolio.ts  # 6 placeholder projects
            ├── testimonials.ts # 3 original quotes
            └── faq.ts        # 8 accordion items
```

---

## 📄 Homepage Sections (in order)

1. **Header/Nav** — Sticky, logo left, nav center, red CTA right, mobile hamburger
2. **Hero** — H1 benefit-led, subcopy, dual CTAs, SVG device mockup, trust stats strip
3. **About** — Mission, value props, stat row, CTA
4. **Services** — 3-col grid of 9 service cards (icons from lucide-react)
5. **Why Choose Us** — 6 differentiator cards with icons
6. **Process Steps** — 5-step horizontal/vertical timeline
7. **Portfolio** — 3-col grid of 6 placeholder project cards
8. **Testimonials** — 3-card carousel with keyboard nav
9. **FAQ** — 8-item accessible accordion (semantic `<details>/<summary>`)
10. **Lead CTA** — High-contrast navy/red gradient band, primary conversion button
11. **Footer** — 4 columns: Brand, Company, Services, Contact

All sections are **self-contained components** accepting no required props — data imported internally from `src/lib/data/`.

---

## 🔍 SEO Implementation

| Feature | Implementation |
|---------|----------------|
| Meta Title | `USA Web App Coder \| Website & App Development for Growing Businesses` |
| Meta Description | `USA-based web design, app development, and digital marketing agency. We turn your idea into a professional website or app that converts. Get a free quote today.` |
| Open Graph | Full OG tags (title, description, url, siteName, 1200x630 image) |
| Twitter Card | `summary_large_image` with image |
| Canonical URL | `https://usawebappcoder.com` via `metadataBase` |
| JSON-LD | `ProfessionalService` schema with services, contact, social links, priceRange |
| Sitemap | `src/app/sitemap.ts` → `/sitemap.xml` |
| Robots | `src/app/robots.ts` → `/robots.txt` |
| Semantic HTML | One `<h1>`, `<h2>` per section, `<section id="...">` for anchor nav |
| Image Alt Text | Descriptive, no keyword stuffing |

---

## ⚡ Performance & Responsiveness

- **Mobile-first Tailwind** throughout (`base → sm → md → lg → xl`)
- **Breakpoints tested:** 375px, 768px, 1024px, 1280px+
- **next/image** with proper `sizes` — lazy-load below-the-fold automatically
- **Fonts via next/font** — self-hosted, zero CLS
- **Server Components by default** — only interactive bits (mobile menu, accordion, carousel) are Client Components
- **Target Lighthouse (mobile):** ≥ 90 Performance, ≥ 95 Accessibility, ≥ 95 SEO, ≥ 95 Best Practices

---

## ♿ Accessibility

- WCAG AA contrast on all text/background combos
- All interactive elements keyboard-navigable with visible focus rings
- Buttons/links have descriptive accessible names (no "Click here")
- FAQ accordion uses semantic `<details>/<summary>` with `aria-expanded`
- Mobile menu uses correct ARIA attributes
- Decorative SVGs use `aria-hidden="true"`

---

## 🧪 Commands

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Production build (must pass with zero errors)
npm run build

# Lint
npm run lint

# Preview production build
npm run start
```

---

## 📋 Deliverables Checklist

- [x] Complete homepage — all 10 required sections + header/footer
- [x] Fully responsive: verified at 375px, 768px, 1024px, 1280px+
- [x] Source code: full project, `node_modules` excluded
- [x] `README.md` documenting design/dev decisions (this file)
- [x] Assets/libraries documented below

---

## 📦 Assets & Libraries List

| Asset / Library | Purpose | Version |
|-----------------|---------|---------|
| **Next.js** | Framework (App Router) | 16.3.1 |
| **React** | UI library | 19.1.0 |
| **TypeScript** | Type safety | 5.x |
| **Tailwind CSS** | Styling | 4.x |
| **lucide-react** | Icons | 0.400+ |
| **framer-motion** | Animations (ready for use) | 11.x |
| **next/font/google** | Self-hosted fonts (Sora, Inter) | Built-in |
| **Sora** | Heading font (Google Fonts) | Variable |
| **Inter** | Body font (Google Fonts) | Variable |

**Placeholder Assets (in `public/images/`):**
- 6 SVG portfolio project images (`portfolio/project-1.jpg` through `project-6.jpg`)
- 3 SVG testimonial avatars (`testimonials/avatar-1.jpg` through `avatar-3.jpg`)
- 1 OG social image (`og-image.png`, 1200x630)

---

## 📝 Assumptions Made

1. **No real logo provided** → Built text-based wordmark component (`Logo.tsx`) with red "USA" + navy "Web App Coder" — trivial to swap for SVG/PNG later
2. **No real portfolio projects** → Created 6 original placeholder project cards with SVG color-block images, clearly structured so real images drop into `public/images/portfolio/` without code changes
3. **No real testimonials** → Wrote 3 original, authentic-sounding quotes with representative placeholder names/roles (no real companies fabricated)
4. **No real contact details** → Used clearly-labeled placeholders:
   - Email: `hello@usawebappcoder.com`
   - Phone: `+1 (000) 000-0000`
   - Location: "USA-Based Team"
4. **Competitor sites referenced for structural research only** — zero copy/layout/graphics cloned; all content and visual language is original

---

## ✅ Build Verification

```bash
npm run build
# ✓ Compiled successfully
# ✓ TypeScript passes
# ✓ Static pages generated (/, /robots.txt, /sitemap.xml)
# ✓ Zero warnings after metadataBase + viewport fixes
```

---

## 🚀 Deployment

Push to GitHub → Import in Vercel → Deploy. Zero config needed — Next.js App Router static export works out of the box.

```bash
# Vercel will run:
npm run build
# Output: .next/ (static files)
```