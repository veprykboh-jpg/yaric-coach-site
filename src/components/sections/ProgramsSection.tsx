'use client'

import { motion } from 'framer-motion'
import { Swords, Dumbbell, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { PROGRAMS, TRAINER } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

const iconMap = { Swords, Dumbbell, Zap }

export function ProgramsSection() {
  return (
    <section id="programs" className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="The Programs" title="TRAIN WITH PURPOSE" center className="mb-10" />

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PROGRAMS.map(program => {
            const Icon = iconMap[program.icon as keyof typeof iconMap]
            return (
              <motion.div key={program.id} variants={fadeUpVariants}>
                <motion.div
                  className="glass rounded-2xl p-7 h-full flex flex-col group cursor-default"
                  whileHover={{ y: -6, borderColor: 'rgba(212,168,71,0.5)', boxShadow: '0 0 50px rgba(212,168,71,0.18)', transition: { duration: 0.25 } }}
                >
                  {/* Icon */}
                  <div className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:border-gold/70 transition-colors duration-300"
                    style={{ background: 'rgba(212,168,71,0.12)', border: '1px solid rgba(212,168,71,0.25)' }}>
                    {Icon && <Icon size={23} style={{ color: '#D4A847', filter: 'drop-shadow(0 0 6px rgba(212,168,71,0.6))' }} />}
                  </div>

                  {/* Subtitle */}
                  <p className="font-heading font-bold text-[11px] uppercase tracking-[0.3em] mb-1.5"
                    style={{ color: '#E0BC6B', textShadow: '0 0 10px rgba(212,168,71,0.4)' }}>
                    {program.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-3xl text-white mb-3 leading-tight"
                    style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
                    {program.title.toUpperCase()}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-white/72 text-sm leading-relaxed mb-5 flex-1">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle size={13} style={{ color: '#D4A847', filter: 'drop-shadow(0 0 4px rgba(212,168,71,0.5))' }} className="shrink-0" />
                        <span className="font-heading font-medium text-white/72 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <a href={TRAINER.whatsappBookingUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-heading font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all duration-200 group/l"
                    style={{ color: '#D4A847', textShadow: '0 0 8px rgba(212,168,71,0.3)' }}>
                    Book Program <ArrowRight size={13} className="group-hover/l:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
