'use client';

import { motion } from 'framer-motion';

interface ProfileInsightsProps {
  strengths: string[];
  weaknesses: string[];
  goals: {
    shortTerm: string[];
    longTerm: string[];
  };
  mindset: {
    principles: string[];
    lessonsLearned: string[];
  };
  personality: {
    type: string;
    traits: string[];
  };
}

export function ProfileInsights({
  strengths,
  weaknesses,
  goals,
  mindset,
  personality,
}: ProfileInsightsProps) {
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-8 space-y-6 border-2 p-4 rounded-lg dark:border-white dark:bg-transparent"
      style={{
        borderColor: 'var(--panel-border)',
        backgroundColor: 'var(--panel-bg)',
      }}
    >
      {/* Personality Type */}
      <motion.div variants={item}>
        <h3
          className="text-sm font-bold uppercase tracking-widest mb-3 dark:text-white"
          style={{ color: 'var(--panel-text-accent)' }}
        >
          🧠 Personality Type
        </h3>
        <div className="space-y-2">
          <p style={{ color: 'var(--text-color)' }} className="font-bold dark:text-white">
            {personality.type}
          </p>
          <div className="flex flex-wrap gap-2">
            {personality.traits.map(trait => (
              <span
                key={trait}
                className="text-xs px-2 py-1 border rounded dark:border-white dark:text-white"
                style={{
                  backgroundColor: 'var(--panel-bg)',
                  borderColor: 'var(--panel-border)',
                  color: 'var(--panel-text-accent)',
                }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Strengths & Weaknesses Grid */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strengths */}
        <div className="space-y-2">
          <h4
            className="text-xs font-bold uppercase tracking-widest dark:text-white"
            style={{ color: 'var(--accent-primary)' }}
          >
            💪 Strengths
          </h4>
          <ul className="space-y-1 text-sm">
            {strengths.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
                style={{ color: 'var(--text-color)' }}
              >
                <span style={{ color: 'var(--accent-primary)' }} className="mt-0.5">
                  ▸
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="space-y-2">
          <h4
            className="text-xs font-bold uppercase tracking-widest dark:text-white"
            style={{ color: 'var(--accent-secondary)' }}
          >
            ⚠️ Weaknesses
          </h4>
          <ul className="space-y-1 text-sm">
            {weaknesses.map((w, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
                style={{ color: 'var(--text-color)' }}
              >
                <span style={{ color: 'var(--accent-secondary)' }} className="mt-0.5">
                  ▸
                </span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Goals */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Short-term */}
        <div className="space-y-2">
          <h4
            className="text-xs font-bold uppercase tracking-widest dark:text-white"
            style={{ color: 'var(--accent-primary)' }}
          >
            🎯 Short-term Goals
          </h4>
          <ul className="space-y-1 text-sm">
            {goals.shortTerm.map((g, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
                style={{ color: 'var(--text-color)' }}
              >
                <span style={{ color: 'var(--accent-primary)' }} className="mt-0.5">
                  →
                </span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Long-term */}
        <div className="space-y-2">
          <h4
            className="text-xs font-bold uppercase tracking-widest dark:text-white"
            style={{ color: 'var(--accent-primary)' }}
          >
            🚀 Long-term Goals
          </h4>
          <ul className="space-y-1 text-sm">
            {goals.longTerm.map((g, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
                style={{ color: 'var(--text-color)' }}
              >
                <span style={{ color: 'var(--accent-primary)' }} className="mt-0.5">
                  →
                </span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Mindset */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Principles */}
        <div className="space-y-2">
          <h4
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: 'var(--accent-primary)' }}
          >
            ✨ Core Principles
          </h4>
          <ul className="space-y-1 text-sm">
            {mindset.principles.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
                style={{ color: 'var(--text-color)' }}
              >
                <span style={{ color: 'var(--accent-primary)' }} className="mt-0.5">
                  ◆
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lessons */}
        <div className="space-y-2">
          <h4
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: 'var(--accent-primary)' }}
          >
            📖 Lessons Learned
          </h4>
          <ul className="space-y-1 text-sm">
            {mindset.lessonsLearned.map((l, i) => (
              <li
                key={i}
                className="flex items-start gap-2"
                style={{ color: 'var(--text-color)' }}
              >
                <span style={{ color: 'var(--accent-primary)' }} className="mt-0.5">
                  ◆
                </span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
