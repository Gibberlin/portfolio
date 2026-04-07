"use client"

import { motion } from "framer-motion";

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
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="player-stats"
    >
      <motion.h2
        variants={item}
        className="border-b-4 border-[var(--border-color)] pb-2 text-center text-xl font-semibold tracking-[0.12em] text-[var(--text-color)] sm:text-2xl"
      >
        &gt; PLAYER_STATS
      </motion.h2>

      <motion.div variants={item} className="mt-5 space-y-2 text-[var(--text-color)]">
        {profile.map(({ label, value }) => (
          <div
            key={label}
            className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm sm:text-base"
          >
            <span className="player-stats-label">{label}:</span>
            <span className="min-w-0 break-words">{value}</span>
          </div>
        ))}
      </motion.div>

      <motion.div variants={item} className="mt-6">
        <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-[var(--text-color)] sm:text-lg">
          Skills
        </h3>
      </motion.div>

      <motion.div variants={container} className="player-skills-grid mt-3">
        {skillColumns.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="player-skills-column">
            {column.map(({ name, filled, total }, skillIndex) => {
              const index = (columnIndex * 3) + skillIndex;

              return (
                <motion.div
                  key={name}
                  variants={item}
                  className="player-skill-row"
                  transition={{
                    duration: 0.45,
                    delay: 0.34 + (index * 0.1),
                    ease: easeOut,
                  }}
                >
                  <div className="player-skill-bar" aria-hidden="true">
                    {Array.from({ length: total }).map((_, segmentIndex) => {
                      const active = segmentIndex < filled;

                      return (
                        <motion.span
                          key={`${name}-${segmentIndex}`}
                          initial={{ opacity: 0, scaleX: 0.35 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.44 + (index * 0.1) + (segmentIndex * 0.045),
                            ease: easeOut,
                          }}
                          className={active ? "player-skill-segment is-active" : "player-skill-segment"}
                          role="presentation"
                        >
                          {active ? "▰" : "▱"}
                        </motion.span>
                      );
                    })}
                  </div>
                  <span className="player-skill-name truncate" title={`${name}: ${filled} of ${total}`}>{name}</span>
                  <span className="sr-only">{name}, {filled} of {total} proficiency</span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
