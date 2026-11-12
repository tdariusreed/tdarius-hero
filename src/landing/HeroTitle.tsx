import { motion, useTransform, type MotionValue } from "framer-motion";
import { CHALK, EASE_OUT_EXPO, INTRO, MARKER } from "./motion";
import type { TitleFit } from "./useFitTitle";
import MaskLine from "./MaskLine";

const NAME = "T’DARIUS R";

interface Props {
  fit: TitleFit;
  progress: MotionValue<number>;
  reduced: boolean;
}

/**
 * The name, left-anchored at the foot of the page. Letters rise one by one; hovering a
 * letter lifts it and flashes the mural pink. The "ATLANTA, GA. / DATA ANALYSIS. MARKETING."
 * split row under it is carried over from the original video.
 */
export default function HeroTitle({ fit, progress, reduced }: Props) {
  const y = useTransform(progress, [0, 1], ["0vh", "-16vh"]);
  const subSize = Math.max(16, Math.min(40, fit.width * 0.034));

  return (
    <motion.div className="absolute bottom-0 left-0" style={{ paddingLeft: fit.pad, paddingBottom: fit.pad, y }}>
      <h1
        aria-label="T’Darius R"
        className="font-display m-0 whitespace-nowrap text-chalk"
        style={{ fontSize: fit.fontSize, lineHeight: 1, marginBottom: "-0.1em" }}
      >
        <span aria-hidden className="flex">
          {[...NAME].map((ch, i) => (
            <span key={i} className="inline-block [clip-path:inset(-0.25em_-0.1em_0_-0.1em)]">
              <motion.span
                className="inline-block cursor-default"
                initial={{ y: reduced ? "0%" : "112%", color: CHALK }}
                animate={{ y: "0%", color: CHALK }}
                transition={{
                  duration: INTRO.title.duration,
                  delay: INTRO.title.delay + i * INTRO.title.stagger,
                  ease: EASE_OUT_EXPO,
                }}
                whileHover={{ y: "-4%", color: MARKER, transition: { type: "spring", stiffness: 420, damping: 18 } }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            </span>
          ))}
        </span>
      </h1>

      <div
        className="font-display mt-[0.9vh] flex justify-between text-chalk/90"
        style={{ width: fit.width, fontSize: subSize, lineHeight: 1.1 }}
      >
        <MaskLine delay={INTRO.details.delay} reduced={reduced}>Atlanta, GA.</MaskLine>
        <MaskLine delay={INTRO.details.delay + 0.12} reduced={reduced}>Data analysis. Marketing.</MaskLine>
      </div>
    </motion.div>
  );
}
