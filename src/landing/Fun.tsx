import { useState } from "react";
import InterestRow from "./InterestRow";
import { INTERESTS, INTERESTS_INTRO } from "./interests";
import RiseText from "./RiseText";
import { COLS } from "./WorkRow";

export default function Fun({ reduced }: { reduced: boolean }): import("react").JSX.Element {
  // One Spotify player at a time: opening another row's closes this one.
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section
      id="fun"
      aria-labelledby="fun-title"
      className="relative z-10 bg-ink px-[var(--pad)] pb-[10svh] pt-[14svh] [--pad:clamp(20px,3.2vw,56px)]"
    >
      <div className={`${COLS} items-start gap-y-8`}>
        <h2
          id="fun-title"
          aria-label="Fun"
          
          className="font-display m-0 text-[clamp(50px,16vw,100px)] leading-[0.85] text-chalk">
          <RiseText text="The Fun Stuff" reduced={reduced} />
        </h2>
        <div className="md:pt-[0.6vw]">
          <p className="font-serif m-0 max-w-[42ch] text-[clamp(22px,2vw,30px)] leading-[1.2] text-chalk">
            {INTERESTS_INTRO}
          </p>
        </div>
      </div>
      <div className="border-b border-chalk/15">
        {INTERESTS.map((item) => (
          <InterestRow
            key={item.title}
            item={item}
            reduced={reduced}
            open={playing === item.title}
            onToggle={() => setPlaying((p) => (p === item.title ? null : item.title))}
          />
        ))}
      </div>
    </section>
  );
}
