'use client'

import { motion } from 'framer-motion'
import { fadeUpVariants, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(center && 'text-center items-center', 'flex flex-col', className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUpVariants}
    >
      <p className="font-heading font-semibold uppercase tracking-[0.35em] text-xs md:text-sm mb-3"
        style={{ color: '#E0BC6B', textShadow: '0 0 20px rgba(224,188,107,0.5)' }}>
        {label}
      </p>
      <h2
        className={cn(
          'font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none',
          titleClassName,
        )}
        style={{ textShadow: '0 2px 30px rgba(255,255,255,0.08)' }}
      >
        {title}
      </h2>
      <div className={cn('mt-5', center && 'mx-auto')}>
        <div className="h-[2px] w-16 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #D4A847, transparent)', boxShadow: '0 0 12px rgba(212,168,71,0.7)' }} />
      </div>
      {subtitle && (
        <p className="text-white/60 font-body text-base md:text-lg mt-5 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
