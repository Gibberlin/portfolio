'use client';

import { motion } from 'framer-motion';

interface PersonalityTraitsProps {
  traits: {
    integrity: number;
    discipline: number;
    empathy_and_boundaries: number;
    curiosity: number;
    courage: number;
    accountability: number;
    humility: number;
    gratitude: number;
    resilience: number;
    self_respect: number;
  };
}

export function PersonalityTraits({ traits }: PersonalityTraitsProps) {
  const traitEntries = Object.entries(traits).map(([key, value]) => ({
    key,
    label: key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    value,
  }));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        className="text-sm font-bold uppercase tracking-widest mb-4"
        style={{ color: 'var(--panel-text-accent)' }}
      >
        Character Traits
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {traitEntries.map(trait => (
          <motion.div key={trait.key} variants={item} className="space-y-1">
            <div
              className="flex justify-between items-center text-xs font-bold"
              style={{ color: 'var(--text-color)' }}
            >
              <span>{trait.label}</span>
              <span style={{ color: 'var(--panel-text-accent)' }}>
                {trait.value}/10
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
                animate={{ width: `${(trait.value / 10) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  background: 'var(--accent-primary)',
                  boxShadow: `0 0 8px var(--panel-glow)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
