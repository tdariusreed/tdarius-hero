import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { EASE_OUT_EXPO } from "./motion";

interface Props {
  children: ReactNode;
  delay: number;
  reduced: boolean;
  className?: string;
  /** Play when scrolled into view instead of on mount (used below the hero). */
  inView?: boolean;
}

/** Text that rises out of an invisible baseline. Clip extends up/sideways so nothing is cut off. */
export default function MaskLine({ children, delay, reduced, className, inView }: Props) {
  // Observe the wrapper: browsers apply an element's clip-path to its children's visibility,
  // so the child, parked below the mask, would never register as on screen.
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const play = !inView || seen;
  const hidden = reduced ? "0%" : "115%";

  return (
    <span ref={ref} className={`inline-block [clip-path:inset(-0.3em_-0.2em_0_-0.2em)] ${className ?? ""}`}>
      <motion.span
        className="inline-block"
        initial={{ y: hidden }}
        animate={{ y: play ? "0%" : hidden }}
        transition={{ duration: 1.1, delay, ease: EASE_OUT_EXPO }}
      >
        {children}
      </motion.span>
    </span>
  );
}
