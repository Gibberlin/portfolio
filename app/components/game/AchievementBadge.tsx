'use client';

import { motion } from 'framer-motion';

interface Achievement {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

interface AchievementBadgeProps {
  achievement: Achievement;
  unlocked: boolean;
}

export function AchievementBadge({ achievement, unlocked }: AchievementBadgeProps) {
  const lockedStyle = {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'transparent',
  };

  const unlockedStyle = {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: `0 0 12px rgba(255, 255, 255, 0.5)`,
  };

  return (
    <motion.div
      initial={unlocked ? { scale: 0, rotate: -180 } : { opacity: 0.4 }}
      animate={unlocked ? { scale: 1, rotate: 0 } : { opacity: 0.4 }}
      whileHover={unlocked ? { scale: 1.1, rotate: 5 } : {}}
      className="flex flex-col items-center justify-center w-16 h-16 rounded-lg border-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      style={unlocked ? unlockedStyle : lockedStyle}
      role="img"
      aria-label={`Achievement: ${achievement.name}${unlocked ? ' - Unlocked' : ' - Locked'}`}
      title={`${achievement.name}${unlocked ? ' ✓' : ' 🔒'}`}
    >
      <span className="text-2xl" aria-hidden="true">{achievement.icon}</span>
      <span className="sr-only">{achievement.name} {unlocked ? 'unlocked' : 'locked'}</span>
    </motion.div>
  );
}

interface AchievementsDisplayProps {
  unlockedIds: string[];
  allAchievements: Achievement[];
}

export function AchievementsDisplay({ unlockedIds, allAchievements }: AchievementsDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-0 space-y-3"
    >
      <div className="text-xs font-bold uppercase tracking-widest text-white/70">
        Achievements ({unlockedIds.length}/{allAchievements.length})
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {allAchievements.map(achievement => (
          <AchievementBadge
            key={achievement.id}
            achievement={achievement}
            unlocked={unlockedIds.includes(achievement.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}
