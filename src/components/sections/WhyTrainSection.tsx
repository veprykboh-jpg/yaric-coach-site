'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, MapPin, Clock } from 'lucide-react'
import { WHY_TRAIN } from '@/lib/constants'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

const iconMap = { Target, TrendingUp, MapPin, Clock }

const ticker = [
  'BOXING', 'DUBAI', 'ELITE TRAINING', 'PERSONAL COACHING',
  'RESULTS', 'STRENGTH', 'CONDITIONING', 'CHAMPIONSHIP MINDSET',
  'BOXING', 'DUBAI', 'ELITE TRAINING', 'PERSONAL COACHING',
  'RESULTS', 'STRENGTH', 'CONDITIONING', 'CHAMPIONSHIP MINDSET',
]

export function WhyTrainSection() {
  return (
    <section id="why" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A847]/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading label="Why Train With Me" title="THE DIFFERENCE" center className="mb-10" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {WHY_TRAIN.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div key={item.title} variants={fadeUpVariants}>
                <GlassCard hover className="p-5 md:p-8 group">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors duration-300">
                    {Icon && <Icon size={19} style={{ color: '#D4A847', filter: 'drop-shadow(0 0 6px rgba(212,168,71,0.5))' }} />}
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">{item.title.toUpperCase()}</h3>
                  <p className="font-body text-white/82 text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-14 overflow-hidden border-y border-white/5 py-4 relative z-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {ticker.map((word, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6">
              <span className="font-display text-base tracking-widest text-white/35">{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
