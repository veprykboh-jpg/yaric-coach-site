'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #C9A84C 0%, #FFD700 50%, #00FF7F 100%)',
        boxShadow: '0 0 10px rgba(212,168,71,0.8)',
      }}
    />
  )
}
