import { motion } from "framer-motion";
import RollLink from "./RollLink";
import { INTRO } from "./motion";

/** Right-aligned on purpose: the mural's "COLOR ME!" note owns the top-left. */
export default function Nav({ pad, reduced }: { pad: number; reduced: boolean }) {
  return (
    <motion.nav
      aria-label="Primary"
      className="font-display absolute right-0 top-0 flex gap-[clamp(18px,2.2vw,40px)] text-[clamp(16px,1.35vw,22px)]"
      style={{ padding: pad }}
      initial={{ opacity: reduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: INTRO.details.delay }}
    >
      <RollLink href="#about">About</RollLink>
      <RollLink href="#experience">Experience</RollLink>
      <RollLink href="#projects">Projects</RollLink>
      <RollLink href="#fun">The Fun Stuff</RollLink>
      <RollLink href="https://www.linkedin.com/in/tdariusreed" target="_blank" rel="noreferrer">Contact</RollLink>
    </motion.nav>
  );
}
