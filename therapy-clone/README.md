# Conejo Valley Family Counseling — Responsive Web Application

A modern, high-performance responsive web application built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **TypeScript**. This project accurately replicates the editorial layout, typography hierarchy, responsive grid structure, and visual interactions of the Conejo Valley Family Counseling homepage.

---

## Architecture & Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (React 19, Turbopack, App Router architecture)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a centralized CSS-first `@theme` design system
* **Image Optimization**: `next/image` utilizing responsive `sizes`, WebP/AVIF auto-formats, and `priority` loading for above-the-fold hero assets
* **Type Safety**: Strictly typed with TypeScript 5
* **Icons & Micro-interactions**: Smooth cubic-bezier transitions and customized interactive underline hover animations

---

## Key Technical Decisions & Design System

### 1. Fluid Proportional Grid System
The layout implements an editorial proportional grid architecture:
* **Desktop / Large Displays (`>= 768px`)**: A 24-column grid with dynamic row height scaling factor (`0.0215`) based on container width (capped at `1500px` max-width with standard `4vw–5vw` gutters).
* **Mobile / Small Displays (`< 768px`)**: An 8-column grid with `6vw` mobile gutters, collapsing complex desktop side-by-side elements into vertical editorial cards.

### 2. Typography & Font Fallback Chains
* **Headings / Editorial Serifs**: Loaded via Adobe Typekit (`beaufort-pro`) with Google Font `Cormorant Infant` and system `Georgia, serif` fallbacks.
* **Cursive Script Accents**: Custom `@font-face` display font (`PrintedMoments`) loaded asynchronously for stylistic script accents (e.g., *"thrive"*, *"help"*, *"you"*).
* **Body Copy**: Standardized via Google Font `Mulish` with tailored letter-spacing (`0.12em` uppercase taglines, `1.8` line heights).

### 3. Reusable Color Tokens
Defined centrally in `app/globals.css` via the `@theme` directive:
* `--color-brand-bg`: `#FBF9F4` (Warm bone/off-white)
* `--color-brand-surface`: `#F3F1EC` (Soft sand card surface)
* `--color-brand-heading`: `#2B2B2B` (Charcoal serif heading)
* `--color-brand-body`: `#333333` (Muted readable body copy)
* `--color-brand-teal`: `#7CA19F` (Signature script accent teal)
* `--color-brand-dark`: `#2F3E37` (Deep forest slate)

### 4. Responsive Mobile Navigation
* Seamless full-screen drawer overlay with smooth transitions.
* Interactive multi-level nested folders (*Our Team*, *Specialties*, *Methods*) with back-navigation.
* Clean accessible button controls and touch-friendly targets.

---

## Project Structure

```text
therapy-clone/
├── app/
│   ├── favicon.ico
│   ├── fluid-engine.css       # Proportional 24-col / 8-col grid declarations
│   ├── globals.css            # Design system tokens, typography & utilities
│   ├── layout.tsx             # Root layout & font loaders
│   └── page.tsx               # Homepage assembly
├── components/
│   ├── header/
│   │   └── page.tsx           # Responsive header & full-screen mobile menu
│   ├── Hero.tsx               # Above-the-fold hero section with priority assets
│   ├── Section2.tsx           # Narrative philosophy & hope section
│   ├── Section3.tsx           # "Who We Help" 3-column demographic cards
│   ├── Section4.tsx           # Full-bleed quote banner with atmospheric overlay
│   ├── Section5.tsx           # Areas of expertise grid & divider list
│   ├── Section6.tsx           # "How We Work" multi-column editorial section
│   ├── Section7.tsx           # "Honoring Where You've Been" media banner
│   ├── Section8.tsx           # Specialties grid
│   ├── Section9.tsx           # Appointment booking call-to-action
│   └── Footer.tsx             # Footer, contact info, locations & legal bar
├── next.config.ts             # Remote image patterns & Turbopack configurations
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites
* Node.js 18.18+ or Node.js 20+
* npm, yarn, or pnpm

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
Create an optimized production bundle:
```bash
npm run build
```

Run the production server:
```bash
npm run start
```
