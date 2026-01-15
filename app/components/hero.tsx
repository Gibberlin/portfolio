"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <ul className="inline-block md:flex cursor-pointer text-4xl md:text-2xl md:flex-row text-clip bg-gradient-to-r from-green-500  to-blue-500 font-extrabold text-transparent bg-clip-text text-center align-center justify-center">
              <li className="p-3 "> My work</li>
              <li className="p-3">Download my Resume</li>
              <motion.div
                whileHover={{scale:1.5}}
                whileTap={{scale:0.5}}
                animate={{
                    scale:2,
                    transition: {duration:3}
                }}
                />
            </ul>
    </div>
  )
}

export default Hero
