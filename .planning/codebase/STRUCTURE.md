# Project Structure

```text
Vale/
├── instructions.md               # Original project brief & design specification
├── .planning/                    # GSD project plans, architecture, and onboarding state
│   ├── codebase/
│   │   ├── STACK.md
│   │   ├── ARCHITECTURE.md
│   │   ├── STRUCTURE.md
│   │   ├── CONVENTIONS.md
│   │   ├── TESTING.md
│   │   ├── INTEGRATIONS.md
│   │   └── CONCERNS.md
│   ├── onboarding/
│   │   └── SUMMARY.md
│   ├── PROJECT.md
│   ├── REQUIREMENTS.md
│   ├── ROADMAP.md
│   └── STATE.md
└── Vale-bday/                    # React 19 + TypeScript + Vite project
    ├── public/
    │   ├── favicon.svg
    │   └── ...
    ├── src/
    │   ├── assets/               # SVGs, icons, static illustrations
    │   ├── images/               # Personalized photos: image 1.png, image 2.png, image 3.png
    │   ├── components/
    │   │   ├── IntroScreen.tsx        # Scene 01: Ambient starry landing & envelope
    │   │   ├── BirthdayHero.tsx       # Scene 02: Editorial hero intro & scroll cue
    │   │   ├── ScrapbookGallery.tsx   # Scene 03: Polaroid cards & masonry scrapbook
    │   │   ├── LightboxModal.tsx      # High-res photo lightbox with keyboard navigation
    │   │   ├── AppreciationCards.tsx  # Scene 04: Interactive flip cards
    │   │   ├── BirthdayLetter.tsx     # Scene 05: Handcrafted editorial letter & wax seal
    │   │   ├── GiftReveal.tsx         # Scene 06: 3D interactive gift box
    │   │   ├── FinalCelebration.tsx   # Scene 07: Cake candles, confetti & replay
    │   │   ├── AudioToggle.tsx        # Ambient sound synthesizer & volume/mute control
    │   │   └── CelestialBackground.tsx # Interactive background canvas & twinkling stars
    │   ├── data/
    │   │   └── birthdayContent.ts     # Centralized, editable content for all scenes
    │   ├── utils/
    │   │   └── soundscape.ts          # Web Audio API celestial chime & pad generator
    │   ├── App.tsx                    # Main container orchestrating scenes & modal state
    │   ├── App.css                    # Keyframe animations and custom visual styling
    │   ├── index.css                  # Tailwind CSS 4 directives, luxury color palette
    │   └── main.tsx                   # React root mount
    ├── index.html                     # HTML shell, Google Fonts preload & title
    ├── package.json                   # Dependencies and build scripts
    ├── tsconfig.json                  # TypeScript compiler settings
    └── vite.config.ts                 # Vite bundler plugins and Tailwind config
```

