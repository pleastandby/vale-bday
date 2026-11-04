# Roadmap

## Phase 1: Onboarding, Architecture & Dependencies (Completed)
- [x] Initialized codebase mapping and architecture documentation.
- [x] Installed `framer-motion`, `lucide-react`, `canvas-confetti`, `@types/canvas-confetti`, Tailwind CSS v4.
- [x] Verified build pipeline with React 19.

## Phase 2: Core Narrative Scenes Implementation (Completed)
- [x] Centralize birthday content and memory metadata in `src/data/birthdayContent.ts`.
- [x] Scene 01: `IntroScreen.tsx` — starry portal & envelope invitation.
- [x] Scene 01.5: `FlowerBouquet.tsx` — big bouquet of red roses with drifting rose petals and long-distance birthday note.
- [x] Scene 02: `BirthdayHero.tsx` — editorial dedication & scroll cue.
- [x] Scene 03: `ScrapbookGallery.tsx` & `LightboxModal.tsx` — polaroid cards & photo lightbox using `image 1.png`, `image 2.png`, `image 3.png`.
- [x] Scene 04: `AppreciationCards.tsx` — 3D flip appreciation cards.
- [x] Scene 05: `BirthdayLetter.tsx` — handcrafted stationery letter & wax seal featuring the destiny quote.
- [x] Scene 06: `GiftReveal.tsx` — interactive 3D gift box with popping lid & confetti.
- [x] Scene 07: `FinalCelebration.tsx` — birthday cake candle blow, confetti blasts & replay.

## Phase 3: Audio, Celestial Effects & Polish (Completed)
- [x] Web Audio API celestial synthesizer and floating `AudioToggle.tsx`.
- [x] Starfield canvas particle engine (`CelestialBackground.tsx`).
- [x] Oxlint verification passed with 0 errors and 0 warnings.
- [x] Full production build verified with Vite 8 and TypeScript 7.

## Phase 4: Production Deployment & Netlify Configuration (Completed)
- [x] Created root and subfolder `netlify.toml` configurations.
- [x] Configured SPA redirect rules (`_redirects` and `[[redirects]]`).
- [x] Added immutable caching headers for static assets (`/assets/*`).
- [x] Configured root `package.json` build delegation and `.gitignore`.
- [x] Production build tested and verified for Netlify deployment.
