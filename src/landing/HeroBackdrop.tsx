import { motion, useTransform, type MotionValue } from "framer-motion";
import { INTRO } from "./motion";

interface Props {
  progress: MotionValue<number>;
  reduced: boolean;
  src?: string;
}

/**
 * Plain full-bleed photo in its natural colour with a dark overlay for contrast.
 * Scroll pushes the photo in slightly and deepens the overlay.
 */
export default function HeroBackdrop({ progress, reduced, src = "/assets/plate.jpg" }: Props) {
  const scale = useTransform(progress, [0, 1], [1, 1.14]);
  const y = useTransform(progress, [0, 1], ["0%", "-7%"]);
  const scrollDark = useTransform(progress, [0, 1], [0, 0.5]);

  return (
    <div className="absolute inset-0 bg-ink" aria-hidden>
      <motion.div className="absolute inset-0" style={{ scale, y }}>
        <img
          src={src}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover object-center"
        />
      </motion.div>

      {/* dark overlay: even tint, heavier toward the foot where the name sits */}
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,11,12,0.8)_0%,transparent_55%)]" />
      <motion.div className="absolute inset-0 bg-ink" style={{ opacity: scrollDark }} />

      {/* opening fade from black */}
      {!reduced && (
        <motion.div
          className="absolute inset-0 bg-ink"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ ...INTRO.curtain, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
