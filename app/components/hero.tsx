"use client"
import React from 'react'
import { motion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const ctaItems = [
    {
      href: "https://github.com/Gibberlin",
      label: "MY WORK",
      external: true,
    },
    {
      href: "https://drive.google.com/file/d/1dqa3-B9wFCfOD78wgKGlnTLgPnCcCOTp/view?usp=sharing",
      label: "DOWNLOAD RESUME",
      external: true,
    },
  ]

  return (
    <div className="w-full max-w-5xl px-4 py-8 sm:px-6 md:px-8">
      <nav aria-label="Primary call to action" className="mx-auto">
        <ul className="flex w-full flex-col gap-3 text-center text-base font-black text-emerald-300 sm:text-lg md:flex-row md:justify-center md:gap-4 lg:text-xl">
          {ctaItems.map(({ href, label }, index) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.32 + index * 0.12,
                ease: easeOut,
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-cta inline-flex w-full items-center justify-center rounded-lg bg-emerald-800/30 px-4 py-3 text-sm uppercase tracking-wider transition-all duration-200 hover:bg-emerald-500/25 focus-visible:ring-2 focus-visible:ring-emerald-200 md:min-w-[16rem] md:py-4 md:text-base"
                aria-label={`${label} (opens in new tab)`}
              >
                <span className="terminal-cta-label">{label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Hero
