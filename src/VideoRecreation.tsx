import { useEffect, useState } from "react";
import Stage from "./components/Stage";
import Backdrop from "./components/Backdrop";
import Hero from "./components/Hero";

/** The 1:1 recreation of the source video. Reachable at /?recreation */
export default function VideoRecreation() {
  const [run, setRun] = useState(0);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key.toLowerCase() === "r" && setRun((n) => n + 1);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <Stage>
      <Backdrop />
      <Hero key={run} />
    </Stage>
  );
}
