import { STAGE } from "../design/tokens";

interface Props {
  src?: string;
  /**
   * 0–1 white wash. Leave at 0 for the default plate (frame 0 of the video, already
   * washed). If you swap in the original unwashed photo, start around 0.4 and tune.
   */
  wash?: number;
}

/** Static photo layer. The hand-lettered "COLOR ME!" note is part of the plate. */
export default function Backdrop({ src = "/assets/plate.jpg", wash = 0 }: Props) {
  return (
    <div className="absolute inset-0" aria-hidden>
      <img
        src={src}
        width={STAGE.width}
        height={STAGE.height}
        alt=""
        draggable={false}
        className="block h-full w-full select-none object-cover"
      />
      {wash > 0 && <div className="absolute inset-0 bg-white" style={{ opacity: wash }} />}
    </div>
  );
}
