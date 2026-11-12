/**
 * Every number below was measured from the 1366×768, 30 fps source video
 * (final frame, t ≥ 4.5 s). Coordinates are in stage pixels.
 */
export const STAGE = { width: 1366, height: 768 } as const;

export const FONT_STACK = '"Extenda 30 Deca", "Anton", Impact, sans-serif';
export const FONT_WEIGHT = 400;
export const INK = "#121212";

export interface LineSpec {
  text: string;
  /** x of the left edge of the first glyph's ink */
  inkLeft: number;
  /** horizontal ink extent (first glyph → last glyph) */
  inkWidth: number;
  /** y of the baseline (bottom edge of flat-bottomed capitals) */
  baseline: number;
  /** height of flat capitals (e.g. "H") */
  capHeight: number;
}

export const TITLE: LineSpec = {
  text: "T’DARIUS R",
  inkLeft: 292,
  inkWidth: 812,
  baseline: 486,
  capHeight: 280,
};

export const SUB_LEFT: LineSpec = {
  text: "ATLANTA, GA.",
  inkLeft: 305,
  inkWidth: 191,
  baseline: 573,
  capHeight: 60,
};

export const SUB_RIGHT: LineSpec = {
  text: "DATA ANALYSIS. MARKETING.",
  inkLeft: 670,
  inkWidth: 423,
  baseline: 573,
  capHeight: 60,
};
