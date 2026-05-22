'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, CheckCircle, Star } from 'lucide-react'
import { STATS } from '@/lib/constants'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { staggerContainer, fadeUpVariants, slideInLeftVariants, slideInRightVariants, viewportOnce } from '@/lib/animations'

export function AboutSection() {
  return (
    <section id="about" className="relative py-7 md:py-12">
      {/* полупрозрачная подложка чтобы зал просвечивал */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Фото */}
          <motion.div
            variants={slideInLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/15 shadow-card">
              <Image
                src="/images/photo_2026-05-21_22-39-51.jpg"
                alt="Yaroslav Golod with professional boxer"
                fill className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw" priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
                  <div className="flex">{[1,2,3,4,5].map(s=><Star key={s} size={10} className="text-gold fill-gold"/>)}</div>
                  <span className="font-body text-white/80 text-xs">Training with elite professionals</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute bottom-4 right-4 glass rounded-2xl px-4 py-2.5 flex items-center gap-2"
            >
              <MapPin size={13} className="text-gold shrink-0" />
              <div>
                <p className="font-heading font-semibold text-white text-sm leading-none">Dubai Based</p>
                <p className="font-body text-white/70 text-xs mt-0.5">UAE</p>
              </div>
            </motion.div>
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold/25 rounded-tl-xl pointer-events-none" />
          </motion.div>

          {/* Текст */}
          <motion.div variants={slideInRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionHeading label="About Your Coach" title="YAROSLAV GOLOD" />
            <div className="mt-6 space-y-4 font-body text-white/82 leading-relaxed text-sm md:text-base">
              <p>Over 8 years mastering the science and art of combat sports. Based in Dubai, Yaroslav brings the discipline of a competitor and the precision of an elite coach to every session.</p>
              <p>Whether you're stepping into a gym for the first time or preparing for your first fight — he will push you far beyond where you thought you could go.</p>
            </div>
            <div className="mt-6 space-y-2.5">
              {[
                'Professional boxing & competitive background',
                'Strength, conditioning & technical boxing',
                'Training elite professionals across Dubai',
              ].map(item => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
                  <p className="font-body text-white/80 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8"
        >
          {STATS.map(stat => (
            <motion.div key={stat.label} variants={fadeUpVariants}>
              <GlassCard className="text-center py-6 px-3" hover>
                <p className="font-display text-4xl text-gold leading-none">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-body text-white/65 text-[10px] uppercase tracking-widest mt-2">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
