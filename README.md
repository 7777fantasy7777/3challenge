## 3challenge – High‑Conversion Landing Page

This repository contains a modern, high‑conversion landing page built with React, TypeScript, Tailwind CSS, and shadcn‑ui.  
It showcases multiple product case studies (including Starbucks Bearista), real member results, dynamic reviews loaded from JSON, and smooth visual animations.

---

### Overview

The application is a single‑page marketing site designed to highlight:

- **Hero & Value Proposition** – Clear headline, supporting copy, and primary call‑to‑action.
- **Social Proof & Stats** – Sections such as `StatsSection`, `SocialProofSection`, and dynamic `ReviewsSection` using `review.json`.
- **Case Studies / Drops** – Visual showcases including the Starbucks Bearista image carousel and other product success stories.
- **Pricing / Offer Explanation** – How the service works, why it’s different, and checkout integration via the `WhopCheckoutSection`.

All sections are implemented as reusable React components under `src/components`.

---

### Tech Stack

- **Framework**: React + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **UI Library**: shadcn‑ui (Radix‑based components)
- **Tooling**: ESLint, TypeScript, PostCSS

---

### Getting Started

#### Prerequisites

- **Node.js**: v18+ (recommended)
- **Package manager**: npm (or bun / pnpm if you prefer, adjust commands accordingly)

#### Installation

```sh
git clone <YOUR_REPOSITORY_URL>
cd 3challenge

# Install dependencies
npm install
```

#### Development

```sh
# Start the dev server (default: http://localhost:5173)
npm run dev
```

#### Production Build

```sh
npm run build

# (optional) Preview the production build locally
npm run preview
```

---

### Project Structure (High Level)

- **`src/main.tsx`** – React entry point.
- **`src/pages/Index.tsx`** – Main landing page composition.
- **`src/components`** – All UI sections such as:
  - `HeroSection`
  - `StatsSection`
  - `PriceErrorsSection`
  - `DropShowcaseSection` (Starbucks Bearista image marquee)
  - `ReviewsSection` and `ReviewsModal`
  - `WhopCheckoutSection`, `CTASection`, and more.
- **`src/index.css`** – Global styles and custom keyframe animations (e.g., horizontal scroll for image rows).
- **`public/review.json`** – Cleaned review data used to power the reviews section.
- **`public/assets`** – Marketing imagery (Starbucks, top‑counting, avatars, etc.).

---

### Reviews Data

- Review data is stored in `public/review.json` in the shape:
  - **`totalCount`**: total number of reviews.
  - **`reviews`**: array of raw review objects (id, description, stars, timestamps, user info).
- `ReviewsSection` parses this file, normalizes the data (names, initials, timestamps), and displays:
  - Highlighted summary with average rating and distribution.
  - Paginated modal (`ReviewsModal`) for browsing all reviews.

If you change the JSON structure, ensure you update the parsing logic in `ReviewsSection.tsx` accordingly.

---

### Image Showcases

- Starbucks Bearista images live under `public/assets/starbuck`.
- `DropShowcaseSection` renders two horizontally scrolling rows:
  - **Top row** scrolls left.
  - **Bottom row** scrolls right.
- The component loops through all 8 images and duplicates them to create a seamless marquee effect.

You can replace these assets with your own images as long as you keep the file paths or adjust the component accordingly.

---

### Scripts

Common npm scripts defined in `package.json`:

- **`npm run dev`** – Start development server.
- **`npm run build`** – Create production build.
- **`npm run preview`** – Preview the production build locally.
- **`npm run lint`** – Run linting (if configured in `package.json`).

---

### Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-change`.
3. Commit your changes: `git commit -m "Add my change"`.
4. Push to the branch: `git push origin feature/my-change`.
5. Open a pull request describing your updates.

---

### License

Specify your preferred license here (for example, MIT or a proprietary notice) based on how you intend to use and distribute this project.
