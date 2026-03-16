"use client"
import React from 'react'
import { motion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const ctaItems = [
    "MY WORK",
    "DOWNLOAD RESUME",
  ]

  return (
    <div className="flex justify-center">
      <ul className="flex w-full flex-col gap-4 text-center text-lg font-extrabold text-emerald-300 sm:text-2xl md:flex-row md:justify-center">
        {ctaItems.map((label, index) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.32 + (index * 0.12),
              ease: easeOut,
            }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto"
          >
            <button
              type="button"
              className="terminal-cta w-full px-4 py-3 md:min-w-[16rem]"
            >
              <span className="terminal-cta-label">{label}</span>
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Hero
