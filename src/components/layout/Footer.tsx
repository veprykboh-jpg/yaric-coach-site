'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/InstagramIcon'
import { TRAINER, NAV_LINKS } from '@/lib/constants'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-black/60 backdrop-blur-md border-t border-white/5 overflow-hidden">
      {/* Gold gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* Large name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display text-shimmer text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight">
            YAROSLAV GOLOD
          </h2>
          <p className="font-heading text-white/80 text-sm tracking-[0.3em] uppercase mt-3 ml-1">
            Elite Boxing & Fitness Coach · Dubai
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Quick Links */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/80 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-gold mt-0.5 shrink-0" />
                <a
                  href={TRAINER.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/80 hover:text-gold transition-colors duration-200 text-sm"
                >
                  {TRAINER.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="font-body text-white/80 text-sm">Dubai, UAE</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Follow
            </h3>
            <a
              href={TRAINER.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/15 transition-all duration-300">
                <InstagramIcon size={18} className="text-gold" />
              </div>
              <div>
                <p className="font-heading font-medium text-white text-sm group-hover:text-gold transition-colors">
                  @{TRAINER.instagram}
                </p>
                <p className="font-body text-white/80 text-xs">Instagram</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-white/80 text-xs">
            © {year} Yaroslav Golod. All rights reserved.
          </p>
          <p className="font-body text-white/65 text-xs">
            Dubai, UAE · Elite Boxing & Fitness
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
