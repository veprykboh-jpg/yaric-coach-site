'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(!!el.closest('a, button, [role="button"]'))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [visible])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      animate={{
        x: pos.x - (hovering ? 18 : 5),
        y: pos.y - (hovering ? 18 : 5),
        width: hovering ? 36 : 10,
        height: hovering ? 36 : 10,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 600, damping: 32, mass: 0.4 }}
      style={{
        borderRadius: '50%',
        background: hovering ? 'transparent' : 'rgba(212,168,71,0.95)',
        border: hovering ? '1.5px solid rgba(212,168,71,0.8)' : 'none',
        boxShadow: hovering
          ? '0 0 20px rgba(212,168,71,0.4)'
          : '0 0 8px rgba(212,168,71,0.7)',
      }}
    />
  )
}
