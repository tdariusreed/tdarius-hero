import { useLayoutEffect, useState, type ReactNode } from "react";
import { STAGE } from "../design/tokens";

/**
 * Fixed 1366×768 design canvas, uniformly scaled to fit the viewport
 * (letterboxed, like the exported video). All child coordinates are stage px.
 */
export default function Stage({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const fit = () =>
      setScale(Math.min(window.innerWidth / STAGE.width, window.innerHeight / STAGE.height));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="fixed inset-0 bg-stage">
      <div
        className="absolute left-1/2 top-1/2 overflow-hidden"
        style={{
          width: STAGE.width,
          height: STAGE.height,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
