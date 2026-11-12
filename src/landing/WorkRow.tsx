import type { Project } from "./projects";
import RiseText from "./RiseText";

/** Shared two-column grid: titles on the left, the writing starts 56% across the page. */
export const COLS = "grid md:grid-cols-[calc(56vw_-_var(--pad))_1fr]";

interface Props {
  project: Project;
  reduced: boolean;
  /** Builds get the big treatment; class assignments sit a step smaller. */
  size: "lg" | "md";
}

export default function WorkRow({ project, reduced, size }: Props) {
  const { name, kind, body, stack, when } = project;
  const title =
    size === "lg"
      ? "text-[clamp(48px,9vw,136px)] leading-[1.05]"
      : "text-[clamp(36px,5.4vw,84px)] leading-[1.05]";

  return (
    <article
      className={`${COLS} gap-y-5 border-t border-chalk/15 py-[clamp(28px,6svh,64px)] transition-colors duration-500 hover:border-marker`}
    >
      <h3 aria-label={name} className={`font-display m-0 text-chalk md:pr-8 ${title}`}>
        <RiseText text={name} reduced={reduced} />
      </h3>

      <div className="max-md:mt-1">
        <p className="font-serif m-0 text-[clamp(22px,2vw,30px)] italic leading-[1.05] text-balance text-chalk">{kind}</p>
        <p className="font-serif m-0 mt-3 max-w-[44ch] text-[clamp(17px,1.3vw,20px)] leading-[1.35] text-chalk/70">
          {body}
        </p>
        <p className="font-display m-0 mt-5 flex justify-between gap-6 text-[clamp(14px,1.05vw,17px)] leading-[1.2] text-chalk/55">
          <span>{stack.join(", ")}</span>
          <span className="shrink-0">{when}</span>
        </p>
      </div>
    </article>
  );
}
