'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Sparkles, Clock, MessageCircle, ArrowRight } from 'lucide-react'
import { TRAINER } from '@/lib/constants'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

export function PromoBanner() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/72 backdrop-blur-sm" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF7F]/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.06) 0%, transparent 55%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-heading font-semibold uppercase tracking-[0.35em] text-xs md:text-sm mb-3"
            style={{ color: '#FF8533', textShadow: '0 0 20px rgba(255,107,0,0.55)' }}>
            Limited Time
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none"
            style={{ textShadow: '0 2px 30px rgba(255,255,255,0.08)' }}>
            EXCLUSIVE OFFERS
          </h2>
          <div className="flex justify-center mt-5">
            <div className="h-[2px] w-20 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #FF6B00 40%, #FF8533 50%, #FF6B00 60%, transparent)', boxShadow: '0 0 14px rgba(255,107,0,0.8)' }} />
          </div>
          <p className="font-body text-white/72 text-sm mt-4 tracking-wide">
            Act fast — spots fill up every month
          </p>
        </motion.div>

        {/* 3 offer cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >

          {/* ── Trial ── */}
          <motion.div variants={fadeUpVariants}>
            <motion.div
              className="relative rounded-2xl p-5 md:p-7 h-full flex flex-col border border-[#D4A847]/35 overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #161000 0%, #0D0B00 60%, #0a0a0a 100%)' }}
              animate={{ boxShadow: ['0 0 20px rgba(212,168,71,0.07)', '0 0 50px rgba(212,168,71,0.26)', '0 0 20px rgba(212,168,71,0.07)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, transparent, #E0BC6B 40%, #FFD700 50%, #E0BC6B 60%, transparent)', boxShadow: '0 0 10px rgba(224,188,107,0.6)' }} />

              <div className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(212,168,71,0.12)', border: '1px solid rgba(212,168,71,0.3)' }}>
                <motion.div animate={{ scale: [1, 1.18, 1] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
                  <Sparkles size={22} style={{ color: '#E0BC6B', filter: 'drop-shadow(0 0 8px rgba(224,188,107,0.8))' }} />
                </motion.div>
              </div>

              <p className="font-heading font-bold text-xs uppercase tracking-[0.3em] mb-2"
                style={{ color: '#E0BC6B', textShadow: '0 0 14px rgba(224,188,107,0.6)' }}>
                First Trial Session
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-6xl text-white leading-none"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.12)' }}>150</span>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-2xl text-[#D4A847] leading-none"
                    style={{ textShadow: '0 0 12px rgba(212,168,71,0.5)' }}>AED</span>
                  <span className="font-body text-white/60 text-sm line-through">300 AED</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mb-5">
                <Zap size={13} className="text-[#FF6B00]" fill="#FF6B00" />
                <span className="font-heading font-bold text-sm text-[#FF8533] uppercase tracking-wide"
                  style={{ textShadow: '0 0 10px rgba(255,107,0,0.4)' }}>50% OFF — first session only</span>
              </div>
              <p className="font-body text-white/82 text-sm leading-relaxed mb-7 flex-1">
                Start your journey with zero risk. Full 60-min session, fitness assessment, and a personalized plan built just for you.
              </p>
              <motion.a
                href={TRAINER.whatsappBookingUrl} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-[0.18em] py-4 rounded-xl transition-colors duration-200"
                style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F0C866 50%, #C9A84C 100%)', color: '#0a0a0a', boxShadow: '0 0 35px rgba(212,168,71,0.45)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(212,168,71,0.7)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <MessageCircle size={15} /> Book Trial · 150 AED
              </motion.a>
              <p className="text-center font-body text-white/60 text-[10px] mt-2.5 tracking-widest uppercase">New clients only</p>
            </motion.div>
          </motion.div>

          {/* ── 10-Pack ── */}
          <motion.div variants={fadeUpVariants}>
            <motion.div
              className="relative rounded-2xl p-5 md:p-7 h-full flex flex-col border border-[#00FF7F]/30 overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #001A0D 0%, #000D07 60%, #0a0a0a 100%)' }}
              animate={{ boxShadow: ['0 0 20px rgba(0,255,127,0.07)', '0 0 60px rgba(0,255,127,0.32)', '0 0 20px rgba(0,255,127,0.07)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, transparent, #00FF7F, transparent)', boxShadow: '0 0 10px rgba(0,255,127,0.6)' }} />

              {/* Best value badge */}
              <div className="absolute top-4 right-4">
                <span className="font-heading font-bold text-[9px] uppercase tracking-widest bg-[#00FF7F] text-[#0a0a0a] px-2.5 py-1 rounded-full"
                  style={{ boxShadow: '0 0 15px rgba(0,255,127,0.6)' }}>
                  Best Value
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(0,255,127,0.1)', border: '1px solid rgba(0,255,127,0.25)' }}>
                <motion.div animate={{ scale: [1, 1.18, 1] }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.3, ease: 'easeInOut' }}>
                  <Zap size={22} fill="#00FF7F" style={{ color: '#00FF7F', filter: 'drop-shadow(0 0 8px rgba(0,255,127,0.8))' }} />
                </motion.div>
              </div>

              <p className="font-heading font-bold text-xs uppercase tracking-[0.3em] mb-2"
                style={{ color: '#00FF7F', textShadow: '0 0 14px rgba(0,255,127,0.6)' }}>
                Best Value Pack
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-6xl text-white leading-none"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.12)' }}>2,500</span>
                <span className="font-heading font-bold text-2xl text-[#00FF7F] leading-none"
                  style={{ textShadow: '0 0 12px rgba(0,255,127,0.55)' }}>AED</span>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <span className="font-heading font-semibold text-base text-[#00FF7F]/80">250 AED/session</span>
                <div className="w-px h-3 bg-white/15" />
                <span className="font-heading font-bold text-sm text-[#FF8533]"
                  style={{ textShadow: '0 0 8px rgba(255,107,0,0.4)' }}>Save 500 AED</span>
              </div>
              <p className="font-body text-white/82 text-sm leading-relaxed mb-7 flex-1">
                10 sessions, priority scheduling, progress tracking, nutrition guidance. Serious results for serious athletes.
              </p>
              <motion.a
                href={TRAINER.whatsappBookingUrl} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#00FF7F] hover:bg-[#00e872] text-[#0a0a0a] font-heading font-bold text-sm uppercase tracking-[0.18em] py-4 rounded-xl transition-colors duration-200"
                style={{ boxShadow: '0 0 35px rgba(0,255,127,0.4)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 65px rgba(0,255,127,0.7)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <MessageCircle size={15} /> Get 10-Pack · Save 500
              </motion.a>
              <p className="text-center font-body text-white/60 text-[10px] mt-2.5 tracking-widest uppercase">250 AED per session</p>
            </motion.div>
          </motion.div>

          {/* ── Urgency ── */}
          <motion.div variants={fadeUpVariants}>
            <motion.div
              className="relative rounded-2xl p-5 md:p-7 h-full flex flex-col border border-[#FF6B00]/30 overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #1A0500 0%, #0D0300 60%, #0a0a0a 100%)' }}
              animate={{ boxShadow: ['0 0 20px rgba(255,107,0,0.07)', '0 0 50px rgba(255,107,0,0.28)', '0 0 20px rgba(255,107,0,0.07)'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)', boxShadow: '0 0 10px rgba(255,107,0,0.6)' }} />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.25)' }}>
                <motion.div animate={{ opacity: [1, 0.35, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>
                  <Clock size={22} style={{ color: '#FF6B00', filter: 'drop-shadow(0 0 8px rgba(255,107,0,0.8))' }} />
                </motion.div>
              </div>

              <p className="font-heading font-bold text-xs uppercase tracking-[0.3em] mb-2"
                style={{ color: '#FF8533', textShadow: '0 0 14px rgba(255,107,0,0.6)' }}>
                Limited Availability
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-6xl text-white leading-none"
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.12)' }}>3</span>
                <span className="font-heading font-bold text-2xl text-[#FF8533] leading-none"
                  style={{ textShadow: '0 0 12px rgba(255,107,0,0.55)' }}>SPOTS</span>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00]"
                    style={{ boxShadow: '0 0 8px rgba(255,107,0,0.9)' }} />
                </motion.div>
                <Users size={13} className="text-[#FF8533]" />
                <span className="font-heading font-semibold text-sm text-white/88">Only 3 new clients this month</span>
              </div>
              <p className="font-body text-white/82 text-sm leading-relaxed mb-7 flex-1">
                Yaroslav limits new clients to ensure elite personal attention. Once filled, the waitlist opens. Don&apos;t miss your window.
              </p>
              <motion.a
                href={TRAINER.whatsappBookingUrl} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-[0.18em] py-4 rounded-xl border border-[#FF6B00]/50 text-[#FF8533] hover:bg-[#FF6B00]/10 transition-colors duration-200"
                style={{ boxShadow: '0 0 25px rgba(255,107,0,0.25)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(255,107,0,0.55)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <ArrowRight size={15} /> Claim Your Spot
              </motion.a>
              <p className="text-center font-body text-white/60 text-[10px] mt-2.5 tracking-widest uppercase">Dubai · This month only</p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
