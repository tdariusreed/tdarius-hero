import { motion, type Variants } from "framer-motion";
import { CHALK, EASE_OUT_EXPO, MARKER } from "./motion";

interface Props {
  text: string;
  reduced: boolean;
  delay?: number;
  stagger?: number;
}

/**
 * The hero name's treatment, reused below the fold: letters rise out of a clipped baseline
 * one by one (once, when scrolled into view), and hovering a letter lifts it and flashes the
 * mural pink. The mask runs a little below the baseline so lowercase descenders (g, y) are
 * never cut. Words stay whole so long titles wrap cleanly. Put the accessible name on the
 * parent heading; this span is decorative.
 */
export default function RiseText({ text, reduced, delay = 0, stagger = 0.035 }: Props) {
  const letter: Variants = {
    hidden: { y: reduced ? "0%" : "125%", color: CHALK },
    shown: (n: number) => ({
      y: "0%",
      color: CHALK,
      transition: { duration: 1.1, delay: delay + n * stagger, ease: EASE_OUT_EXPO },
    }),
  };

  const words = text.split(" ");
  let n = 0;

  return (
    <motion.span
      aria-hidden
      className="block"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {words.map((word, w) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((ch) => {
              const i = n++;
              return (
                <span key={i} className="inline-block [clip-path:inset(-0.25em_-0.1em_-0.18em_-0.1em)]">
                  <motion.span
                    className="inline-block cursor-default"
                    variants={letter}
                    custom={i}
                    whileHover={{ y: "-4%", color: MARKER, transition: { type: "spring", stiffness: 420, damping: 18 } }}
                  >
                    {ch}
                  </motion.span>
                </span>
              );
            })}
          </span>
          {w < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
