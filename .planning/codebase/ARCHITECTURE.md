# Architecture

## Overview
"A Little Universe for Vale" is an interactive, narrative-driven digital birthday gift application built with React 19, TypeScript, and Vite. Rather than a static landing page, the application is orchestrated as a 7-scene progressive journey:

1. **Scene 01 — The Invitation**: An ethereal starry portal with a floating interactive gift/envelope inviting Vale into her universe.
2. **Scene 02 — A Birthday Introduction**: Editorial typography spotlighting Valerie with an affectionate, friendship-centered dedication.
3. **Scene 03 — The Digital Scrapbook**: Vintage Polaroid gallery with textured tape, realistic shadows, handwritten captions, and a full-featured lightbox viewer featuring Valerie's photos (`image 1.png`, `image 2.png`, `image 3.png`).
4. **Scene 04 — A Few Things About You**: Interactive, flippable keepsake cards celebrating her quirks, chaos, superpowers, and presence.
5. **Scene 05 — A Little Message**: Handcrafted stationery letter with warm, uplifting birthday wishes and gold wax seal accent.
6. **Scene 06 — The Surprise Box**: Interactive 3D gift box with animated lifting lid, sparkling particle bursts, and an unlocked celebration message.
7. **Scene 07 — The Final Birthday Reveal**: Grand finale with interactive birthday cake (blow out candles), animated confetti showers, floating celestial particles, and replay capability.

## Data Layer & Extensibility
All text, images, captions, and appreciation cards are isolated into `src/data/birthdayContent.ts`. This ensures:
- Zero hardcoded text across UI components.
- Effortless personalization and modification without breaking UI logic.
- Type-safe schema definitions for memories, cards, and scene content.

