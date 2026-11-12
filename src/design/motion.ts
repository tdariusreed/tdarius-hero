import type { Transition } from "framer-motion";

/** Ease-out power curve: 1 - (1 - t)^p. p=2 → easeOutQuad, p=3 → easeOutCubic. */
export const easeOutPow = (p: number) => (t: number) => 1 - Math.pow(1 - t, p);

/**
 * Fitted to per-frame measurements of the source (template-matched offsets and
 * luminance-derived opacity). Position RMSE ≈ 0.3 px (title), ≈ 1.2 px (subtitle);
 * opacity RMSE ≈ 0.01. Nothing else moves: the photo is a static plate.
 */
export const RISE_PX = 81;

export const titleTransition: Transition = {
  y:       { duration: 4.1, ease: easeOutPow(2.08) },
  opacity: { duration: 5.0, ease: easeOutPow(3.05) },
};

export const subtitleTransition: Transition = {
  y:       { delay: 0.32, duration: 4.19, ease: easeOutPow(2) },
  opacity: { delay: 0.41, duration: 5.23, ease: easeOutPow(2.63) },
};

export const CLIP_DURATION_S = 5; // length of the original video
