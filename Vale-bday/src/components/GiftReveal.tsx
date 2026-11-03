import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Gift, Sparkles, CheckCircle2 } from 'lucide-react'
import { birthdayData } from '../data/birthdayContent'
import { soundscape } from '../utils/soundscape'

export const GiftReveal: React.FC = () => {
  const { surpriseBox } = birthdayData
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true)
      soundscape.playSparkleBurst()

      // Confetti burst from box position
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#D6B875', '#D9A6A0', '#B9ADD9', '#F8F4ED', '#352B46'],
        })
      } catch {
        // Fallback gracefully
      }
    } else {
      setIsOpen(false)
    }
  }

  return (
    <section id="surprise" className="py-24 px-6 relative max-w-4xl mx-auto text-center">
      {/* Category Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] font-sans text-[#D9A6A0] font-semibold"
      >
        <Gift className="w-3.5 h-3.5 text-[#D6B875]" />
        <span>Interactive Milestone</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-3xl sm:text-5xl text-[#352B46] font-normal tracking-tight mb-4"
      >
        {surpriseBox.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-sans text-sm sm:text-base text-[#352B46]/70 max-w-md mx-auto mb-12"
      >
        {isOpen ? surpriseBox.openedInstruction : surpriseBox.instruction}
      </motion.p>

      {/* 3D Gift Box Container */}
      <div className="relative inline-block my-6 cursor-pointer select-none" onClick={handleOpenGift}>
        {/* Soft radial glow */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-[#D6B875]/25 via-[#D9A6A0]/20 to-[#B9ADD9]/20 rounded-full blur-2xl -z-10" />

        <div className="relative w-44 sm:w-52 h-44 sm:h-52 mx-auto flex flex-col items-center justify-end">
          {/* GIFT LID */}
          <motion.div
            className="absolute top-4 sm:top-5 z-20 w-48 sm:w-56 h-14 bg-gradient-to-r from-[#D9A6A0] via-[#E8BBB5] to-[#D9A6A0] rounded-xl shadow-lg border-b-4 border-[#C78F89] flex items-center justify-center"
            animate={
              isOpen
                ? { y: -65, rotate: -16, x: -18, opacity: 0.95 }
                : { y: 0, rotate: 0, x: 0, opacity: 1 }
            }
            transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          >
            {/* Ribbon on Lid */}
            <div className="w-8 h-full bg-[#D6B875] shadow-xs flex items-center justify-center">
              <div className="w-1.5 h-full bg-[#FAF7F2]/40" />
            </div>

            {/* Lid Bow */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-4 border-[#D6B875] -rotate-45 shadow-xs" />
              <div className="w-6 h-6 rounded-full border-4 border-[#D6B875] rotate-45 -ml-1.5 shadow-xs" />
              <div className="absolute w-4 h-4 rounded-full bg-[#D6B875] shadow-sm" />
            </div>
          </motion.div>

          {/* GIFT BASE */}
          <motion.div
            className="w-40 sm:w-48 h-32 sm:h-36 bg-gradient-to-b from-[#FAF7F2] to-[#EAE3D6] rounded-2xl border-2 border-[#D9A6A0]/40 shadow-xl relative overflow-hidden flex items-center justify-center"
            whileHover={{ scale: isOpen ? 1 : 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Vertical Ribbon */}
            <div className="absolute w-8 h-full bg-[#D6B875] shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-full bg-[#FAF7F2]/30" />
            </div>

            {/* Horizontal Ribbon */}
            <div className="absolute w-full h-8 bg-[#D6B875] shadow-inner flex items-center justify-center">
              <div className="w-full h-1.5 bg-[#FAF7F2]/30" />
            </div>

            <Sparkles className="absolute bottom-3 right-3 w-4 h-4 text-[#D6B875] animate-spin [animation-duration:10s]" />
          </motion.div>
        </div>

        {/* Action Prompt Pill */}
        <div className="mt-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6B875]/60 bg-[#FAF7F2] text-xs font-sans font-medium text-[#352B46] shadow-xs hover:border-[#D6B875] transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B875]" />
            {isOpen ? 'Tap to close box' : 'Tap to unlock message'}
          </span>
        </div>
      </div>

      {/* POPPED OUT BIRTHDAY MESSAGE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260, delay: 0.15 }}
            className="mt-8 max-w-lg mx-auto bg-gradient-to-br from-[#352B46] to-[#251E32] text-[#F8F4ED] rounded-3xl p-8 sm:p-10 border-2 border-[#D6B875] shadow-2xl relative overflow-hidden"
          >
            {/* Shimmer background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B875]/10 rounded-full blur-2xl" />

            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D6B875] font-semibold mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Milestone Unlocked</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8F4ED] tracking-wide mb-4 leading-snug">
              "{surpriseBox.mainMessage}"
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#F8F4ED]/80 leading-relaxed font-light">
              {surpriseBox.secondaryMessage}
            </p>

            <div className="mt-6 pt-4 border-t border-[#F8F4ED]/15 flex items-center justify-center gap-2 font-handwriting text-xl text-[#D6B875]">
              <Sparkles className="w-4 h-4" />
              <span>Leveling up into another incredible chapter!</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

