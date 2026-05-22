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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Invest in Yourself" title="START TODAY" center className="mb-6" />

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          {/* Single session */}
          <motion.div variants={fadeUpVariants}>
            <div className="glass rounded-2xl p-5 md:p-7 h-full flex flex-col gold-border">
              <p className="font-heading font-semibold text-white/80 text-xs uppercase tracking-[0.3em] mb-3">Single Session</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-6xl text-white leading-none"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
                  300
                </span>
                <span className="font-heading font-bold text-xl text-[#D4A847]"
                  style={{ textShadow: '0 0 10px rgba(212,168,71,0.4)' }}>
                  AED
                </span>
              </div>
              <p className="font-body text-white/70 text-sm mb-6">Per session · No commitment</p>
              <ul className="space-y-3 mb-8 flex-1">
                {['60-min personal session', 'Customized training', 'Flexible scheduling', 'No commitment'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#D4A847]/80 shrink-0" />
                    <span className="font-heading font-medium text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <GoldButton href={TRAINER.whatsappBookingUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center">
                <MessageCircle size={14} /> Book Session
              </GoldButton>
            </div>
          </motion.div>

          {/* Package — featured */}
          <motion.div variants={fadeUpVariants}>
            <motion.div
              className="relative rounded-2xl p-5 md:p-7 h-full flex flex-col bg-white/[0.04] border border-[#00FF7F]/25"
              animate={{ boxShadow: ['0 0 20px rgba(0,255,127,0.08)', '0 0 60px rgba(0,255,127,0.32)', '0 0 20px rgba(0,255,127,0.08)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Top badges */}
              <div className="absolute -top-3.5 left-0 right-0 flex items-center justify-between px-3">
                <div className="flex items-center gap-1.5 bg-[#00FF7F] px-3 py-1.5 rounded-full"
                  style={{ boxShadow: '0 0 20px rgba(0,255,127,0.55)' }}>
                  <Flame size={11} className="text-[#0a0a0a]" />
                  <span className="font-heading font-bold text-[#0a0a0a] text-[10px] uppercase tracking-widest">Best Value</span>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex items-center gap-1 bg-[#FF6B00]/20 border border-[#FF6B00]/50 px-2.5 py-1 rounded-full"
                >
                  <Clock size={9} className="text-[#FF6B00]" />
                  <span className="font-heading font-bold text-[#FF8533] text-[9px] uppercase tracking-widest">3 Left</span>
                </motion.div>
              </div>

              <p className="font-heading font-semibold text-white/80 text-xs uppercase tracking-[0.3em] mb-3 mt-4">10-Session Package</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-6xl text-white leading-none"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
                  2,500
                </span>
                <span className="font-heading font-bold text-xl text-[#00FF7F]"
                  style={{ textShadow: '0 0 12px rgba(0,255,127,0.55)' }}>
                  AED
                </span>
              </div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-heading font-semibold text-base text-[#00FF7F]"
                  style={{ textShadow: '0 0 8px rgba(0,255,127,0.4)' }}>
                  250 AED<span className="text-[#00FF7F]/60 text-sm font-normal">/session</span>
                </span>
                <div className="h-3 w-px bg-white/15" />
                <div className="flex items-center gap-1">
                  <Zap size={12} className="text-[#FF6B00]" fill="#FF6B00" />
                  <span className="font-heading font-bold text-sm text-[#FF8533]"
                    style={{ textShadow: '0 0 8px rgba(255,107,0,0.3)' }}>
                    Save 500 AED
                  </span>
                </div>
              </div>
              <p className="font-body text-white/70 text-sm mb-6">10 sessions · Serious results</p>

              <ul className="space-y-3 mb-8 flex-1">
                {['Everything in Single Session', 'Priority scheduling', 'Progress tracking', 'Nutrition guidance', 'Goal consultations'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#00FF7F] shrink-0"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(0,255,127,0.5))' }} />
                    <span className="font-heading font-medium text-white/90 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={TRAINER.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#00FF7F] hover:bg-[#00e872] text-[#0a0a0a] font-heading font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-colors duration-200"
                style={{ boxShadow: '0 0 35px rgba(0,255,127,0.35)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(0,255,127,0.6)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <MessageCircle size={16} /> Claim This Package
              </motion.a>

              <div className="absolute bottom-4 right-4 w-16 h-16 opacity-20 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#00FF7F]" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-[#00FF7F]" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce}
          transition={{ delay: 0.5 }}
          className="text-center font-body text-white/68 text-xs mt-8 tracking-widest uppercase"
        >
          200+ clients trained · Dubai&apos;s top-rated boxing coach · Results guaranteed
        </motion.p>
      </div>
    </section>
  )
}
