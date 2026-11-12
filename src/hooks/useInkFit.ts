import { useEffect, useState } from "react";
import { FONT_STACK, FONT_WEIGHT, type LineSpec } from "../design/tokens";

export interface InkFit {
  fontSize: number;
  /** horizontal scale that stretches the ink to the measured width */
  scaleX: number;
  /** distance the ink extends left of the text origin, in unscaled px */
  originOffset: number;
}

/**
 * Font-agnostic fitting. Measures the real ink box with canvas, then picks a
 * font size whose capital height equals spec.capHeight and a horizontal scale
 * whose ink width equals spec.inkWidth. The type occupies the same boxes as the
 * video, whichever face actually loaded.
 */
export function useInkFit(specs: readonly LineSpec[]): InkFit[] | null {
  const [fits, setFits] = useState<InkFit[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await document.fonts.load(`${FONT_WEIGHT} 100px ${FONT_STACK}`, "H");
        await document.fonts.ready;
      } catch {
        /* canvas will use the fallback face */
      }
      if (cancelled) return;

      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;

      ctx.font = `${FONT_WEIGHT} 100px ${FONT_STACK}`;
      const cap100 = ctx.measureText("H").actualBoundingBoxAscent;

      const next = specs.map((spec) => {
        const fontSize = (100 * spec.capHeight) / cap100;
        ctx.font = `${FONT_WEIGHT} ${fontSize}px ${FONT_STACK}`;
        const m = ctx.measureText(spec.text);
        const inkW = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
        return {
          fontSize,
          scaleX: spec.inkWidth / inkW,
          originOffset: m.actualBoundingBoxLeft,
        };
      });

      if (!cancelled) setFits(next);
    })();

    return () => {
      cancelled = true;
    };
  }, [specs]);

  return fits;
}
