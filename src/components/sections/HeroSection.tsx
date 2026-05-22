'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { MessageCircle, ChevronDown, ArrowRight } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import { TRAINER } from '@/lib/constants'
import { GoldButton } from '@/components/ui/GoldButton'

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const sx = useSpring(mouseX, { stiffness: 55, damping: 18 })
  const sy = useSpring(mouseY, { stiffness: 55, damping: 18 })
  const textX = useTransform(sx, [-0.5, 0.5], ['-8px', '8px'])
  const textY = useTransform(sy, [-0.5, 0.5], ['-5px', '5px'])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.8
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Solid base — blocks 3D gym from bleeding through hero video */}
      <div className="absolute inset-0 z-[0] bg-[#080808]" />

      {/* ── Video — чистое без оверлеев ──────────────── */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        style={{ opacity: 0.45 }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* только тонкий градиент снизу для читаемости текста */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* ── Контент по центру ─────────────────────────── */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-28 pb-12 md:pb-16 flex flex-col items-center text-center"
        style={{ x: textX, y: textY }}
      >
        {/* Nano-tech label */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-7"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00FF7F]" />
          <p className="font-heading font-semibold text-[#00FF7F] text-xs uppercase tracking-[0.3em]"
            style={{ textShadow: '0 0 18px rgba(0,255,127,0.6)' }}>
            Dubai&apos;s Premier Boxing &amp; Fitness Coach
          </p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#FF6B00]" />
        </motion.div>

        {/* Heading */}
        <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] text-white leading-none tracking-tight mb-1">
          <WordReveal text="TRAIN LIKE" delay={0.35} />
        </h1>
        <h1
          className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-none tracking-tight mb-8"
          style={{
            background: 'linear-gradient(90deg, #C9A84C 0%, #F0C866 30%, #FFD700 50%, #F0C866 70%, #C9A84C 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'goldShimmer 3.5s linear infinite',
            filter: 'drop-shadow(0 0 20px rgba(212,168,71,0.5))',
          }}
        >
          <WordReveal text="A CHAMPION" delay={0.62} />
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="font-body text-white/82 text-base md:text-lg max-w-md leading-relaxed mb-9"
        >
          Elite boxing & fitness coaching in Dubai.
          Real technique. Real results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {/* Primary — cyber green book now */}
          <motion.a
            href={TRAINER.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00FF7F] hover:bg-[#00e872] text-[#080808] font-heading font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl shadow-[0_0_35px_rgba(0,255,127,0.35)] transition-colors duration-200"
            whileHover={{ scale: 1.04, boxShadow: '0 0 55px rgba(0,255,127,0.55)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Book Training <ArrowRight size={15} />
          </motion.a>

          <GoldButton href={TRAINER.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
            <MessageCircle size={15} /> WhatsApp
          </GoldButton>

          <GoldButton href={TRAINER.instagramUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
            <InstagramIcon size={15} /> Instagram
          </GoldButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center justify-center gap-8 mt-12 pt-7 border-t border-[#00FF7F]/10 w-full max-w-sm"
        >
          {[
            { value: '8+', label: 'Years', color: '#D4A847' },
            { value: '200+', label: 'Clients', color: '#00FF7F' },
            { value: '300', label: 'AED/session', color: '#FF6B00' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="text-center">
                <p className="font-display text-2xl leading-none" style={{ color: stat.color }}>{stat.value}</p>
                <p className="font-body text-white/65 text-[10px] uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
              {i < 2 && <div className="w-px h-6 bg-white/10" />}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ChevronDown size={18} className="text-gold/50" />
        </motion.div>
        <p className="font-heading text-[8px] text-white/20 uppercase tracking-[0.45em]">Scroll</p>
      </motion.div>
    </section>
  )
}
