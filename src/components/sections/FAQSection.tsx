'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeUpVariants, viewportOnce } from '@/lib/animations'

const FAQ = [
  {
    q: 'Do I need experience to start training?',
    a: 'Not at all. Yaroslav trains complete beginners through to advanced fighters. Your first session includes a full fitness assessment and a personalized program built around where you are today.',
  },
  {
    q: 'Where do sessions take place in Dubai?',
    a: 'Training is held at premium facilities across Dubai — DIFC, JBR, Business Bay, and Palm Jumeirah. Location is always chosen based on what is most convenient for you.',
  },
  {
    q: 'How many times per week should I train?',
    a: '2–3 sessions per week is the sweet spot for most clients. For fight preparation or serious body transformation, 4–5 sessions per week delivers the fastest results.',
  },
  {
    q: 'What happens in the 150 AED trial session?',
    a: 'The trial is a full 60-minute session — fitness assessment, technique introduction, and a personalized plan built for your goals. No sales pressure, just real training.',
  },
  {
    q: 'Can I train just for fitness and weight loss, not boxing?',
    a: 'Absolutely. Many clients train purely for body composition and cardio. Boxing-based conditioning is one of the most effective fat-burning methods available — more engaging than a standard gym workout.',
  },
  {
    q: 'How do I book?',
    a: 'Message Yaroslav directly on WhatsApp. He personally responds to every message and will set up your schedule from there. No forms, no apps — just direct contact.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-12 md:py-20">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A847]/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading label="Got Questions?" title="FAQ" center className="mb-10" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3"
        >
          {FAQ.map((item, i) => (
            <motion.div key={i} variants={fadeUpVariants}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left glass rounded-2xl px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 hover:border-[#D4A847]/40 transition-all duration-200 group"
              >
                <span className="font-heading font-semibold text-white text-sm md:text-base leading-snug">
                  {item.q}
                </span>
                <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border border-[#D4A847]/30 group-hover:border-[#D4A847]/70 transition-colors duration-200">
                  {open === i
                    ? <Minus size={13} className="text-[#D4A847]" />
                    : <Plus size={13} className="text-[#D4A847]" />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 pt-3">
                      <p className="font-body text-white/85 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
