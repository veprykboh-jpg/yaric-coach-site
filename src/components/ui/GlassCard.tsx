'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  as?: 'div' | 'article' | 'section'
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
  as: Tag = 'div',
}: GlassCardProps) {
  const base = cn(
    'glass rounded-2xl p-6',
    glow && 'shadow-gold',
    className,
  )

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{
          y: -6,
          borderColor: 'rgba(201,168,76,0.4)',
          boxShadow: '0 0 40px rgba(201,168,76,0.2)',
          transition: { duration: 0.3 },
        }}
      >
        {children}
      </motion.div>
    )
  }

  if (Tag === 'article') {
    return <article className={base}>{children}</article>
  }
  if (Tag === 'section') {
    return <section className={base}>{children}</section>
  }
  return <div className={base}>{children}</div>
}
