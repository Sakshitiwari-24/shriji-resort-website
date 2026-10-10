# 🏰 Shriji Resort & Marriage Garden

> **Rewa's Most Prestigious Destination Wedding & Luxury Event Venue**  
> *Sprawling 35,000 Sq. Ft. Marriage Lawn • 10,000 Sq. Ft. AC Banquet Hall • Crystal Swimming Pool • 25+ Luxury AC Suites*

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design%20System-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Responsive](https://img.shields.io/badge/Mobile-200%25%20Responsive-brightgreen?style=for-the-badge)](https://shrijiresortrewa.com)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Hosted-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

---

- **GitHub Repository:** [https://github.com/Sakshitiwari-24/shriji-resort-website](https://github.com/Sakshitiwari-24/shriji-resort-website)
- **1-Click Vercel Deploy:** [Deploy to Vercel (1-Click)](https://vercel.com/new/import?s=https://github.com/Sakshitiwari-24/shriji-resort-website)
- **Live Domain:** [https://shriji-resort-website.vercel.app](https://shriji-resort-website.vercel.app)
- **Local Dev Server:** `http://localhost:3000`

---

## 📖 Overview

**Shriji Resort & Marriage Garden** is a bespoke, luxury destination wedding website designed for Rewa's finest marriage garden located on Shiv Nagar Road, near Makhan Lal Chaturvedi University, Allahabad Road, Rewa, Madhya Pradesh.

Built with an artisanal **Baghel Haveli & Golden Hour** royal aesthetic, the website captures the warmth, sacred tradition, and regal scale of Indian weddings with ultra-smooth micro-animations, glassmorphism, and seamless mobile responsiveness.

---

## ✨ Key Features & Architectural Highlights

### 1. 🌟 Sticky Glass Navigation (`Navbar.jsx`)
- Dynamic frosted-glass header with scroll state transitions.
- High-contrast brand typography and gold logo badge.
- Interactive link pills with Lucide icons (`Compass`, `Building2`, `Camera`, `Sparkles`, `MapPin`).
- Desktop "Book Date" call-to-action button that smoothly navigates to the reservation form.
- Full-screen animated mobile menu drawer with category badges, subtitles, and chevron navigation.

### 2. 🎬 Regal Hero Experience (`HeroSection.jsx`)
- Full-bleed ambient drone video background with warm aubergine overlay.
- Left-aligned headline with *Fraunces* italic display accents.
- Dual call-to-action buttons: primary **"Plan Your Celebration"** button and glass-outlined **"Explore Royal Spaces"** link.

### 3. 🏛️ Haveli Heritage & Capacity Highlights (`IntroSection.jsx`)
- Overview of the resort's legacy and architectural philosophy.
- Solid warm paper highlight card displaying venue capacities:
  - **Lawn Capacity:** Up to 2,000 Guests
  - **Indoor AC Hall:** 400 – 600 Guests
  - **Manicured Lawn:** 35,000 Sq. Ft.

### 4. 🏰 Interactive Spaces Explorer (`SpacesSection.jsx`)
- **Desktop:** Interactive expanding accordion row with smooth flexbox transitions on hover and click.
- **Mobile:** Accordion with touch-friendly expandable cards.
- Covers the **Royal Marriage Lawn**, **Imperial AC Banquet & VIP Lounge**, **Crystal Poolside & Haldi Deck**, and **Night Canopy Garden Lawn**.

### 5. 🎊 Curated Celebrations & Event Orders (`EventsSection.jsx`)
- Dedicated showcase of all private and grand event types hosted at Shriji Resort with category filter pills:
  - **Wedding Parties & Receptions:** Grand Barat pathway, illuminated central mandap, 2,000 guest capacity, 25+ AC suites.
  - **Engagements & Ring Ceremonies:** Custom floral exchange stage, central AC hall, plush royal elder seating, gourmet welcome drinks.
  - **Birthday Parties & Milestones:** Theme backdrops, live DJ party lighting, poolside breeze, live chaat & mocktail counters.
  - **Retirement Parties & Corporate Meets:** Felicitation stage with AV podium, dignified round-table dining, photography memento corner.
  - **Mundan Sanskar & Sacred Pooja:** Auspicious Vedic havan setup, 100% satvik pure veg feasts, morning muhurat support, family suites.
  - **Anniversaries & Sangeet Nights:** Illuminated night canopy tents, spacious wooden dance floor, memory gallery wall.
- Each event card features direct "Book Event" and "WhatsApp" buttons prefilled with the event title.

### 6. 📸 Celebration Moments Gallery (`MomentsGallerySection.jsx`)
- Filter tabs for: *All Moments*, *Mandap & Lawn*, *Banquet & Dining*, *Pool & Resort*, and *Suites & Rooms*.
- Gold-framed royal image cards with subtle hover elevations.
- Interactive modal lightbox with keyboard navigation (`Esc`, `←`, `→`).

### 6. ⏳ 4-Phase Wedding Day Journey (`ExperienceSection.jsx`)
- Step-by-step visual timeline illustrating the wedding celebration flow:
  1. **Phase 01 (Evening):** Grand Barat Arrival & Welcome Pathway
  2. **Phase 02 (Twilight):** Sacred Phere & Sunset Mandap
  3. **Phase 03 (Night):** Imperial Banquet & VIP Lounge Feast
  4. **Phase 04 (Post Event):** Poolside Sundowner & Luxury Suites

### 7. 📜 Royal Quote Band (`QuoteBandSection.jsx`)
- Full-width dark aubergine banner with custom moving Jaali pattern SVG background.
- Poetic quote set in *Instrument Serif* italic typography.

### 8. 📅 Minimal Reservation & Instant Inquiry Form (`BookingEnquirySection.jsx`)
- **Warm Paper Card Form:** Full Name, Phone, Event Type, Date, and Special Requirements.
- **WhatsApp Integration:** Automatically packages reservation parameters into a prefilled WhatsApp enquiry message.
- **Minimalist Contact Buttons:** Sleek outline action pills for direct WhatsApp chat and instant phone dialing.
- **Masked Phone Numbers:** Security and privacy-focused display where contact numbers are masked by default (`+91 94251 •••••`) with interactive `<Eye />` / `<EyeOff />` visibility toggles and direct dial buttons.

### 9. 📍 Interactive Location & Google Map (`ContactLocationSection.jsx`)
- Full-width embedded interactive Google Map with corrected coordinates and location pin.
- Overlaid warm paper card displaying full address and landmarks.
- Direct "Get Directions" link opening Google Maps route navigation.

### 10. 📱 Floating Action Dock (`FloatingActions.jsx`)
- **Desktop:** Elegant right-edge vertical tab ("Plan Your Date") with slide-out quick inquiry panel.
- **Mobile:** Rounded frosted-glass bottom action dock pinned to viewport with one-touch Call, WhatsApp, and Booking actions.

---

## 🎨 Design System

| Element | Specification |
| :--- | :--- |
| **Primary Accent** | Terracotta (`#B5523B`, `#963D27`) |
| **Royal Gold** | Saffron / Gold (`#E8A33D`, `#F7C873`, `#D4AF37`) |
| **Deep Luxury Background** | Deep Aubergine (`#2B1620`, `#3D2230`) |
| **Warm Canvas Surfaces** | Warm Sand Paper (`#F3E9DC`, `#FBF6F0`) |
| **Display Typography** | `Fraunces` (Georgia / Serif, 300–900) |
| **Accent Typography** | `Instrument Serif` (Italic, 400) |
| **Body Typography** | `Figtree` (300–800, Sans-Serif) |

---

## 📱 200% Responsive Optimization

The entire layout is engineered to look flawless across all screen sizes:
- **Ultra-Wide Screens (>1440px):** Centered max-width containers (`1280px` – `1360px`) preventing awkward stretching.
- **Desktops & Laptops (1024px – 1439px):** Smooth expanding space panels, full horizontal nav pills, side quick-tab.
- **Tablets (768px – 1023px):** Fluid grid shifts, two-column form layout, collapsible mobile navigation drawer.
- **Mobile Devices (320px – 767px):** Single-column vertical stacking, compact typography clamps (`clamp(2.1rem, 5.5vw, 5rem)`), touch-optimized buttons, sticky bottom glass action dock.

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Icons:** Lucide React (`lucide-react`)
- **Celebration Effects:** Canvas Confetti (`canvas-confetti`)
- **Styling:** Vanilla CSS3 Design System with CSS Custom Properties
- **Deployment Platform:** Vercel

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/shriji-resort-website.git
   cd shriji-resort-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

4. **Build production bundle:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## ☁️ Deployment on Vercel

This repository includes a preconfigured [`vercel.json`](./vercel.json) for instantaneous zero-configuration deployment on Vercel:

```bash
# Deploy using Vercel CLI
npx vercel --prod
```

Or connect the GitHub repository directly to [vercel.com](https://vercel.com/new) for automated CI/CD deployments on every push.

---

## 📞 Venue Contact Information

- **Venue Name:** Shriji Resorts & Marriage Garden
- **Address:** Shiv Nagar Road, Near Makhan Lal Chaturvedi University, Allahabad Road, Rewa, Madhya Pradesh 486001
- **Direct Phone Lines:**
  - `+91 94251 86600` (Primary Booking Desk)
  - `+91 98272 55500` (Event Coordination Desk)
  - `+91 7662 292040` (Front Office)
- **WhatsApp:** `+91 94251 86600`
- **Hours:** Open 24 Hours / 7 Days a Week

---

*Handcrafted for Shriji Resorts & Marriage Garden, Rewa. All Rights Reserved.*
