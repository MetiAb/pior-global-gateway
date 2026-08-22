# Pior Export Import PLC Landing Page

## Goal
Build a professional, interactive, multi-section landing page for Pior Export Import PLC, a wholesaler/exporter of Wollega coffee, Afar salt, and importer of medical supplies.

## Design Direction
- Warm, earth-toned premium aesthetic inspired by Ethiopian coffee and Afar salt landscapes.
- Semantic design tokens in `src/styles.css` (no hardcoded component colors).
- Clean typography, generous whitespace, and subtle motion-ready transitions.
- Fully responsive with a sticky header, footer, and clear navigation.

## Route Structure
- `/` — Home: hero, company intro, product highlights, contact CTA.
- `/about` — Our History, Mission, Vision.
- `/products` — Detailed product cards: Wollega Coffee, Afar Iodised Salt, Medical Supplies.
- `/contact` — Email, phone, landline, location.

All routes get unique `head()` metadata for SEO/social sharing.

## Shared Layout
- Update `src/routes/__root.tsx` with a sticky header, responsive navigation, and footer.
- Remove placeholder content from `src/routes/index.tsx`.

## Assets
- Generate premium hero/product images for coffee and salt to avoid placeholders.
- Store generated images in `src/assets/` with ES6 imports.

## Technical Notes
- TanStack Start v1 file-based routing.
- Tailwind CSS v4 semantic tokens.
- No backend/data persistence required; static marketing site.
