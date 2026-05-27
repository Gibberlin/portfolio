"use client"
import React from 'react'

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
    <div className="flex justify-center">
      <ul className="flex w-full flex-col gap-4 text-center text-lg font-extrabold text-[var(--accent-primary)] sm:text-2xl md:flex-row md:justify-center">
        {ctaItems.map(({ href, label }, index) => (
          <li
            key={label}
            className="w-full md:w-auto transition-transform duration-150 ease-out hover:-translate-y-1 active:scale-95"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-cta w-full px-4 py-3 md:min-w-[16rem]"
            >
              <span className="terminal-cta-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hero
