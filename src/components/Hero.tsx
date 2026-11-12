import { motion, useReducedMotion } from "framer-motion";
import { SUB_LEFT, SUB_RIGHT, TITLE } from "../design/tokens";
import { RISE_PX, subtitleTransition, titleTransition } from "../design/motion";
import { useInkFit } from "../hooks/useInkFit";
import TypeLine from "./TypeLine";

const SPECS = [TITLE, SUB_LEFT, SUB_RIGHT] as const;

/**
 * Title rises 81 px while fading in; the subtitle row follows ~0.3 s later.
 * Both start after the font is measured, so t = 0 is the first painted frame.
 */
export default function Hero() {
  const fits = useInkFit(SPECS);
  const reduce = useReducedMotion();

  const from = reduce ? { y: 0, opacity: 1 } : { y: RISE_PX, opacity: 0 };
  const to = { y: 0, opacity: 1 };

  return (
    <>
      <h1 className="sr-only">T’Darius R</h1>
      <p className="sr-only">Atlanta, GA. Data analysis. Marketing.</p>

      {fits && (
        <>
          <motion.div
            className="absolute inset-0"
            initial={from}
            animate={to}
            transition={reduce ? { duration: 0 } : titleTransition}
          >
            <TypeLine spec={TITLE} fit={fits[0]} />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            initial={from}
            animate={to}
            transition={reduce ? { duration: 0 } : subtitleTransition}
          >
            <TypeLine spec={SUB_LEFT} fit={fits[1]} />
            <TypeLine spec={SUB_RIGHT} fit={fits[2]} />
          </motion.div>
        </>
      )}
    </>
  );
}
