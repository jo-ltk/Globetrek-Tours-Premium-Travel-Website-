# Globetrek Tours

Premium travel and tour website scaffold built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## What Was Implemented

- Premium frontend redesign inspired by the provided references
- Responsive layout for desktop, tablet, and mobile
- English and German route structure
- Shared design system with custom colors, typography, spacing, and card styles
- Animated page sections, cards, and CTAs using Framer Motion
- Tours listing page and dynamic tour detail page
- Transfer services page
- About page
- Gallery page
- Contact page with FAQ and contact blocks
- Shared navbar, footer, contact section, FAQ accordion, and chatbot button
- Static content/data layer for tours, testimonials, vehicles, and FAQs

## Pages Created

- `/` -> redirects by structure to the English homepage component
- `/en` -> main premium homepage
- `/en/packages` -> all tours page
- `/en/packages/[slug]` -> tour detail page
- `/en/experiences` -> transfer services page
- `/en/events` -> about us page
- `/en/gallery` -> gallery page
- `/en/contact` -> contact and FAQ page
- `/de` -> German route entry using the same current UI structure
- `/de/packages` -> German route for tours listing
- `/de/packages/[slug]` -> German route for tour detail
- `/de/experiences` -> German route for transfer services
- `/de/events` -> German route for about page
- `/de/gallery` -> German route for gallery
- `/de/contact` -> German route for contact page
- `/admin` and nested admin routes -> scaffold placeholders kept for future dashboard work

## Main Shared Components

- `Navbar` -> top navigation with language switcher and CTA
- `Footer` -> premium dark footer with grouped navigation and contact details
- `HeroSection` -> large editorial hero block used across pages
- `PackageCard` -> reusable tour card for listing pages
- `TourSection` -> featured tours section
- `GallerySection` -> benefits and service highlights section
- `TestimonialsSection` -> social proof card section
- `FaqAccordion` -> animated FAQ items
- `ContactPanel` -> contact CTA section
- `ChatbotWidget` -> floating placeholder entry point for future AI assistant
- `PageShell` -> shared page wrapper and layout shell

## Visual Style Implemented

- Warm stone background and ivory content surface
- Deep olive green accent palette
- Large editorial uppercase headings
- Rounded premium cards and shell containers
- Clean grid layout with generous whitespace
- Soft shadows and subtle glass-like surface layering

## Animation Implemented

- Fade-in and slide-up section reveals
- Staggered card animations
- Hover lift and scale on cards
- CTA hover motion
- Animated FAQ expand/collapse
- Floating chatbot entry animation

## Data and Structure Added

- `lib/site-data.ts` for tours, vehicles, testimonials, and FAQ content
- `types/package.ts` expanded to support tour detail data
- `utils/helpers.ts` for shared helpers
- `next.config.mjs` updated to allow remote image loading from Pexels

## Current Notes

- German routes currently reuse the same content structure and layout as English
- Admin pages remain scaffold placeholders
- API routes remain placeholders
- MongoDB, Cloudinary, and chatbot backend logic are not implemented yet

## Verification

- `npm run lint` passed
- `npm run build` passed

## Additional Documentation

- See `docs/IMPLEMENTATION_OVERVIEW.md` for a fuller page-by-page breakdown
