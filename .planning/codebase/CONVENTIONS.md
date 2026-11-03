# Coding Conventions & Design Principles

## Color Palette Tokens
- **Warm Ivory (`#F8F4ED`)**: Base canvas, parchment letter, polaroid border
- **Dusty Rose (`#D9A6A0`)**: Romantic-yet-warm accents, borders, soft highlights
- **Muted Lavender (`#B9ADD9`)**: Cosmic nebulae, glowing gradients, secondary badges
- **Deep Plum (`#352B46`)**: High-contrast editorial typography, deep midnight overlays
- **Soft Gold (`#D6B875`)**: Stars, wax seal, ribbons, sparkles, celebration accents

## Typography Rules
- **Serif Display**: `font-serif` (Playfair Display / Cormorant Garamond) for headings and emotional statements
- **Sans Body**: `font-sans` (DM Sans / Inter) for modern, legible body prose
- **Script Accent**: `font-handwriting` (Caveat) for handwritten notes, Polaroid scribbles, and intimate annotations

## Component Guidelines
- Use React 19 functional components with TypeScript props interfaces.
- Respect `prefers-reduced-motion` for accessibility.
- Keep animation easing smooth (`[0.22, 1, 0.36, 1]` cubic bezier).
- All interactive elements must support keyboard focus (`focus-visible:ring`) and clear touch targets (min 44x44px).

