import RiseText from "./RiseText";
import { COLS } from "./WorkRow";

export default function Experience({ reduced }: { reduced: boolean }): import("react").JSX.Element {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative z-10 bg-ink px-[var(--pad)] pb-[6svh] pt-[14svh] [--pad:clamp(20px,3.2vw,56px)]"
    >
      <div className={`${COLS} items-start gap-y-8`}>
        <h2
          id="experience-title"
          aria-label="Experience"
          className="font-display m-0 text-[clamp(50px,16vw,100px)] leading-[0.85] text-chalk"
        >
          <RiseText text="Experience" reduced={reduced} />
        </h2>
        <div className="md:pt-[0.6vw]">
          <p className="font-serif m-0 max-w-[42ch] text-[clamp(22px,2vw,30px)] leading-[1.2] text-chalk">
             I'm under construction. Please check back later.
          </p>
        </div>
      </div>
    </section>
  );
}