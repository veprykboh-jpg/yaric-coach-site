'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { TRAINER, NAV_LINKS } from '@/lib/constants'
import { GoldButton } from '@/components/ui/GoldButton'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'backdrop-blur-xl bg-black/70 border-b border-white/5 shadow-[0_1px_0_rgba(201,168,76,0.05)]'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
              <span className="font-display text-gold text-xl leading-none tracking-wider">YG</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-semibold text-white text-sm leading-none tracking-wide">
                Yaroslav Golod
              </p>
              <p className="font-body text-[10px] text-[#8C8C8C] tracking-widest uppercase mt-0.5">
                Elite Coach · Dubai
              </p>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-sm font-medium text-[#8C8C8C] hover:text-gold transition-colors duration-200 tracking-wide cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <GoldButton
              href={TRAINER.whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              Book Now
            </GoldButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#8C8C8C] hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-[#0F0F0F] border-l border-white/5 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="font-heading font-semibold text-white tracking-wide">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-[#8C8C8C] hover:text-gold">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 p-6 flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 px-4 font-heading font-medium text-white/70 hover:text-gold hover:bg-gold/5 rounded-xl transition-all duration-200 tracking-wide text-sm"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-6 border-t border-white/5">
                <GoldButton
                  href={TRAINER.whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                >
                  Book a Session
                </GoldButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
