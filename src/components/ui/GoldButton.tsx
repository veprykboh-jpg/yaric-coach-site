'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Variant = 'solid' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface GoldButtonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  solid:
    'bg-gold text-[#0A0A0A] hover:bg-gold-light font-heading font-semibold tracking-widest uppercase border border-transparent',
  outline:
    'bg-transparent text-gold border border-gold/60 hover:border-gold hover:bg-gold/5 font-heading font-semibold tracking-widest uppercase',
  ghost:
    'bg-transparent text-gold/80 hover:text-gold hover:bg-gold/5 font-heading font-medium tracking-wider uppercase',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs rounded-lg',
  md: 'px-7 py-3.5 text-sm rounded-xl',
  lg: 'px-9 py-4 text-sm rounded-xl',
}

const springConfig = { type: 'spring' as const, stiffness: 400, damping: 17 }

export function GoldButton({
  children,
  variant = 'solid',
  size = 'md',
  href,
  onClick,
  className,
  target,
  rel,
  type = 'button',
  disabled = false,
}: GoldButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 pointer-events-none',
    className,
  )

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: springConfig,
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} className={classes} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
