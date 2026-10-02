# Pior Global Gateway






Pior Global Gateway is a modern export-import company website built with React, Vite, and TanStack Router. The site showcases the company’s core offerings in Ethiopian premium coffee, natural salt, and medical supplies, while providing a polished bilingual marketing experience with responsive pages for Home, About, Products, and Contact.

## Overview

This project serves as the public-facing website for Pior Export Import PLC and is designed to:

- Present the company’s story, mission, and values
- Highlight product categories and sourcing strengths
- Support multilingual content and a polished brand experience
- Capture inquiries through a contact form connected to Web3Forms
- Run as a fast, SEO-friendly front-end site

## Tech Stack

- React 19
- Vite
- TanStack Router
- TanStack Start
- TypeScript
- Tailwind CSS
- Radix UI primitives
- React Three Fiber / Drei for the 3D hero/value visuals
- Lucide React for icons

## Project Structure

```text
src/
  components/
  lib/
  routes/
  assets/
  router.tsx
  routeTree.gen.ts
  server.ts
  start.ts
  styles.css
scripts/
  prerender.mjs
```

Key routes include:

- `/` — Landing page with hero, products, and values
- `/about` — Company background, mission, and vision
- `/products` — Product categories and business highlights
- `/contact` — Contact information and inquiry form

## Prerequisites

- Node.js 18 or newer
- npm

## Installation

```bash
git clone <repository-url>
cd pior-global-gateway
npm install
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the site for production and runs the prerender script.

```bash
npm run preview
```

Serves the production build locally for preview.

```bash
npm run lint
```

Runs ESLint on the project.

```bash
npm run format
```

Formats the codebase with Prettier.

## Environment Notes

The contact form currently posts to the Web3Forms API using an access key embedded in the frontend code. If you are adapting or redeploying this project, review the contact form implementation in `src/routes/contact.tsx` and update the access key if needed.

## Deployment

This project is configured as a static frontend with Vite/TanStack build output and optional prerendering. It can be deployed to any static hosting provider such as:

- Vercel
- Netlify
- Cloudflare Pages
- Any Node-compatible hosting environment

## License

This project is currently distributed without a dedicated license file. Please check with the project owner before using the code in production or redistributing it externally.

## Notes

The site is designed as a polished business website rather than a full e-commerce platform. It focuses on brand presentation, product storytelling, and lead generation through contact inquiries.

