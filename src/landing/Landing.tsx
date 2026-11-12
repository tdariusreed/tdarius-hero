import { useRef } from "react";
import { useReducedMotion, useScroll } from "framer-motion";
import HeroBackdrop from "./HeroBackdrop";
import HeroTitle from "./HeroTitle";
import Nav from "./Nav";
import Work from "./Work";
import About from "./About"; 
import Experience from "./Experience"; 
import Fun from "./Fun"; 
import { useFitTitle } from "./useFitTitle";
import { useSmoothScroll } from "./useSmoothScroll";

export default function Landing() {
  const reduced = !!useReducedMotion();
  useSmoothScroll(!reduced);

  const runway = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runway, offset: ["start start", "end end"] });
  const fit = useFitTitle("T’DARIUS R");
  const pad = fit?.pad ?? 32;

  return (
    <main>
      {/* 200svh runway: the hero is pinned for the first 100svh of scrolling */}
      <div ref={runway} className="relative h-[200svh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          <HeroBackdrop progress={scrollYProgress} reduced={reduced} />
          <Nav pad={pad} reduced={reduced} />
          {fit && <HeroTitle fit={fit} progress={scrollYProgress} reduced={reduced} />}
        </div>
      </div>
      <About reduced={reduced} />
      <Experience reduced={reduced} />
      <Work reduced={reduced} />
      <Fun reduced={reduced} />
    </main>
  );
}
