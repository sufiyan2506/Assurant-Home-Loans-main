<div align="center">

# 🏡 Assurant Home Loans

**A premium, high-conversion single-page application for a Texas mortgage broker.**

5-star rated. Close in as little as 14 days. Conventional, FHA, VA, USDA, Jumbo, DSCR, and Non-QM loans.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)

</div>

## 📖 Overview

Assurant Home Loans is a marketing and lead-generation website built as a React single-page application. It pairs a luxury visual aesthetic with conversion-focused UX: a multi-step inquiry/application funnel, animated section reveals, social-proof carousels, and dedicated landing pages for every loan program the brokerage offers.

The site is fully client-side rendered and routed, with a shared layout shell wrapping a large set of program, refinance, resource, company, and legal pages.

## ✨ Features

- **Multi-step apply funnel** — Guided pre-qualification, quote, and application flows (`ApplyFunnel`), plus document upload and resume-application screens.
- **Dedicated loan-program pages** — Purchase, Conventional, FHA, VA, USDA, Jumbo, Commercial, DSCR, Bank Statement, Non-QM, Cash-Out Refinance, Rate/Term Refinance, and Reverse Mortgage.
- **Motion-driven UI** — Page transitions and scroll interactions powered by Framer Motion, with a branded preloader and a Lottie animation player.
- **Conversion components** — Inquiry modal, floating action buttons (call/quote), reviews carousel, trust indicators, and a value-stack section.
- **Resource & company sections** — Loan process, mortgage calculators, glossary, FAQs, blog, About, and Team pages.
- **Compliance pages** — Privacy policy, accessibility statement, licensing, and a Texas SML notice.
- **Accessible & responsive** — Skip-to-content link, semantic layout, and a mobile-first design that adapts across devices.

## 🛠️ Tech Stack

| Category    | Technology                                              |
| ----------- | ------------------------------------------------------- |
| Framework   | React 19                                                |
| Build Tool  | Vite 6                                                  |
| Language    | TypeScript 5.8                                          |
| Routing     | React Router v7 (`BrowserRouter`)                       |
| Animations  | Framer Motion 12 + Lottie (`@lottiefiles/lottie-player`)|
| Icons       | Lucide React                                            |
| Styling     | Tailwind CSS (Play CDN) + custom theme & `index.css`    |
| Fonts       | Playfair Display (serif) + DM Sans (sans-serif)         |

## 📂 Project Structure

> **Note:** The application lives in a nested `Assurant-Home-Loans-main/` folder inside the repository.

