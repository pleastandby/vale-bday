# Testing & Quality Verification

## Verification Strategy
- **TypeScript Compilation**: `npm run build` verifies full type safety across components, props, and data models.
- **Linting**: Oxlint execution checks for syntax and React 19 compiler compatibility.
- **Cross-Device Responsiveness**: Verified across mobile (iPhone SE 375px, modern mobile 390-430px), tablet (768-1024px), and desktop (1280px+).
- **Interactive Verification**:
  - Invitation click triggers smooth unlock.
  - Lightbox opens on Polaroid click, displays full image, caption, and closes on Escape or backdrop click.
  - Flip cards toggle smoothly between front title and back message.
  - Surprise gift opens lid, fires confetti, and presents the secret message.
  - Cake candle blows out on click with puff animation and celebratory fireworks.
  - Replay button smoothly resets state and scrolls back to the beginning.
  - Audio toggle activates Web Audio API harmonic soundscape gracefully upon user gesture.

