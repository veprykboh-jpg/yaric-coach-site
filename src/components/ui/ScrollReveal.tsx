'use client'

import { motion } from 'framer-motion'
import { fadeUpVariants, scaleInVariants, slideInLeftVariants, slideInRightVariants, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'

const variantMap = {
  fadeUp: fadeUpVariants,
  scaleIn: scaleInVariants,
  slideLeft: slideInLeftVariants,
  slideRight: slideInRightVariants,
}

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: keyof typeof variantMap
  delay?: number
  className?: string
}

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const variants = variantMap[variant]

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