```text
Assurant-Home-Loans-main/         # Project root (nested inside the repo)
├── components/                   # Shared UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── ReviewsCarousel.tsx
│   ├── TrustIndicators.tsx
│   ├── ValueStack.tsx
│   ├── OverseasSection.tsx
│   ├── InquiryModal.tsx
│   ├── FloatingActions.tsx
│   ├── Preloader.tsx
│   ├── ScrollToTop.tsx
│   └── Footer.tsx
├── src/
│   ├── layouts/
│   │   └── MainLayout.tsx         # Page shell: navbar + footer + content
│   ├── pages/                     # Route-level page components
│   │   ├── Home.tsx
│   │   ├── PurchaseLoans.tsx
│   │   ├── MortgagePages.tsx      # Conventional, FHA, VA, Jumbo, USDA
│   │   ├── CommercialLoans.tsx
│   │   ├── RateTermRefinance.tsx
│   │   ├── InvestorRefiPages.tsx  # DSCR, Cash-Out, Bank Statement, Non-QM, Reverse
│   │   ├── ApplyFunnel.tsx        # Multi-step inquiry / application funnel
│   │   ├── ApplicationStatusPages.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── CompanyPages.tsx       # About, Team
│   │   ├── LegalPages.tsx         # Privacy, Accessibility, Licensing, Texas SML
│   │   ├── Contact.tsx
│   │   └── GenericProductPage.tsx
│   └── context/
│       └── UIContext.tsx          # Global UI state (modals, etc.)
├── public/
│   └── assurant-logo.svg
├── App.tsx                        # Route definitions
├── index.tsx                      # Application entry point
├── index.html                     # HTML shell: Tailwind config, fonts, importmap
├── index.css                      # Global styles
├── types.ts                       # Shared TypeScript types
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** (or yarn / pnpm)

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/sufiyan2506/Assurant-Home-Loans-main.git

# 2. Enter the project directory (it lives one folder deep)
cd Assurant-Home-Loans-main/Assurant-Home-Loans-main

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The app runs at **[http://localhost:3000](http://localhost:3000)** and hot-reloads as you edit.

### Production Build

```bash
npm run build     # Bundle the app into the dist/ folder
npm run preview   # Serve the production build locally to verify it
```

## 🧭 Routes

| Section            | Routes                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Home               | `/`                                                                                                                                             |
| Purchase / Mortgage| `/mortgage/purchase-loans`, `/mortgage/conventional-loans`, `/mortgage/fha-loans`, `/mortgage/va-loans`, `/mortgage/jumbo-loans`, `/mortgage/usda-loans`, `/mortgage/commercial-loans` |
| Refinance          | `/refinance/rate-term-refinance`, `/refinance/cash-out-refinance`, `/refinance/reverse-mortgage`                                                |
| Investor / Non-QM  | `/investors/dscr-loans`, `/investors/bank-statement-loans`, `/investors/non-qm-loans`                                                           |
| Apply & Closings   | `/closings/apply`, `/closings/pre-qualification`, `/closings/get-a-quote`, `/closings/upload-documents`, `/closings/resume-application`          |
| Resources          | `/resources/loan-process`, `/resources/mortgage-calculators`, `/resources/mortgage-glossary`, `/resources/faqs`, `/resources/blog`              |
| Company            | `/company/about`, `/company/team`, `/contact`                                                                                                   |
| Legal              | `/legal/privacy-policy`, `/legal/accessibility`, `/legal/licensing`, `/legal/texas-sml-notice`                                                  |

## 🎨 Design System

The visual identity is configured inline in `index.html` via the Tailwind theme:

- **Brand purple** (`#7B2D8E`) as the primary accent, with full `navy`, `sage`, and `warm` neutral palettes.
- **Typography** — Playfair Display for headings, DM Sans for body text.
- **Base** — Warm ivory background (`#faf8f5`) with deep charcoal text.

## ☁️ Deployment

Since this is a static Vite build, it can be deployed to any static host — [Vercel](https://vercel.com/new), [Netlify](https://www.netlify.com/), Cloudflare Pages, or GitHub Pages.

```bash
npm run build   # produces the dist/ folder to deploy
```

> **Important:** The app uses client-side routing (`BrowserRouter`). Configure your host to rewrite all paths to `index.html` (an SPA fallback) so that deep links and page refreshes resolve correctly.

## 📝 Notes

- **Tailwind via CDN** — Styling uses the Tailwind Play CDN (`cdn.tailwindcss.com`), which is ideal for prototyping. For a production build you'd typically install Tailwind as a dev dependency and compile it.
- **CDN imports** — Several libraries are also loaded at runtime through an `importmap` (esm.sh) in `index.html`.
- **No API key required** — The original scaffold referenced a `GEMINI_API_KEY` in `vite.config.ts`, but it isn't used anywhere in the code, so no `.env` file is needed to run the site.
- **Tooling** — No automated tests or lint configuration are set up yet. The `package.json` also still carries a placeholder project name worth updating.

## 📄 License & Disclaimer

No license file is included in this repository. All branding, copy, and assets are the property of **Assurant Home Loans**. This codebase is a marketing website for a specific licensed mortgage brokerage (NMLS #1767773) and is not a general-purpose template.
