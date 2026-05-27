"use client"

const easeOut = [0.22, 1, 0.36, 1] as const;

const profile = [
  { label: "Name", value: "Gibberlin😎" },
  { label: "Class", value: "Software Developer" },
  { label: "Level", value: "B.Tech CSE Student" },
];

const skills = [
  { name: "JavaScript", filled: 7, total: 9 },
  { name: "TypeScript", filled: 6, total: 9 },
  { name: "React / Next.js", filled: 6, total: 9 },
  { name: "Node.js", filled: 8, total: 9 },
  { name: "Express.js", filled: 7, total: 9 },
  { name: "REST APIs", filled: 7, total: 9 },
  { name: "MySQL", filled: 7, total: 9 },
  { name: "Firebase", filled: 6, total: 9 },
  { name: "Git / GitHub", filled: 8, total: 9 },
  { name: "C++", filled: 7, total: 9 },
  { name: "Java", filled: 6, total: 9 },
  { name: "Python", filled: 7, total: 9 },
];

const skillColumns = Array.from({ length: 3 }, (_, columnIndex) =>
  skills.slice(columnIndex * 3, (columnIndex + 1) * 3),
);

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: easeOut,
    },
  },
};

export default function PlayerStats() {
  return (
    <div className="player-stats">
      <h2 className="border-b-4 border-[var(--border-color)] pb-2 text-center text-xl font-semibold tracking-[0.12em] text-[var(--text-color)] sm:text-2xl">
        &gt; PLAYER_STATS
      </h2>

      <div className="mt-5 space-y-2 text-[var(--text-color)]">
        {profile.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm sm:text-base"
          >
            <span className="player-stats-label">{label}:</span>
            <span className="min-w-0 break-words">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-[var(--text-color)] sm:text-lg">
          Skills
        </h3>
      </div>

      <div className="player-skills-grid mt-3">
        {skillColumns.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="player-skills-column">
            {column.map(({ name, filled, total }, skillIndex) => {
              const index = (columnIndex * 3) + skillIndex;

              return (
                <div
                  key={name}
                  className="player-skill-row"
                >
                  <div className="player-skill-bar" aria-hidden="true">
                    {Array.from({ length: total }).map((_, segmentIndex) => {
                      const active = segmentIndex < filled;

                      return (
                        <span
                          key={`${name}-${segmentIndex}`}
                          className={active ? "player-skill-segment is-active" : "player-skill-segment"}
                          role="presentation"
                        >
                          {active ? "▰" : "▱"}
                        </span>
                      );
                    })}
                  </div>
                  <span className="player-skill-name truncate" title={`${name}: ${filled} of ${total}`}>{name}</span>
                  <span className="sr-only">{name}, {filled} of {total} proficiency</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
