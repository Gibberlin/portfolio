'use client';

import { motion } from 'framer-motion';

interface RPGStatsPanelProps {
  stats: {
    str: number;
    int: number;
    dex: number;
    wis: number;
  };
}

export function RPGStatsPanel({ stats }: RPGStatsPanelProps) {
  const statEntries = [
    { key: 'str', label: 'STR', value: stats.str, description: 'Backend / Strength' },
    { key: 'int', label: 'INT', value: stats.int, description: 'Frontend / Intelligence' },
    { key: 'dex', label: 'DEX', value: stats.dex, description: 'DevOps / Dexterity' },
    { key: 'wis', label: 'WIS', value: stats.wis, description: 'Problem Solving / Wisdom' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-8 space-y-3 border-2 p-4 rounded-lg"
      style={{
        borderColor: 'var(--panel-border)',
        backgroundColor: 'var(--panel-bg)',
      }}
    >
      <h3
        className="text-sm font-bold uppercase tracking-widest mb-3"
        style={{ color: 'var(--panel-text-accent)' }}
      >
        Character Stats
      </h3>

      {statEntries.map(stat => (
        <motion.div key={stat.key} variants={item} className="space-y-1">
          <div
            className="flex justify-between items-center text-xs font-bold"
            style={{ color: 'var(--text-color)' }}
          >
            <span>{stat.label}</span>
            <span style={{ color: 'var(--panel-text-accent)' }}>
              {stat.value}/10
            </span>
          </div>
          <div
            className="w-full rounded border h-2 overflow-hidden"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--panel-border)',
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(stat.value / 10) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                background: 'var(--accent-primary)',
                boxShadow: `0 0 8px var(--panel-glow)`,
              }}
            />
          </div>
          <p
            className="text-xs italic"
            style={{ color: 'var(--muted-text)' }}
          >
            {stat.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
