'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '@/app/utils/soundEffects';

interface Notification {
  id: string;
  type: 'achievement' | 'xp' | 'levelup';
  title: string;
  message: string;
  icon: string;
}

export function GamificationNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Listen for custom achievement event
    const handleAchievementUnlock = (event: CustomEvent) => {
      const { id, title, description, icon } = event.detail;
      const notification: Notification = {
        id: `notification-${Date.now()}`,
        type: 'achievement',
        title,
        message: description,
        icon,
      };
      setNotifications(prev => [notification, ...prev]);
      playSound('achievement');

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 4000);
    };

    const handleLevelUp = (event: CustomEvent) => {
      const { level, xpGained } = event.detail;
      const notification: Notification = {
        id: `notification-${Date.now()}`,
        type: 'levelup',
        title: `LEVEL UP!`,
        message: `You reached Level ${level}!`,
        icon: '⭐',
      };
      setNotifications(prev => [notification, ...prev]);
      playSound('levelUp');

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 3000);
    };

    const handleXPGain = (event: CustomEvent) => {
      const { amount } = event.detail;
      const notification: Notification = {
        id: `notification-${Date.now()}`,
        type: 'xp',
        title: `+${amount} XP`,
        message: `Experience gained!`,
        icon: '✨',
      };
      setNotifications(prev => [notification, ...prev]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 2000);
    };

    window.addEventListener('achievement-unlock', handleAchievementUnlock as EventListener);
    window.addEventListener('level-up', handleLevelUp as EventListener);
    window.addEventListener('xp-gain', handleXPGain as EventListener);

    return () => {
      window.removeEventListener('achievement-unlock', handleAchievementUnlock as EventListener);
      window.removeEventListener('level-up', handleLevelUp as EventListener);
      window.removeEventListener('xp-gain', handleXPGain as EventListener);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-40 pointer-events-none space-y-2">
      <AnimatePresence mode="popLayout">
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 20 }}
            className="pointer-events-auto border-2 p-3 rounded-lg max-w-xs backdrop-blur"
            style={{
              borderColor: 'var(--panel-border)',
              backgroundColor: 'rgba(30, 238, 12, 0.1)',
            }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{notification.icon}</span>
              <div className="flex-1">
                <p className="font-bold text-sm" style={{ color: 'var(--text-color)' }}>{notification.title}</p>
                <p className="text-xs" style={{ color: 'var(--muted-text)' }}>{notification.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
