'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-7 md:py-12">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Client Results" title="WHAT CHAMPIONS SAY" center className="mb-6" />

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map(t => (
            <motion.div key={t.name} variants={fadeUpVariants}>
              <motion.div
                className="relative glass rounded-2xl p-5 md:p-7 h-full flex flex-col"
                whileHover={{ y: -5, borderColor: 'rgba(212,168,71,0.4)', boxShadow: '0 0 40px rgba(212,168,71,0.13)', transition: { duration: 0.25 } }}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote size={32} style={{ color: '#D4A847', opacity: 0.45, filter: 'drop-shadow(0 0 8px rgba(212,168,71,0.5))' }} />
                </div>

                {/* Review text */}
                <p className="font-body text-white/82 text-sm leading-relaxed flex-1 mb-6">
                  {t.text}
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={13} style={{ color: '#E0BC6B', fill: '#E0BC6B', filter: 'drop-shadow(0 0 4px rgba(224,188,107,0.6))' }} />
                  ))}
                </div>

                {/* Author */}
                <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <p className="font-heading font-bold text-white text-base"
                    style={{ textShadow: '0 0 12px rgba(255,255,255,0.1)' }}>
                    {t.name}
                  </p>
                  <p className="font-body text-white/72 text-xs mt-0.5 tracking-wide">{t.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
