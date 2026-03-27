# Kaan Kapsız — Portfolio

Personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Bilingual** — Full Turkish / English support with `react-i18next`, language preference persisted to localStorage
- **Animated Hero** — Falling pattern background effect with radial mask and cinematic scroll reveals
- **About** — Profile photo, bio, location & school badges, stats row
- **Skills** — Categorized cards (Languages, Frameworks, Tools) with technology icons
- **Projects** — Card grid linking to GitHub repositories with tech tags
- **Contact** — Working contact form via Formspree with success/error states
- **Responsive** — Optimized for mobile (375px), tablet (768px), and desktop (1280px+)
- **Dark Monochrome** — Pure black & white palette with glassmorphism and subtle gradients

## Tech Stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev)
- [react-i18next](https://react.i18next.com)
- [Lucide Icons](https://lucide.dev)
- [Formspree](https://formspree.io)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── FallingPattern.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── LanguageToggle.jsx
├── lib/
│   └── utils.js
├── locales/
│   ├── tr.json
│   └── en.json
├── i18n.js
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

```bash
npm run build
npx vercel --prod
```

## Contact

- **GitHub:** [squallexe12](https://github.com/squallexe12)
- **Instagram:** [kaan_kapsizz](https://www.instagram.com/kaan_kapsizz/)
- **LinkedIn:** [Kaan Kapsız](https://www.linkedin.com/in/kaan-kapsiz-170927308/)

## License

MIT
