import { STAGE, FONT_STACK, FONT_WEIGHT, INK, type LineSpec } from "../design/tokens";
import type { InkFit } from "../hooks/useInkFit";

interface Props {
  spec: LineSpec;
  fit: InkFit;
}

/** One line of display type, placed by ink box and baseline rather than CSS line boxes. */
export default function TypeLine({ spec, fit }: Props) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 overflow-visible"
      width={STAGE.width}
      height={STAGE.height}
      viewBox={`0 0 ${STAGE.width} ${STAGE.height}`}
      aria-hidden
    >
      <text
        x={fit.originOffset}
        y={0}
        transform={`translate(${spec.inkLeft} ${spec.baseline}) scale(${fit.scaleX} 1)`}
        fill={INK}
        fontFamily={FONT_STACK}
        fontWeight={FONT_WEIGHT}
        fontSize={fit.fontSize}
        style={{ fontKerning: "normal", textRendering: "geometricPrecision" }}
      >
        {spec.text}
      </text>
    </svg>
  );
}
