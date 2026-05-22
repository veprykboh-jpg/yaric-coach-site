'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Calendar } from 'lucide-react'
import { TRAINER } from '@/lib/constants'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [showLabel, setShowLabel] = useState<'whatsapp' | 'book' | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
        >
          {/* Tooltip label */}
          <AnimatePresence>
            {showLabel === 'book' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute bottom-full right-0 mb-2 mr-1 bg-[#0F0F0F] border border-gold/20 text-gold text-xs font-heading tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none"
              >
                Book a Session
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showLabel === 'whatsapp' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute bottom-full right-0 mb-16 mr-1 bg-[#0F0F0F] border border-[#25D366]/20 text-[#25D366] text-xs font-heading tracking-wider px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none"
              >
                Chat on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>

          {/* Book button */}
          <motion.a
            href={TRAINER.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setShowLabel('book')}
            onHoverEnd={() => setShowLabel(null)}
            className="w-13 h-13 flex items-center justify-center rounded-2xl bg-gold hover:bg-gold-light shadow-gold transition-colors duration-200"
            aria-label="Book a session"
            style={{ width: 52, height: 52 }}
          >
            <Calendar size={22} className="text-[#0A0A0A]" />
          </motion.a>

          {/* WhatsApp button */}
          <motion.a
            href={TRAINER.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setShowLabel('whatsapp')}
            onHoverEnd={() => setShowLabel(null)}
            className="flex items-center justify-center rounded-2xl bg-[#25D366] hover:bg-[#1ebe57] shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-colors duration-200"
            aria-label="Chat on WhatsApp"
            style={{ width: 52, height: 52 }}
          >
            <MessageCircle size={22} className="text-white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
