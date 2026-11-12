export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const CHALK = "#f1f3f2";
export const MARKER = "#ff6aa9";

/** Opening: black lifts → name rises → details settle. */
export const INTRO = {
  curtain: { duration: 1.6, delay: 0.1 },
  title:   { delay: 1.0, stagger: 0.05, duration: 1.25 },
  details: { delay: 2.0 },
} as const;
