'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariants, viewportOnce } from '@/lib/animations'

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85
    }
  }, [])

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A847]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-center mb-10"
        >
          <p className="font-heading font-semibold uppercase tracking-[0.35em] text-xs md:text-sm mb-3"
            style={{ color: '#E0BC6B', textShadow: '0 0 20px rgba(224,188,107,0.55)' }}>
            Watch &amp; Feel the Energy
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none"
            style={{ textShadow: '0 2px 30px rgba(255,255,255,0.08)' }}>
            SEE IT IN ACTION
          </h2>
          <div className="flex justify-center mt-5">
            <div className="h-[2px] w-20 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #D4A847 40%, #FFD700 50%, #D4A847 60%, transparent)', boxShadow: '0 0 14px rgba(212,168,71,0.8)' }} />
          </div>
        </motion.div>

        {/* Video — cinematic loop, no controls */}
        <motion.div
          variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          transition={{ delay: 0.15 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Animated glow frame */}
          <motion.div
            className="absolute -inset-[3px] rounded-3xl pointer-events-none z-0"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(135deg, rgba(212,168,71,0.6) 0%, rgba(0,255,127,0.15) 50%, rgba(212,168,71,0.6) 100%)',
              filter: 'blur(6px)',
            }}
          />

          {/* Video container */}
          <div className="relative z-10 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(212,168,71,0.3)', boxShadow: '0 0 80px rgba(0,0,0,0.9)' }}>

            <video
              ref={videoRef}
              src="/video/training.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />

            {/* Subtle vignette overlay */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%)' }} />

            {/* Left/right edge fade */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.2) 100%)' }} />

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-center justify-between"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}>
              <div className="flex items-center gap-2.5">
                <motion.div
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-[#00FF7F]"
                  style={{ boxShadow: '0 0 10px rgba(0,255,127,0.9)' }}
                />
                <span className="font-heading font-semibold text-white/80 text-sm uppercase tracking-widest">
                  Live Training · Dubai
                </span>
              </div>
              <span className="font-heading font-bold text-[#D4A847] text-xs uppercase tracking-widest"
                style={{ textShadow: '0 0 10px rgba(212,168,71,0.5)' }}>
                Yaroslav Golod
              </span>
            </div>

            {/* Gold corner accents */}
            <div className="absolute top-5 left-5 w-10 h-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[2px] rounded-full bg-[#D4A847]/70" />
              <div className="absolute top-0 left-0 w-[2px] h-full rounded-full bg-[#D4A847]/70" />
            </div>
            <div className="absolute top-5 right-5 w-10 h-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-[2px] rounded-full bg-[#D4A847]/70" />
              <div className="absolute top-0 right-0 w-[2px] h-full rounded-full bg-[#D4A847]/70" />
            </div>
            <div className="absolute bottom-14 left-5 w-10 h-10 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-[#D4A847]/40" />
              <div className="absolute bottom-0 left-0 w-[2px] h-full rounded-full bg-[#D4A847]/40" />
            </div>
            <div className="absolute bottom-14 right-5 w-10 h-10 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-[2px] rounded-full bg-[#D4A847]/40" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full rounded-full bg-[#D4A847]/40" />
            </div>
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce}
            transition={{ delay: 0.5 }}
            className="text-center font-body text-white/65 text-xs mt-5 tracking-widest uppercase"
          >
            Real training · Real clients · Real results
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}
