"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <ul className="inline-block md:flex cursor-pointer text-3xl md:text-2xl md:flex-row text-clip font-extrabold text-emerald-300 text-center align-center justify-center gap-4">
              <li className="px-4 py-2 bg-slate-900 border-4 border-emerald-400 inline-block">
                MY WORK
              </li>
              <li className="px-4 py-2 bg-slate-900 border-4 border-emerald-400 inline-block">
                DOWNLOAD RESUME
              </li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                />
            </ul>
    </div>
  )
}

export default Hero
