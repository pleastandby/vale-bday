# Project Brief: A Little Universe for Vale

## 1. Project Overview

Create a beautiful, interactive, personalized birthday website for **Valerie (aka Vale)**.

The website should feel like a thoughtfully crafted digital birthday experience rather than a generic birthday landing page.

The central concept:

**"A Little Universe Made Just for Vale."**

The experience should unfold progressively, allowing Vale to discover different sections, interactive elements, personal messages, surprises, and a final birthday celebration.

The overall feeling should be warm, playful, elegant, nostalgic, and emotionally meaningful without being excessively romantic.

This is a birthday gift from a friend, so maintain a genuine friendship-oriented tone.

## 2. Visual Direction

**Aesthetic:** Dreamy editorial meets interactive digital scrapbook.

Design references:
- Minimal editorial websites.
- Interactive digital journals.
- Vintage scrapbook aesthetics.
- Soft atmospheric gradients.
- Film photography and Polaroid compositions.
- Subtle celestial elements.
- Modern typography and generous whitespace.

### Colour palette
Use a sophisticated palette:
- Warm ivory: `#F8F4ED`
- Dusty rose: `#D9A6A0`
- Muted lavender: `#B9ADD9`
- Deep plum: `#352B46`
- Soft gold: `#D6B875`

Use these as starting points, adjusting contrast where necessary.

### Typography
- Display: Playfair Display or Cormorant Garamond.
- Body: DM Sans or Inter.
- Accent: A subtle handwritten font for annotations.

Avoid excessive font combinations.

## 3. Website Structure and Experience

### Scene 01 — The Invitation

Create an immersive opening screen.

Main text:

"Hey, Vale."

Supporting text:

"Someone left a little something for you."

Include:
- A subtle animated starfield or floating particles.
- A small illustrated envelope or gift.
- A button labelled "Open your little surprise".
- Smooth entrance animation.
- Gentle ambient motion.

Clicking the button should transition into the main experience.

### Scene 02 — A Birthday Introduction

Large editorial typography:

"Today, the universe has one particular person to celebrate."

Highlight the name:

"VALERIE."

Add a short introductory message:

"Some people make ordinary conversations a little less ordinary. Some turn random moments into memories. And some deserve a whole webpage dedicated to them. Well, here we are."

Include a subtle scroll indicator.

### Scene 03 — The Digital Scrapbook

Create a visually rich photo gallery.

Use:
- Polaroid-style image cards.
- Slightly rotated photographs.
- Handwritten captions.
- Film grain textures.
- Soft shadows.
- Hover animations.

Each image should be clickable to open a larger lightbox.

Important:
- Use replaceable image placeholders.
- Allow adding captions beneath each image.
- Maintain a responsive masonry or editorial grid layout.
- Never stretch or distort photographs.

### Scene 04 — A Few Things About You

Create an interactive collection of little appreciation cards.

Possible headings:

- "Your kind of chaos"
- "Things that make you, you"
- "Your underrated superpowers"
- "Reasons you're appreciated"

Each card should reveal its message when clicked.

Use placeholder text that can later be personalized.

Avoid inventing specific personality traits or memories. Make all personal details editable.

### Scene 05 — A Little Message

Create a dedicated letter section with a beautiful editorial layout.

Heading:

"A little something I wanted you to know."

Message:

"Hey Vale,

Happy birthday!

I hope this new chapter brings you countless reasons to smile, unexpected adventures, beautiful memories, and opportunities that make you proud of yourself.

Keep being unapologetically yourself. Never lose the little things that make you who you are.

You deserve good things, wonderful experiences, and people who genuinely appreciate having you around.

Here's to another year of becoming, discovering, laughing, and living.

Happy birthday, Vale. Have an absolutely wonderful one!"

Keep the message editable.

### Scene 06 — The Surprise Box

Create an interactive 3D-inspired gift box.

When clicked:
- The lid opens with a smooth animation.
- Confetti or small stars emerge.
- A hidden birthday message appears.

Message:

"ONE MORE YEAR OF BEING WONDERFULLY YOU."

Include a playful secondary message:

"Congratulations! You've officially unlocked another year of adventures."

### Scene 07 — The Final Birthday Reveal

Create a visually impressive final celebration.

Main heading:

"HAPPY BIRTHDAY, VALE!"

Supporting text:

"May life surprise you in the loveliest ways."

Include:
- Animated confetti.
- Floating balloons or celestial particles.
- A subtle birthday cake illustration.
- A replay experience button.
- A small footer: "Made with care, just for Vale."

## 4. Interaction and Animation Requirements

Use Framer Motion for:
- Page transitions.
- Scroll-triggered reveals.
- Staggered typography.
- Hover interactions.
- Gallery interactions.
- Gift-opening animation.
- Confetti transitions.

Interactions should feel intentional, fluid, and polished.

Avoid:
- Excessive bouncing.
- Unnecessary spinning elements.
- Aggressive parallax.
- Overwhelming animations.
- Long loading transitions.

Respect `prefers-reduced-motion`.

## 5. Technical Requirements

Preferred stack:
- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Icons where appropriate

Architecture:
- Component-based structure.
- Reusable UI elements.
- Centralized editable birthday content.
- Responsive layouts.
- Semantic HTML.
- Accessible buttons and interactive controls.

Suggested project structure:

```text
src/
├── components/
│   ├── IntroScreen.jsx
│   ├── BirthdayHero.jsx
│   ├── ScrapbookGallery.jsx
│   ├── AppreciationCards.jsx
│   ├── BirthdayLetter.jsx
│   ├── GiftReveal.jsx
│   ├── FinalCelebration.jsx
│   └── AudioToggle.jsx
├── data/
│   └── birthdayContent.js
├── assets/
│   ├── images/
│   ├── audio/
│   └── textures/
├── App.jsx
├── index.css
└── main.jsx
```

## 6. Audio

Optionally include a gentle ambient instrumental soundtrack.

Requirements:
- Audio must not autoplay with sound.
- Provide a visible music toggle.
- Remember that browsers may require user interaction before playback.
- Include a graceful experience when no audio file is provided.

## 7. Responsive Design

Optimize for:
- Mobile-first viewing.
- Desktop screens.
- Tablets.

The experience should look particularly beautiful on mobile because the recipient will likely open the birthday link on her phone.

Use smooth transitions without compromising performance.

## 8. Final Quality Requirements

The final result must:
- Feel like a custom-made birthday gift.
- Avoid generic birthday-template aesthetics.
- Have a coherent visual identity.
- Include working interactions, not decorative fake buttons.
- Use realistic image placeholders that are easy to replace.
- Avoid fabricated memories or personal details.
- Maintain consistent spacing, typography, and animation timing.
- Have no broken links, console errors, or unfinished sections.

**Final creative direction:**

Make it feel as though someone spent an evening carefully putting together a tiny digital world for a person they genuinely appreciate.

It should be memorable, delightful, personal, and beautifully executed.