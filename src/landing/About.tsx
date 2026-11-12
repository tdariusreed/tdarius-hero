import RiseText from "./RiseText";
import { COLS } from "./WorkRow";

export default function About({ reduced }: { reduced: boolean }) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative z-10 bg-ink px-[var(--pad)] pb-[6svh] pt-[14svh] [--pad:clamp(20px,3.2vw,56px)]"
    >
      <div className={`${COLS} items-start gap-y-8`}>
        <h2
          id="about-title"
          aria-label="About"
          className="font-display m-0 text-[clamp(50px,16vw,100px)] leading-[0.85] text-chalk"
        >
          <RiseText text="About Me" reduced={reduced} />
        </h2>

        <div className="md:pt-[0.6vw]">
          <p className="font-serif m-0 max-w-[42ch] text-[clamp(22px,2vw,30px)] leading-[1.2] text-chalk">
             I am a Computer Information Systems and Data Analysis student at Georgia State University whose 
             work sits at the intersection of technology, data, and social impact. 
             I currently serve as a Data and Research Intern at DC360, a nonprofit supporting more than 4,200 students across 
             13 schools in one of Atlanta’s most historically underinvested communities.
          </p>
          <p className="font-serif m-0 mt-6 max-w-[48ch] text-[clamp(18px,1.4vw,21px)] leading-[1.4] text-chalk/70">
            Through data, research, and community engagement, I have connected students with valuable resources and helped
            individuals understand the importance of data-driven decision making. My interests span technology, finance, marketing, nonprofit leadership, and
            music, all united by a desire to create solutions that expand Atlanta and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}