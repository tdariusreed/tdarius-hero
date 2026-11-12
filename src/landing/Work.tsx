import RiseText from "./RiseText";
import RollLink from "./RollLink";
import WorkRow, { COLS } from "./WorkRow";
import { BUILDS, CLASSWORK } from "./projects";

/**
 * Section two. Same ink ground, condensed display type, serif voice, letter-by-letter rise and
 * pink-on-hover as the hero. Pink stays reserved for interaction.
 */
export default function Work({ reduced }: { reduced: boolean }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative z-10 min-h-svh bg-ink px-[var(--pad)] pb-[10svh] pt-[14svh] [--pad:clamp(20px,3.2vw,56px)]"
    >
      <header className={`${COLS} mb-[clamp(36px,8svh,96px)] items-end gap-y-6`}>
        <h2
          id="projects-title"
          aria-label="Projects"
          className="font-display m-0 text-[clamp(40px,16vw,100px)] leading-[0.85] text-chalk"
        >
          <RiseText text="Projects" reduced={reduced} />
        </h2>
      </header>

      <div>
        {BUILDS.map((p) => (
          <WorkRow key={p.name} project={p} reduced={reduced} size="lg" />
        ))}
      </div>

      <div className={`${COLS} gap-y-2 pb-6 pt-[clamp(48px,10svh,120px)]`}>
        <h3 className="font-display m-0 text-[clamp(40px,16vw,100px)] leading-none text-chalk/55">Class projects</h3>
      </div>

      <div>
        {CLASSWORK.map((p) => (
          <WorkRow key={p.name} project={p} reduced={reduced} size="md" />
        ))}
      </div>

      <footer className="font-display flex items-baseline justify-between gap-x-6 gap-y-3 border-t border-chalk/15 pt-6 text-[clamp(16px,1.35vw,22px)] max-sm:flex-col">
        <span className="whitespace-nowrap">
          <RollLink href="https://github.com/tdariusreed" target="_blank" rel="noreferrer">GitHub
          </RollLink>
        </span>
      </footer>
    </section>
  );
}
