<div align="center">

# `KK.`

### Kaan Kapsız — Personal Portfolio

A monochrome, animation-rich personal portfolio built with React, Tailwind CSS v4, and Framer Motion.

[Live Demo](#) &nbsp;&bull;&nbsp; [Report Bug](https://github.com/squallexe12/kaan-portfolio/issues) &nbsp;&bull;&nbsp; [Request Feature](https://github.com/squallexe12/kaan-portfolio/issues)

---

**React** &nbsp; | &nbsp; **Vite** &nbsp; | &nbsp; **Tailwind CSS v4** &nbsp; | &nbsp; **Framer Motion** &nbsp; | &nbsp; **i18next**

</div>

<br/>

## Overview

Minimal, dark-themed portfolio website designed with a strict **black & white** color system. Every section uses scroll-triggered Framer Motion animations, and the entire UI is fully bilingual (Turkish / English) with persistent language preference.

<br/>

## Highlights

| Feature | Details |
|---|---|
| **Falling Pattern Hero** | Animated radial gradient particles with blur overlay and radial mask — creates a cinematic depth effect behind the heading |
| **Bilingual i18n** | Full TR/EN content via `react-i18next`. Language toggle with spring animation, preference saved to `localStorage` |
| **Glassmorphism Navbar** | Sticky, blur-backdrop navigation with mobile hamburger drawer and smooth staggered entry |
| **Skill Cards** | Three-column categorized grid (Languages, Frameworks, Tools) with live SimpleIcons and hover interactions |
| **Project Grid** | Five project cards with descriptions, tech tags, and direct GitHub links — hover lift via Framer Motion |
| **Contact Form** | Integrated with [Formspree](https://formspree.io) — real submission with success/error state handling |
| **Responsive** | Optimized breakpoints at `375px`, `768px`, and `1280px+` with mobile-first approach |

<br/>

## Tech Stack

```
Frontend        React 19 + Vite 8
Styling         Tailwind CSS v4 (CSS-based config, no tailwind.config.js)
Animation       Framer Motion 12
Internationalization  react-i18next
Icons           Lucide React + SimpleIcons CDN
Form Backend    Formspree
Utilities       clsx + tailwind-merge
```

<br/>

## Quick Start

```bash
# Clone the repository
git clone https://github.com/squallexe12/kaan-portfolio.git
cd kaan-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`.

<br/>

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

<br/>

## Project Structure

```
kaan-portfolio/
├── public/
│   └── kaan.jpg                 # Profile photo
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── FallingPattern.jsx   # Animated background effect
│   │   ├── Navbar.jsx           # Sticky nav + mobile drawer
│   │   ├── Hero.jsx             # Landing section + FallingPattern
│   │   ├── About.jsx            # Bio, photo, badges, stats
│   │   ├── Skills.jsx           # Categorized skill cards
│   │   ├── Projects.jsx         # GitHub project grid
│   │   ├── Contact.jsx          # Formspree contact form
│   │   ├── Footer.jsx           # Social links + copyright
│   │   └── LanguageToggle.jsx   # TR/EN spring toggle
│   ├── lib/
│   │   └── utils.js             # cn() utility
│   ├── locales/
│   │   ├── tr.json              # Turkish translations
│   │   └── en.json              # English translations
│   ├── i18n.js                  # i18next configuration
│   ├── App.jsx                  # Root layout + section wiring
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind v4 theme + global styles
├── index.html
├── vite.config.js
└── package.json
```

<br/>

## Design System

```
Background       #0a0a0a
Card Surface     #1a1a1a
Borders          #2a2a2a
Muted Text       #999999
Primary Text     #ffffff

Font Sans        Inter (300–900)
Font Mono        JetBrains Mono (400–600)
```

No color accents. Every visual element operates within this monochrome palette — glassmorphism, gradient dividers, and layered surfaces create depth without color.

<br/>

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

The `dist/` folder is fully static and can be deployed to any hosting platform — Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.

<br/>

## Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-squallexe12-181717?style=for-the-badge&logo=github)](https://github.com/squallexe12)
[![Instagram](https://img.shields.io/badge/Instagram-kaan__kapsizz-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/kaan_kapsizz/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kaan_Kapsız-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kaan-kapsiz-170927308/)

</div>

<br/>

## License

MIT — free to use, modify, and distribute.

---

<div align="center">
  <sub>Built by <strong>Kaan Kapsız</strong></sub>
</div>
