'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin, ArrowRight } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import { TRAINER } from '@/lib/constants'
import { GoldButton } from '@/components/ui/GoldButton'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex flex-col items-center gap-5"
        >
          <motion.div variants={fadeUpVariants} className="flex items-center gap-3">
            <div className="w-8 h-px bg-gold"/>
            <p className="font-heading text-gold text-xs uppercase tracking-[0.4em]">Get in Touch</p>
            <div className="w-8 h-px bg-gold"/>
          </motion.div>

          <motion.h2 variants={fadeUpVariants}
            className="font-display text-5xl sm:text-7xl md:text-8xl text-white leading-none tracking-tight">
            READY TO<br/><span className="text-shimmer">START?</span>
          </motion.h2>

          <motion.p variants={fadeUpVariants}
            className="font-body text-white/50 text-base max-w-md leading-relaxed">
            Message on WhatsApp to book your first session. Response within hours.
          </motion.p>

          {/* WhatsApp primary */}
          <motion.div variants={fadeUpVariants}>
            <motion.a
              href={TRAINER.whatsappBookingUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-heading font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-2xl shadow-[0_0_35px_rgba(37,211,102,0.25)] transition-colors duration-200"
              whileHover={{ scale: 1.03, boxShadow: '0 0 55px rgba(37,211,102,0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <MessageCircle size={18}/> Chat on WhatsApp <ArrowRight size={15}/>
            </motion.a>
          </motion.div>

          {/* Instagram + location */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center justify-center gap-4 mt-1">
            <GoldButton href={TRAINER.instagramUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              <InstagramIcon size={14}/> @{TRAINER.instagram}
            </GoldButton>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="flex items-center gap-2 text-white/30">
            <MapPin size={12} className="text-gold/40"/>
            <p className="font-body text-xs">Premium facilities across Dubai · {TRAINER.whatsappDisplay}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
