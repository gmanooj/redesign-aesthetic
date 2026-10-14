# Dr. Maya Reynolds, PsyD — Clinical Psychology Practice

A high-performance, responsive web application for the private psychotherapy practice of **Dr. Maya Reynolds, PsyD**, Licensed Clinical Psychologist in Santa Monica, California.

---

## Overview

The application is built with modern web technologies focusing on performance, accessibility (WCAG AA), responsive design, and search engine visibility.

* **Location**: 123th Street 45 W, Santa Monica, CA 90401
* **Services**: In-person psychotherapy in Santa Monica & secure telehealth across California
* **Specialties**: Anxiety & Panic, Trauma Processing (EMDR), Executive Burnout & Perfectionism

---

## Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router with Turbopack)
* **UI & Components**: React 19, [Lucide React](https://lucide.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with centralized theme tokens & responsive Fluid Grid
* **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
* **Fonts**: Google Fonts (Cormorant Garamond, Mulish) & local accent typography

---

## Getting Started

### Prerequisites

* Node.js 18.18+ or 20+
* npm, yarn, or pnpm

### Installation

```bash
# Clone repository and enter directory
cd redesign-clone

# Install dependencies
npm install
```

### Development

```bash
# Start local development server at http://localhost:3000
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## Project Structure

```
redesign-clone/
├── app/
│   ├── disclaimer/        # Practice disclaimer page
│   ├── privacy-policy/    # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── icon.svg           # Scalable vector site icon
│   ├── fluid-engine.css   # Fluid editorial grid layout styles
│   ├── globals.css        # Tailwind v4 theme tokens & base styles
│   ├── layout.jsx         # Root layout, fonts, meta tags, and JSON-LD schema
│   ├── page.jsx           # Main landing page
│   ├── robots.js          # Search engine robots configuration
│   └── sitemap.js         # Dynamic XML sitemap generator
├── components/
│   ├── Header/            # Navigation bar, desktop dropdowns, and mobile drawer
│   ├── Hero/              # Editorial hero banner with therapist portrait
│   ├── Section2/          # Practice philosophy and narrative
│   ├── Section3/          # Areas of focus (Anxiety, Trauma, Burnout)
│   ├── Section4/          # Coastal quote banner
│   ├── Section5/          # Comprehensive specialties grid
│   ├── Section6/          # Clinical methodology and approach
│   ├── Section7/          # About Dr. Maya Reynolds
│   ├── OurOffice/         # Authentic Santa Monica office showcase
│   ├── Section8/          # Modalities (CBT, EMDR, Mindfulness, Somatic)
│   ├── FAQ/               # Practice policies & interactive FAQ accordion
│   ├── Section9/          # Consultation booking call-to-action
│   ├── Footer/            # Practice contact, location, hours, and legal links
│   └── common/            # Reusable UI primitives (ImageReveal, UnderlineLink, SmoothScroll)
├── lib/
│   └── site.js            # Global site configuration & domain helper
├── public/
│   └── images/            # Optimized practice imagery & profile photography
├── next.config.mjs        # Next.js build and image optimization settings
├── package.json           # Dependencies and scripts
└── jsconfig.json          # Path alias configuration (@/*)
```

---

## Design System & Tokens

Centralized semantic design tokens are defined in `app/globals.css`:

| Token | Value | Description |
| :--- | :--- | :--- |
| `--color-primary` | `#A8644B` | Terracotta accent for buttons, badges, and highlights |
| `--color-primary-hover` | `#8E533E` | Hover state for interactive primary elements |
| `--color-secondary` | `#FAF4EE` | Warm linen background for editorial sections |
| `--color-accent` | `#A8644B` | Cursive typography accents and decorative icons |
| `--color-ink` | `#2B2D2F` | Deep charcoal for typography and high-contrast footers |
| `--color-surface` | `#FFFFFF` | Clean white card and section canvas |
| `--color-line` | `#E8DFD8` | Structural section dividers and borders |
| `--color-muted` | `#6B625C` | Secondary captions and supporting descriptions |

---

## SEO & Accessibility

* **Semantic HTML5**: Strict heading hierarchy (`h1` → `h2` → `h3`) with semantic section tags.
* **Structured Data**: Schema.org JSON-LD graph integrating `MedicalBusiness`, `LocalBusiness`, and `FAQPage` rich snippets.
* **Core Web Vitals**: Responsive images with `next/image`, modern WebP compression, lazy loading, and priority LCP optimization.
* **Social Sharing**: Complete Open Graph and Twitter Card metadata with high-resolution preview images.
* **WCAG AA Compliance**: High-contrast ratios on all text and accessible keyboard focus navigation.

---

## Deployment

The application is pre-configured for one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub / GitLab.
2. Import the project into the Vercel dashboard.
3. Configure the optional environment variable:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```
4. Deploy. Canonical URLs, sitemaps, and robots automatically bind to the production domain.
