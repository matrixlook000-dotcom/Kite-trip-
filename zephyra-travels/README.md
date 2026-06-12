# Zephyra Travels — Next.js Clone

A production-ready Next.js 15 clone of [zephyratravels.com](https://www.zephyratravels.com), built with TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Radix UI** (accessible primitives)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, packages, eco, car rental, attractions, FAQ |
| `/packages` | All tour packages with filtering + custom itinerary form |
| `/packages/[id]` | Individual package detail with booking sidebar |
| `/day-tour` | Single-day excursion listings |
| `/rent-a-car` | Vehicle fleet with chauffeur info |
| `/partners` | B2B / corporate partnership page |
| `/about` | Company story, team, values, stats |
| `/blogs` | Blog listing with featured post |
| `/blogs/[slug]` | Blog detail page |
| `/gallery` | Masonry photo gallery with lightbox |
| `/group-travel` | Group tours inquiry page |
| `/policies` | Privacy, terms, cancellation, cookie policies |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── packages/           # Tour packages pages
│   ├── day-tour/           # Day tours page
│   ├── rent-a-car/         # Car rental page
│   ├── partners/           # B2B partners page
│   ├── about/              # About us page
│   ├── blogs/              # Blog listing + detail
│   ├── gallery/            # Photo gallery
│   ├── group-travel/       # Group tours page
│   └── policies/           # Legal pages
├── components/
│   ├── home/               # Homepage-specific sections
│   │   ├── HeroSection.tsx
│   │   ├── GoGreenSection.tsx
│   │   ├── RentACarSection.tsx
│   │   ├── AttractionsSection.tsx
│   │   ├── InclusionsSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── PartnersSection.tsx
│   │   └── FaqSection.tsx
│   ├── layout/             # Persistent layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Reusable UI primitives
│       ├── Button.tsx
│       ├── PackageCard.tsx
│       ├── SectionHeading.tsx
│       └── WhatsAppButton.tsx
└── lib/
    ├── data.ts             # All site content and mock data
    └── utils.ts            # Utility helpers (cn, etc.)
```

## Customization

- **Content**: Edit `/src/lib/data.ts` to update packages, attractions, FAQs, and site config
- **Colors**: Modify `/tailwind.config.ts` under `theme.extend.colors`
- **Fonts**: Change the Google Fonts import in `/src/app/globals.css` and `/src/app/layout.tsx`
- **Images**: Replace Unsplash URLs in `data.ts` with your own CDN images

## Environment Variables

No environment variables are required to run this project. For production deployment with a real backend, you might add:

```env
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/your-number
NEXT_PUBLIC_API_URL=https://api.yourbackend.com
```
