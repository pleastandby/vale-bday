# Concerns & Technical Considerations

## Browser Autoplay Policy
Modern browsers (Chrome, Safari, iOS, Firefox) block audio playback unless initiated by an explicit user gesture (such as clicking the audio toggle or entering the experience).
- **Mitigation**: Audio is off by default. The user is provided with a floating audio toggle with clear indicator states (Muted / Playing) and equalizer animation. The Web Audio context is initialized and resumed only on click.

## Image Aspect Ratio & Orientation
Photos may have different aspect ratios (portrait, landscape, square).
- **Mitigation**: Polaroid frames use flexible responsive dimensions with `object-fit: cover` and preserved aspect ratio in thumbnails, plus full unrestrained view in the Lightbox modal.

## Motion & Accessibility
Heavy animations can cause disorientation or battery drain.
- **Mitigation**: Respect `prefers-reduced-motion` media queries; keep starfield particles subtle on canvas with RAF throttling.

