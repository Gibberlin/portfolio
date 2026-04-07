'use client';

import { motion } from 'framer-motion';

interface QuestCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: number; // 1-5
  reward: number; // XP reward
  thumbnail?: string;
  tags: string[];
  onClick?: () => void;
}

export function QuestCard({
  id,
  title,
  description,
  difficulty,
  reward,
  tags,
  onClick,
}: QuestCardProps) {
  const difficultyLabels = ['Trivial', 'Easy', 'Medium', 'Hard', 'Legendary'];
  const difficultyColors = [
    'text-gray-500',
    'text-green-500',
    'text-yellow-500',
    'text-orange-500',
    'text-red-500',
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer border-2 p-4 rounded-lg h-full flex flex-col transition-colors"
      style={{
        borderColor: 'var(--panel-border)',
        backgroundColor: 'var(--panel-bg)',
      }}
    >
      {/* Boss Name */}
      <h3
        className="text-lg font-bold uppercase tracking-widest mb-2 group-hover:transition-colors"
        style={{
          color: 'var(--text-color)',
        }}
      >
        ⚔️ BOSS: {title}
      </h3>

      {/* Description as Battle Narrative */}
      <p
        className="text-sm mb-3 line-clamp-2"
        style={{ color: 'var(--muted-text)' }}
      >
        {description}
      </p>

      {/* Difficulty and Reward Rating */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold"
            style={{ color: 'var(--muted-text)' }}
          >
            DIFFICULTY:
          </span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                style={{
                  color: i < difficulty ? 'var(--accent-primary)' : 'var(--muted-text)',
                }}
                className="text-lg"
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <span
            className="text-xs font-bold"
            style={{ color: 'var(--muted-text)' }}
          >
            XP REWARD:
          </span>
          <p style={{ color: 'var(--panel-text-accent)' }} className="font-bold">
            {reward}
          </p>
        </div>
      </div>

      {/* Weapons (Tech Stack) */}
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-1 border rounded"
            style={{
              backgroundColor: 'var(--panel-bg)',
              borderColor: 'var(--panel-border)',
              color: 'var(--panel-text-accent)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Call to Action */}
      <div
        className="mt-auto text-xs font-bold group-hover:translate-x-2 transition-transform"
        style={{ color: 'var(--panel-text-accent)' }}
      >
        → ENTER BATTLE
      </div>
    </motion.div>
  );
}
