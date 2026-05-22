'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, MapPin, Clock } from 'lucide-react'
import { WHY_TRAIN } from '@/lib/constants'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

const iconMap = {
  Target, TrendingUp, MapPin, Clock,
}

const ticker = [
  'BOXING', 'DUBAI', 'ELITE TRAINING', 'PERSONAL COACHING',
  'RESULTS', 'STRENGTH', 'CONDITIONING', 'CHAMPIONSHIP MINDSET',
  'BOXING', 'DUBAI', 'ELITE TRAINING', 'PERSONAL COACHING',
  'RESULTS', 'STRENGTH', 'CONDITIONING', 'CHAMPIONSHIP MINDSET',
]

export function WhyTrainSection() {
  return (
    <section id="why" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Why Train With Me"
          title="THE DIFFERENCE IS IN THE DETAILS"
          center
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {WHY_TRAIN.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div key={item.title} variants={fadeUpVariants}>
                <GlassCard hover className="p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:border-gold/50 transition-colors duration-300">
                    {Icon && <Icon size={20} className="text-gold" />}
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">{item.title.toUpperCase()}</h3>
                  <p className="font-body text-[#8C8C8C] text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-20 overflow-hidden border-y border-white/5 py-5 relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {ticker.map((word, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6">
              <span className="font-display text-lg tracking-widest text-[#3A3A3A]">{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/30 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
