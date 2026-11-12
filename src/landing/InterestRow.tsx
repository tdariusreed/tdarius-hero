import { AnimatePresence, motion } from "framer-motion";
import type { Interest } from "./interests";
import { EASE_OUT_EXPO } from "./motion";
import RiseText from "./RiseText";
import RollLink, { RollButton } from "./RollLink";
import { toSpotifyEmbed } from "./spotify";
import { COLS } from "./WorkRow";

interface Props {
  item: Interest;
  reduced: boolean;
  /** Whether this row's Spotify player is showing. */
  open: boolean;
  onToggle: () => void;
}

const REVEAL = { once: true, margin: "0px 0px -12% 0px" } as const;

/**
 * One interest, laid out like a Projects row: title on the left, writing from 56% across.
 * The cover is a small tile that wipes in from the bottom. On devices with a real hover it
 * starts in black and white and colours in with the row, a nod to the wall that says "color me".
 */
export default function InterestRow({ item, reduced, open, onToggle }: Props) {
  const { title, kind, by, note, cover, alt, width, height, link } = item;
  const embed = toSpotifyEmbed(item.spotify);
  const full = "inset(0% 0% 0% 0%)";

  return (
    <article
      className={`${COLS} group/row gap-y-5 border-t border-chalk/15 py-[clamp(28px,6svh,64px)] transition-colors duration-500 hover:border-marker`}
    >
      <h3
        aria-label={title}
        className="font-display m-0 text-[clamp(36px,5.4vw,84px)] leading-[1.05] text-chalk md:pr-8"
      >
        <RiseText text={title} reduced={reduced} />
      </h3>

      <div className="flex gap-5 max-md:mt-1 md:flex-col lg:flex-row">
        <motion.div
          className="aspect-[2/3] w-[clamp(88px,9vw,140px)] shrink-0 overflow-hidden bg-chalk/10"
          initial={{ clipPath: reduced ? full : "inset(100% 0% 0% 0%)" }}
          whileInView={{ clipPath: full }}
          viewport={REVEAL}
          transition={{ duration: 1.1, ease: EASE_OUT_EXPO }}
        >
          <img
            src={cover}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={`h-full w-full object-cover transition-[filter] duration-700 [@media(hover:hover)]:grayscale group-hover/row:grayscale-0 ${open ? "grayscale-0!" : ""}`}
          />
        </motion.div>

        <div className="min-w-0">
          <p className="font-serif m-0 text-[clamp(22px,2vw,30px)] italic leading-[1.05] text-balance text-chalk">{by}</p>
          <p className="font-serif m-0 mt-3 max-w-[44ch] text-[clamp(17px,1.3vw,20px)] leading-[1.35] text-chalk/70">
            {note}
          </p>
          <div className="font-display m-0 mt-5 flex items-baseline justify-between gap-6 text-[clamp(14px,1.05vw,17px)] leading-[1.2] text-chalk/55">
            <span>{kind}</span>
            <span className="flex shrink-0 gap-5">
              {embed && (
                <RollButton aria-expanded={open} aria-label={`${open ? "Close" : "Open"} Spotify player for ${title}`} onClick={onToggle}>
                  {open ? "Close player" : "Listen here"}
                </RollButton>
              )}
              {link && (
                <RollLink href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label}: ${title}`}>
                  {link.label}
                </RollLink>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Spotify's own player, loaded only when asked for. Nothing plays on its own. */}
      <AnimatePresence initial={false}>
        {embed && open && (
          <motion.div
            key="player"
            className="overflow-hidden md:col-start-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.7, ease: EASE_OUT_EXPO }}
          >
            <iframe
              src={embed}
              title={`Spotify player: ${title}`}
              height={152}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="block w-full max-w-[520px] rounded-xl border-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
