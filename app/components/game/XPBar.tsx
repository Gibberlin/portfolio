'use client';

import { motion } from 'framer-motion';

interface XPBarProps {
  level: number;
  xp: number;
  xpNeeded: number;
}

export function XPBar({ level, xp, xpNeeded }: XPBarProps) {
  const percentage = (xp / xpNeeded) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-0 space-y-2"
    >
      <div
        className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white"
      >
        <span>LEVEL {level}</span>
        <span className="text-white/60 text-xs">
          {xp.toLocaleString()}/{xpNeeded.toLocaleString()} XP
        </span>
      </div>
      <div
        className="w-full h-2 border border-white/30 overflow-hidden bg-gray-800"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            backgroundColor: '#1bee0c',
            boxShadow: `0 0 6px rgba(30, 238, 12, 0.6)`,
          }}
        />
      </div>
    </motion.div>
  );
}
