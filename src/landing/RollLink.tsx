import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const BASE = "group relative inline-block overflow-hidden align-top leading-[1.15] text-chalk";

/** The label, plus a pink duplicate waiting below it. */
function Roll({ children }: { children: string }) {
  return (
    <>
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute left-0 top-full block text-marker transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full"
      >
        {children}
      </span>
    </>
  );
}

/** Link whose label rolls up and is replaced by a pink duplicate on hover. */
export default function RollLink({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: string }) {
  return (
    <a {...rest} className={BASE}>
      <Roll>{children}</Roll>
    </a>
  );
}

/** Same roll, for actions that toggle something on the page rather than navigate. */
export function RollButton({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { children: string }) {
  return (
    <button type="button" {...rest} className={`${BASE} cursor-pointer`}>
      <Roll>{children}</Roll>
    </button>
  );
}
