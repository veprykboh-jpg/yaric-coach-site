'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import { TRAINER } from '@/lib/constants'
import { GoldButton } from '@/components/ui/GoldButton'
import { fadeUpVariants, staggerContainer, viewportOnce } from '@/lib/animations'

export function InstagramSection() {
  return (
    <section className="relative section-padding bg-[#0A0A0A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]" />
        {/* Subtle Instagram-ish gradient hints, very muted */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-purple-900/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6"
        >
          {/* Icon */}
          <motion.div
            variants={fadeUpVariants}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center animate-float"
          >
            <InstagramIcon size={36} className="text-gold" />
          </motion.div>

          {/* Label */}
          <motion.p
            variants={fadeUpVariants}
            className="font-heading text-gold text-xs uppercase tracking-[0.4em]"
          >
            Follow the Journey
          </motion.p>

          {/* Handle */}
          <motion.h2
            variants={fadeUpVariants}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-white leading-none"
          >
            @{TRAINER.instagram}
          </motion.h2>

          {/* Sub copy */}
          <motion.p
            variants={fadeUpVariants}
            className="font-body text-[#8C8C8C] text-base md:text-lg max-w-xl leading-relaxed"
          >
            Behind-the-scenes training, client transformations, fight prep,
            and everything that goes into building a champion. Follow along.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUpVariants}>
            <GoldButton
              href={TRAINER.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <InstagramIcon size={16} />
              Follow on Instagram
              <ArrowRight size={15} />
            </GoldButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
