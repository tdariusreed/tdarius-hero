import { useEffect, useState } from "react";
import { FONT_STACK, FONT_WEIGHT } from "../design/tokens";

export interface TitleFit {
  fontSize: number; // px
  width: number;    // rendered advance width, px
  pad: number;      // side padding, px
}

/**
 * Sizes the name so it spans the viewport width, but never taller than
 * `maxCapRatio` of the viewport height. Measures the real loaded face (Extenda or
 * the Anton fallback) so the fit holds whichever one is active.
 */
export function useFitTitle(text: string, maxCapRatio = 0.44): TitleFit | null {
  const [fit, setFit] = useState<TitleFit | null>(null);

  useEffect(() => {
    let alive = true;

    const compute = () => {
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;
      ctx.font = `${FONT_WEIGHT} 100px ${FONT_STACK}`;
      const w100 = ctx.measureText(text).width;
      const cap100 = ctx.measureText("H").actualBoundingBoxAscent;
      const pad = Math.max(20, Math.min(56, window.innerWidth * 0.032));
      const byWidth = ((window.innerWidth - pad * 2) / w100) * 100;
      const byHeight = ((window.innerHeight * maxCapRatio) / cap100) * 100;
      const fontSize = Math.floor(Math.min(byWidth, byHeight));
      setFit({ fontSize, width: (w100 * fontSize) / 100, pad });
    };

    (async () => {
      try {
        await document.fonts.load(`${FONT_WEIGHT} 100px ${FONT_STACK}`, text);
        await document.fonts.ready;
      } catch { /* fall back to whatever is loaded */ }
      if (alive) compute();
    })();

    window.addEventListener("resize", compute);
    return () => {
      alive = false;
      window.removeEventListener("resize", compute);
    };
  }, [text, maxCapRatio]);

  return fit;
}
