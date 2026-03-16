import MacintoshSprite, { MAC_SCREEN_BOUNDS } from "@/app/components/macintosh-sprite";

const monitorScreenStyle = {
  left: `${(MAC_SCREEN_BOUNDS.monitor.x / MAC_SCREEN_BOUNDS.monitor.viewBoxWidth) * 100}%`,
  top: `${(MAC_SCREEN_BOUNDS.monitor.y / MAC_SCREEN_BOUNDS.monitor.viewBoxHeight) * 100}%`,
  width: `${(MAC_SCREEN_BOUNDS.monitor.width / MAC_SCREEN_BOUNDS.monitor.viewBoxWidth) * 100}%`,
  height: `${(MAC_SCREEN_BOUNDS.monitor.height / MAC_SCREEN_BOUNDS.monitor.viewBoxHeight) * 100}%`,
};

export default function Loading() {
  return (
    <main className="relative flex min-h-screen w-full flex-1 items-center justify-center overflow-hidden px-4 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-1/2 h-48 -translate-y-1/2 animate-terminal-glow rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(30,238,12,0.18),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8">
        <div className="w-full max-w-[28rem]">
          <div className="relative mx-auto aspect-[256/146] w-full">
            <MacintoshSprite variant="monitor" />
            <div
              className="absolute overflow-hidden border-[3px] border-[#6d6d6d] bg-[#07111e] px-3 py-2"
              style={monitorScreenStyle}
            >
              <div className="flex h-full items-center whitespace-nowrap text-[#1bee0c]">
                <span className="mr-2 text-xs font-bold leading-none tracking-[0.08em] md:text-sm">
                  &gt;
                </span>
                <span className="inline-flex items-center gap-1 text-[0.72rem] font-bold uppercase tracking-[0.14em] md:text-sm">
                  Loading
                  <span className="inline-block h-2 w-2 animate-pulse bg-current" />
                  <span
                    className="inline-block h-2 w-2 animate-pulse bg-current"
                    style={{ animationDelay: "120ms" }}
                  />
                  <span
                    className="inline-block h-2 w-2 animate-pulse bg-current"
                    style={{ animationDelay: "240ms" }}
                  />
                </span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-[linear-gradient(180deg,rgba(27,238,12,0.08),transparent)]" />
            </div>
          </div>
        </div>

        <section className="terminal-panel w-full max-w-2xl">
          <div className="player-stats text-center">
            <p className="surface-copy-muted text-[0.72rem] uppercase tracking-[0.28em] sm:text-xs">
              Booting portfolio
            </p>
            <h1 className="mt-3 text-2xl font-bold uppercase tracking-[0.14em] text-[var(--text-color)] sm:text-4xl">
              Preparing Interface
            </h1>
            <p className="surface-copy mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
              Loading visuals, route state, and project data.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
