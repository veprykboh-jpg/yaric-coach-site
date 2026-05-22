'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Flame, MessageCircle, Zap, Clock } from 'lucide-react'
import { TRAINER } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldButton } from '@/components/ui/GoldButton'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-7 md:py-12">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF7F]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading label="Invest in Yourself" title="PRICING" center className="mb-6 hidden md:block" />

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 md:gap-5 max-w-3xl mx-auto"
        >
          {/* Single session */}
          <motion.div variants={fadeUpVariants}>
            <div className="glass rounded-2xl p-3 md:p-7 h-full flex flex-col gold-border">
              <p className="font-heading font-semibold text-white/80 text-[10px] md:text-xs uppercase tracking-widest md:tracking-[0.3em] mb-2 md:mb-3">Single Session</p>
              <div className="flex items-baseline gap-1 md:gap-2 mb-0.5 md:mb-1">
                <span className="font-display text-4xl md:text-6xl text-white leading-none"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
                  300
                </span>
                <span className="font-heading font-bold text-base md:text-xl text-[#D4A847]"
                  style={{ textShadow: '0 0 10px rgba(212,168,71,0.4)' }}>
                  AED
                </span>
              </div>
              <p className="font-body text-white/70 text-[10px] md:text-sm mb-3 md:mb-6">Per session · No commitment</p>
              <ul className="hidden md:flex flex-col space-y-3 mb-8 flex-1">
                {['60-min personal session', 'Customized training', 'Flexible scheduling', 'No commitment'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#D4A847]/80 shrink-0" />
                    <span className="font-heading font-medium text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <GoldButton href={TRAINER.whatsappBookingUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center !py-2 md:!py-3 !text-[10px] md:!text-sm">
                  <MessageCircle size={12} /> <span className="hidden md:inline">Book </span>Session
                </GoldButton>
              </div>
            </div>
          </motion.div>

          {/* Package — featured */}
          <motion.div variants={fadeUpVariants}>
            <motion.div
              className="relative rounded-2xl p-3 md:p-7 h-full flex flex-col bg-white/[0.04] border border-[#00FF7F]/25"
              animate={{ boxShadow: ['0 0 20px rgba(0,255,127,0.08)', '0 0 60px rgba(0,255,127,0.32)', '0 0 20px rgba(0,255,127,0.08)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Best Value badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-top-3.5 md:right-auto flex items-center gap-1 bg-[#00FF7F] px-2 md:px-3 py-1 md:py-1.5 rounded-full"
                style={{ boxShadow: '0 0 20px rgba(0,255,127,0.55)' }}>
                <Flame size={10} className="text-[#0a0a0a] hidden md:block" />
                <span className="font-heading font-bold text-[#0a0a0a] text-[9px] md:text-[10px] uppercase tracking-widest">Best Value</span>
              </div>
              {/* 3 Left — desktop only */}
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="hidden md:flex absolute -top-3.5 right-3 items-center gap-1 bg-[#FF6B00]/20 border border-[#FF6B00]/50 px-2.5 py-1 rounded-full"
              >
                <Clock size={9} className="text-[#FF6B00]" />
                <span className="font-heading font-bold text-[#FF8533] text-[9px] uppercase tracking-widest">3 Left</span>
              </motion.div>

              <p className="font-heading font-semibold text-white/80 text-[10px] md:text-xs uppercase tracking-widest md:tracking-[0.3em] mb-2 md:mb-3 mt-4">10-Session Pack</p>
              <div className="flex items-baseline gap-1 md:gap-2 mb-0.5 md:mb-1">
                <span className="font-display text-4xl md:text-6xl text-white leading-none"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
                  2,500
                </span>
                <span className="font-heading font-bold text-base md:text-xl text-[#00FF7F]"
                  style={{ textShadow: '0 0 12px rgba(0,255,127,0.55)' }}>
                  AED
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-3 mb-0.5 md:mb-1">
                <span className="font-heading font-semibold text-xs md:text-base text-[#00FF7F]">
                  250<span className="text-[#00FF7F]/60 text-[10px] md:text-sm"> AED/sess</span>
                </span>
                <div className="flex items-center gap-1">
                  <Zap size={10} className="text-[#FF6B00]" fill="#FF6B00" />
                  <span className="font-heading font-bold text-[10px] md:text-sm text-[#FF8533]">Save 500</span>
                </div>
              </div>
              <p className="font-body text-white/70 text-[10px] md:text-sm mb-3 md:mb-6">10 sessions</p>

              <ul className="hidden md:flex flex-col space-y-3 mb-8 flex-1">
                {['Everything in Single Session', 'Priority scheduling', 'Progress tracking', 'Nutrition guidance', 'Goal consultations'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#00FF7F] shrink-0"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(0,255,127,0.5))' }} />
                    <span className="font-heading font-medium text-white/90 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <motion.a
                  href={TRAINER.whatsappBookingUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 bg-[#00FF7F] hover:bg-[#00e872] text-[#0a0a0a] font-heading font-bold text-[10px] md:text-sm uppercase tracking-wide md:tracking-widest py-2.5 md:py-4 rounded-xl transition-colors duration-200"
                  style={{ boxShadow: '0 0 35px rgba(0,255,127,0.35)' }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(0,255,127,0.6)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <MessageCircle size={12} className="hidden md:block" /> Claim
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce}
          transition={{ delay: 0.5 }}
          className="text-center font-body text-white/68 text-xs mt-6 md:mt-8 tracking-widest uppercase"
        >
          200+ clients trained · Dubai&apos;s top-rated boxing coach · Results guaranteed
        </motion.p>
      </div>
    </section>
  )
}
