"use client";

import type { CSSProperties } from "react";
import { TypeAnimation } from "react-type-animation";
import MacintoshSprite, { MAC_SCREEN_BOUNDS } from "@/app/components/macintosh-sprite";

const fullScreenStyle = {
  left: `${(MAC_SCREEN_BOUNDS.full.x / MAC_SCREEN_BOUNDS.full.viewBoxWidth) * 100}%`,
  top: `${(MAC_SCREEN_BOUNDS.full.y / MAC_SCREEN_BOUNDS.full.viewBoxHeight) * 100}%`,
  width: `${(MAC_SCREEN_BOUNDS.full.width / MAC_SCREEN_BOUNDS.full.viewBoxWidth) * 100}%`,
  height: `${(MAC_SCREEN_BOUNDS.full.height / MAC_SCREEN_BOUNDS.full.viewBoxHeight) * 100}%`,
};

const monitorScreenStyle = {
  left: `${(MAC_SCREEN_BOUNDS.monitor.x / MAC_SCREEN_BOUNDS.monitor.viewBoxWidth) * 100}%`,
  top: `${(MAC_SCREEN_BOUNDS.monitor.y / MAC_SCREEN_BOUNDS.monitor.viewBoxHeight) * 100}%`,
  width: `${(MAC_SCREEN_BOUNDS.monitor.width / MAC_SCREEN_BOUNDS.monitor.viewBoxWidth) * 100}%`,
  height: `${(MAC_SCREEN_BOUNDS.monitor.height / MAC_SCREEN_BOUNDS.monitor.viewBoxHeight) * 100}%`,
};

const typeSequence = [
  "Hello, I'm Yashin!",
  2000,
  "I'm a Student",
  1000,
  "A Developer",
  1200,
  "And a Designer",
  1200,
];

function TerminalLine({
  textClassName,
  promptClassName,
  cursorClassName,
}: {
  textClassName: string;
  promptClassName: string;
  cursorClassName: string;
}) {
  return (
    <div className="flex h-full items-center whitespace-nowrap">
      <span className={promptClassName}>&gt;</span>
      <div className="flex min-w-0 flex-1 items-center overflow-hidden">
        <TypeAnimation
          cursor={false}
          wrapper="span"
          sequence={typeSequence}
          repeat={5}
          className={textClassName}
        />
        <span className={cursorClassName}>_</span>
      </div>
    </div>
  );
}

function ScreenOverlay({
  style,
  className,
  promptClassName,
  textClassName,
  cursorClassName,
}: {
  style: CSSProperties;
  className: string;
  promptClassName: string;
  textClassName: string;
  cursorClassName: string;
}) {
  return (
    <div
      className={className}
      style={style}
    >
      <TerminalLine
        promptClassName={promptClassName}
        textClassName={textClassName}
        cursorClassName={cursorClassName}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-[linear-gradient(180deg,rgba(27,238,12,0.08),transparent)]" />
    </div>
  );
}

export default function Type() {
  return (
    <div className="mx-auto w-full">
      <div className="hidden lg:block">
        <div className="mx-auto w-full max-w-[38rem]">
          <div className="relative mx-auto aspect-[256/220] w-full">
            <MacintoshSprite variant="full" />
            <ScreenOverlay
              style={fullScreenStyle}
              className="absolute overflow-hidden border-[3px] border-[#6d6d6d] bg-[#07111e] px-3 py-2 md:px-4 md:py-3"
              promptClassName="mr-2 text-xs font-bold leading-none tracking-[0.08em] text-[#1bee0c] md:text-base"
              textClassName="inline-block min-w-0 truncate text-[clamp(0.72rem,1.15vw,0.98rem)] font-bold leading-none tracking-[0.02em] text-[#1bee0c]"
              cursorClassName="ml-1 shrink-0 text-xs font-bold leading-none text-[#1bee0c] md:text-base"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        <div className="mx-auto w-full max-w-[32rem]">
          <div className="relative mx-auto aspect-[256/146] w-full">
            <MacintoshSprite variant="monitor" />
            <ScreenOverlay
              style={monitorScreenStyle}
              className="absolute overflow-hidden border-[3px] border-[#6d6d6d] bg-[#07111e] px-3 py-2"
              promptClassName="mr-2 text-xs font-bold leading-none tracking-[0.08em] text-[#1bee0c]"
              textClassName="inline-block min-w-0 truncate text-[clamp(0.72rem,1.7vw,0.95rem)] font-bold leading-none tracking-[0.02em] text-[#1bee0c]"
              cursorClassName="ml-1 shrink-0 text-xs font-bold leading-none text-[#1bee0c]"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mx-auto w-full max-w-[22rem] border-4 border-[var(--border-color)] bg-[color:var(--card-bg)] p-2 shadow-[6px_6px_0_rgba(17,17,17,0.35)]">
          <div className="border-4 border-[var(--border-color)] bg-[#0b1a33] p-3">
            <div className="mb-2 flex items-center gap-2 border-b-2 border-[#1bee0c]/30 pb-2">
              <span className="h-2.5 w-2.5 bg-[#1bee0c]" />
              <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[#9ddf95]">
                pixel terminal
              </span>
            </div>
            <TerminalLine
              promptClassName="mr-2 text-[0.72rem] font-bold leading-none tracking-[0.08em] text-[#1bee0c]"
              textClassName="inline-block min-w-0 truncate text-[0.78rem] font-bold leading-none tracking-[0.03em] text-[#1bee0c]"
              cursorClassName="ml-1 shrink-0 text-[0.72rem] font-bold leading-none text-[#1bee0c]"
            />
            <p className="mt-3 text-[0.68rem] leading-relaxed tracking-[0.06em] text-[#9ddf95]">
              Student. Developer. Designer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
