'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import { TRAINER } from '@/lib/constants'
import { GoldButton } from '@/components/ui/GoldButton'
import { fadeUpVariants, staggerContainer, viewportOnce } from '@/lib/animations'

export function InstagramSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-5"
        >
          <motion.div
            variants={fadeUpVariants}
            className="w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center"
            style={{ background: 'rgba(212,168,71,0.1)', border: '1px solid rgba(212,168,71,0.25)' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <InstagramIcon size={32} style={{ color: '#D4A847', filter: 'drop-shadow(0 0 10px rgba(212,168,71,0.6))' }} />
          </motion.div>

          <motion.p variants={fadeUpVariants}
            className="font-heading font-semibold text-[#D4A847] text-xs uppercase tracking-[0.4em]"
            style={{ textShadow: '0 0 16px rgba(212,168,71,0.5)' }}>
            Follow the Journey
          </motion.p>

          <motion.h2 variants={fadeUpVariants}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-white leading-none">
            @{TRAINER.instagram}
          </motion.h2>

          <motion.p variants={fadeUpVariants}
            className="font-body text-white/82 text-base md:text-lg max-w-xl leading-relaxed">
            Behind-the-scenes training, client transformations, fight prep, and everything that goes into building a champion.
          </motion.p>

          <motion.div variants={fadeUpVariants}>
            <GoldButton href={TRAINER.instagramUrl} target="_blank" rel="noopener noreferrer" size="lg">
              <InstagramIcon size={16} /> Follow on Instagram <ArrowRight size={15} />
            </GoldButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
