# 🐾 TeddyPups U.A.E. – Premium Teacup Puppies in Dubai (Clone)

> A modern, pixel-perfect, highly responsive clone of the [TeddyPups reference website](https://puppy.instabizweb.com/), built for the **Insta Biz Web Technical Assessment Round**.

---

## 🌟 Live Demo & Source Code
- **Reference Website**: [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)
- **GitHub Repository**: Complete source code in this repository
- **Live Deployment**: Ready for immediate deployment to Vercel / Netlify / AWS Amplify

---

## 🚀 Key Technologies & Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation / SSG, Server & Client Components)
- **Library**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design Tokens (`--color-milk`, `--color-cocoa`, `--color-honey`, `--color-toffee`)
- **Typography**: Google Fonts via `next/font/google`:
  - `Fraunces` (Luxury variable serif display)
  - `Figtree` (Clean, modern sans-serif body)
  - `Shantell Sans` (Playful handwritten marker accents)
- **Icons**: Custom SVG paw cursors, scalloped hems, wavy dividers, twinkling star animations
- **Asset Optimization**: High-efficiency WebP/AVIF imagery, lazy loading, and priority preloading

---

## 📱 Pages & Features Overview

### 1. 🏠 Homepage (`/`)
- **8 Seamless Atmospheric Scenes (Sunset-to-Night Gradient)**:
  - **Scene 1: Hero (`tp-hero`)**: Warm morning sun, animated lineup of showroom puppies, primary CTAs ("View available puppies", "Enquire on WhatsApp"), and custom paw-cursor tracking.
  - **Scene 2: Meet the Pups (`tp-meet`)**: Showcase of available teacup & miniature litters with quick links to puppy detail pages.
  - **Scene 3: Two Ways to Meet (`tp-paths`)**: Interactive dual-pathway breakdown ("Puppies in Dubai" vs "Imported for you").
  - **Scene 4: Your Puppy Journey (`tp-chat`)**: Concierge 3-step adoption journey (Choose breed &rarr; HD Photos/Health testing &rarr; VIP safe delivery).
  - **Scene 5: Why Families Trust TeddyPups (`tp-passport`)**: Illustrated passport booklet detailing 1-Year Genetic Health Guarantees, ISO Microchips, and Veterinary Certificates.
  - **Scene 6: Happy Families & Puppies (`tp-dusk`)**: Warm dusk ambience with authentic client reviews and pet parent stories in the UAE.
  - **Scene 7: Questions, Answered (`tp-night`)**: Midnight starry sky with twinkling star animations and quick FAQ highlights.
  - **Scene 8: Welcome Home (`tp-home`)**: Warm illuminated cottage graphic with final adoption inquiry CTAs.

### 2. 🐶 Available Puppies Directory (`/puppies`)
- **Interactive Multi-Filter System**:
  - Filter by Breed (*Maltipoo, Cavapoo, Pomeranian, Toy Poodle, Shih Tzu*)
  - Filter by Gender (*Boy, Girl, All*)
  - Filter by Availability (*In Dubai Showroom vs Imported for you*)
- **Real-time Live Search**: Instant filtering by puppy name or breed.
- **Puppy Cards**: Responsive card layout with image zoom on hover, badges, age, breed tags, and direct WhatsApp / details buttons.
- **"Already Gone Home" Preview**: Dedicated section showcasing successfully placed pups.

### 3. 🔍 Individual Puppy Details (`/puppies/[slug]`)
- **Dynamic SSG Routing**: Pre-rendered at build time with `generateStaticParams()` for all 20 litters.
- **Photo Gallery**: Large interactive preview with thumbnail selector and click-to-open full-screen lightbox modal.
- **Specifications Matrix**: Breed, gender, age, microchip verification, and delivery timeframe.
- **One-Click WhatsApp Integration**: Generates contextual pre-filled messages (*e.g., "Hi TeddyPups! I'm interested in Copper, the Cavapoo..."*).
- **Health & Trust Checklist**: 1-Year Genetic Guarantee, Passport, ISO Microchip, Travel Crate.
- **Related Puppies Carousel**: Smart recommendations for similar breeds.

### 4. 🏡 Gone Home (`/gone-home`)
- Hall of fame celebrating puppies that have joined their forever families across Dubai, Abu Dhabi, and the GCC.

### 5. 📖 How It Works (`/how-it-works`)
- In-depth side-by-side comparison between:
  - **Showroom Experience** (Downtown Dubai private suite, same-day bonding)
  - **Concierge International Import** (Ethical certified breeders in Korea/Europe, flight nannies, and veterinary quarantine clearance).

### 6. ❤️ Happy Families (`/happy-families`)
- Photo wall featuring real UAE families with their adorable companions, complete with testimonial quotes and 5-star ratings.

### 7. ❓ FAQ (`/faq`)
- Complete categorized accordion notes pinned to a corkboard interface.
- Instant search filter ("sniff out a question") and 24/7 WhatsApp concierge link.

### 8. ✉️ Visit & Contact (`/contact`)
- **Interactive Vintage Letterform**: Creative Mad Libs-style contact form with input fields embedded into a handwritten letter.
- **Downtown Dubai Showroom Information**: Address, opening hours (10:00 AM – 9:00 PM GST), phone, email, and interactive Google Map.
- **Instant Social Links**: Instagram, TikTok, Facebook.

### 9. 🧭 Header & Footer Components
- **Header**: Scalloped hem decoration (`tp-header__hem`), sticky glassmorphism blur, active route paw-print indicator, and slide-in mobile navigation drawer.
- **Footer**: Wavy hill divider (`tp-footer__hill`), twinkling starry night background, quick navigation, and copyright.
- **Floating WhatsApp Badge**: Sticky bottom chat CTA with ping animation on desktop and dual action bar ("WhatsApp us" + "Call") on mobile.

### 10. 🐾 Interactive Puppy Paw Cursor & Trail Canvas (`PawTrailCanvas`)
- **Authentic Paw Cursor Hotspot**: Custom 32x32 SVG paw cursor (`/cursor/paw.svg` 9 6) for default movement and pressed paw (`/cursor/paw-press.svg` 9 6) on active click and hover states.
- **Puppy Footstep Trail Canvas**: Using HTML5 Canvas 2D overlaid with `z-[70] pointer-events-none`, the cursor tracks movement distance (`Math.hypot(dx, dy) >= 46px`) and stamps alternating left/right puppy paws offset along the travel angle.
- **Click Pop Burst**: When the user clicks anywhere, a paw stamp pops at the cursor coordinates alongside floating playful paw/heart particles (`.pup-heart`) that rise and fade out smoothly.

---

## 📁 Project Structure

```bash
Insta_Web_Biz/
├── public/
│   ├── brand/               # Brand logos and badges
│   ├── cursor/              # Custom SVG paw cursors
│   ├── media/               # 150+ high-resolution puppy and family photos
│   ├── icon.png             # Site favicon
│   └── apple-icon.png       # Apple touch icon
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts, Header, Footer & Floating CTA
│   │   ├── globals.css      # Design tokens, variables & full component styles
│   │   ├── page.tsx         # Homepage (8 continuous atmospheric scenes)
│   │   ├── puppies/
│   │   │   ├── page.tsx     # Filterable Available Puppies directory
│   │   │   └── [slug]/
│   │   │       ├── page.tsx # SSG Server Component with generateStaticParams
│   │   │       └── PuppyDetailClient.tsx # Client gallery & lightbox modal
│   │   ├── gone-home/
│   │   │   └── page.tsx     # Adopted puppies showcase
│   │   ├── how-it-works/
│   │   │   └── page.tsx     # Adoption process & trust promise
│   │   ├── happy-families/
│   │   │   └── page.tsx     # Client testimonials & photo wall
│   │   ├── faq/
│   │   │   └── page.tsx     # FAQ questions with search
│   │   └── contact/
│   │       └── page.tsx     # Vintage letterform & Downtown Dubai showroom info
│   ├── components/
│   │   ├── Header.tsx       # Sticky navigation, scalloped hem & mobile drawer
│   │   ├── Footer.tsx       # Hill curve, twinkle stars & directory links
│   │   ├── MobileBottomBar.tsx # Mobile sticky WhatsApp & call bar
│   │   └── PuppyCard.tsx    # Reusable card with hover effects & badges
│   ├── data/
│   │   └── puppies.json     # Comprehensive dataset of all 20 puppies
│   └── types/
│       └── index.ts         # TypeScript definitions
├── package.json             # Scripts & dependencies
├── tailwind.config.js       # Brand color palette & typography
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation & Loom guide
```

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js `18.x` or higher (tested on Node v22.19.0)
- npm or yarn

### 1. Clone repository
```bash
git clone <YOUR_REPO_URL>
cd Insta_Web_Biz
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create production build
```bash
npm run build
npm run start
```

---

## 🎥 Loom Video Recording Guide
When recording the walkthrough video for the submission, follow this structured outline:

1. **Introduction (0:00 - 0:45)**:
   - Brief greeting, purpose of the assignment for Insta Biz Web.
   - Mention the reference website (`https://puppy.instabizweb.com/`) and state the goal: a 100% complete, pixel-perfect, responsive Next.js clone.
2. **Tech Stack & Architecture (0:45 - 2:00)**:
   - Explain why Next.js 14 App Router + TypeScript + Tailwind CSS was chosen (SSG pre-rendering, modular component architecture, SEO metadata, performance).
   - Show the clean folder structure (`src/app`, `src/components`, `src/data`, `public/media`).
3. **AI Tools & Workflow (2:00 - 3:30)**:
   - Detail the automated extraction scripts used to inspect DOM structures, download high-res assets, and extract all 20 puppy datasets into structured JSON.
   - Highlight how TypeScript strict checking ensured zero build errors across all 30 generated static pages.
4. **Feature Walkthrough (3:30 - 6:30)**:
   - **Interactive Puppy Paw Cursor & Trail**: Demonstrate the custom puppy paw cursor, alternating walking paw footprints that follow cursor movements, and the paw-press / heart particle burst on every mouse click.
   - **Home Page**: Show the 8-scene transition from morning daylight to dusk and starry night.
   - **Puppies Directory**: Demonstrate live breed filtering, gender toggles, location tabs, and search bar.
   - **Puppy Detail Page**: Demonstrate interactive photo gallery switching, click-to-preview lightbox, puppy specifications, and WhatsApp dynamic pre-filled link.
   - **Letterform Contact Page**: Show the Mad Libs handwritten letter input and validation.
   - **Mobile Responsiveness**: Toggle DevTools mobile view to showcase the custom mobile drawer and sticky action bar.
5. **Testing & Deployment (6:30 - 7:30)**:
   - Show the successful output of `npm run build` (`Generating static pages 30/30`).
   - Share the live deployment URL (Vercel) and GitHub repository link.

---

## 👨‍💻 Author & Submission
- **Developer**: Sarthak (Candidate for Insta Biz Web Technical Round)
- **Email**: sarthak...
- **Submission Date**: October 2026

