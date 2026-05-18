# Residency Website Frontend

A production-ready responsive landing page built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

- `src/assets` static assets and placeholders
- `src/components` reusable UI primitives
- `src/sections` section components for the landing page
- `src/layouts` shared page layout wrappers
- `src/hooks` custom hooks
- `src/utils` utility helpers
- `src/data` centralized content/data model
- `src/pages` page-level composition

## Setup

```bash
npm install
npm run dev
```

## Add Real Event Photos

Place your provided images here with these exact names:

- `public/photos/hacknitr-1.jpg`
- `public/photos/hacknitr-2.jpg`
- `public/photos/hacknitr-3.jpg`
- `public/photos/hacknitr-4.png`

They are already wired into animated gallery sections.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Deployment

1. Build the app:
```bash
npm run build
```
2. Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Collaboration Notes

Teammates only need:

```bash
npm install
npm run dev
```

No extra local setup is required.
