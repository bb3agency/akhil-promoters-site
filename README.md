# Akhil Promoters — Official Website

Premium residential real estate website for **Akhil Promoters Private Limited**, a CREDAI-accredited builder in Vijayawada, Andhra Pradesh.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server & bundler
- **Tailwind CSS v4** (Vite plugin)
- **Motion** (Framer Motion) — animations
- **Lucide React** — icons
- **React Router v7** — client-side routing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.tsx                    # Route definitions
├── main.tsx                   # Entry point
├── index.css                  # Design tokens & base styles
├── components/
│   ├── layout/                # Header, Footer, Layout wrapper
│   └── ui/                    # Reusable UI components
├── data/
│   └── index.ts               # Project data, contact info, types
└── pages/
    ├── Home.tsx
    ├── Projects.tsx
    ├── ProjectDetails.tsx
    ├── Branches.tsx
    ├── BuyersGuide.tsx
    ├── SupportServices.tsx
    ├── Careers.tsx
    ├── Contact.tsx
    ├── ComingSoon.tsx
    └── WhoWeAre/              # Company sub-pages
```

## License

Private — All rights reserved. © Akhil Promoters Private Limited.
