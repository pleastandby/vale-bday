import React, { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, RotateCcw, Heart, PartyPopper } from 'lucide-react'
import { birthdayData } from '../data/birthdayContent'
import { soundscape } from '../utils/soundscape'

interface FinalCelebrationProps {
  onReplay: () => void
}

export const FinalCelebration: React.FC<FinalCelebrationProps> = ({ onReplay }) => {
  const { finale } = birthdayData
  const [candleBlown, setCandleBlown] = useState(false)

  const triggerConfettiCannons = () => {
    soundscape.playSparkleBurst()
    try {
      // Left cannon
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#D6B875', '#D9A6A0', '#B9ADD9', '#F8F4ED'],
      })
      // Right cannon
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#D6B875', '#D9A6A0', '#B9ADD9', '#F8F4ED'],
      })
    } catch {
      // safe fallback
    }
  }

  const handleCandleClick = () => {
    if (!candleBlown) {
      setCandleBlown(true)
      triggerConfettiCannons()
    } else {
      setCandleBlown(false)
    }
  }

  return (
    <section id="finale" className="py-24 px-6 relative max-w-4xl mx-auto text-center">
      {/* Category Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.25em] font-sans text-[#D9A6A0] font-semibold"
      >
        <PartyPopper className="w-3.5 h-3.5 text-[#D6B875]" />
        <span>Celebration Finale</span>
      </motion.div>

      {/* Main Celebration Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#352B46] font-semibold tracking-tight leading-tight mb-4"
      >
        {finale.headline}
      </motion.h2>

      {/* Supporting Wish */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="font-serif text-xl sm:text-2xl text-[#352B46]/80 italic max-w-xl mx-auto mb-12"
      >
        "{finale.subheadline}"
      </motion.p>

      {/* Interactive Birthday Cake Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative my-8 inline-block cursor-pointer select-none group"
        onClick={handleCandleClick}
      >
        {/* Cake Glow */}
        <div className="absolute -inset-6 bg-gradient-to-t from-[#D6B875]/25 to-transparent rounded-full blur-xl pointer-events-none" />

        <div className="relative flex flex-col items-center">
          {/* CANDLE & FLAME */}
          <div className="relative flex flex-col items-center">
            {/* Flickering Flame */}
            {!candleBlown ? (
              <motion.div
                animate={{
                  scale: [1, 1.15, 0.95, 1.1],
                  opacity: [0.9, 1, 0.85, 1],
                  y: [0, -1, 0.5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut',
                }}
                className="w-4 h-6 rounded-full bg-gradient-to-t from-[#D6B875] via-[#E8B84B] to-[#FFF3D1] shadow-lg shadow-[#D6B875]/80 flex items-center justify-center cursor-pointer"
                title="Tap to make a wish & blow out candle!"
              >
                <div className="w-1.5 h-2 rounded-full bg-white opacity-80" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: [0, 1, 0], y: [-5, -16] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center justify-center text-xs text-[#352B46]/60 font-handwriting"
              >
                <Sparkles className="w-4 h-4 text-[#D6B875]" />
              </motion.div>
            )}

            {/* Candle Stick */}
            <div className="w-2.5 h-9 bg-gradient-to-b from-[#FAF7F2] to-[#EAE3D6] border-x border-[#D9A6A0]/40 rounded-t-xs shadow-xs relative overflow-hidden">
              <div className="absolute inset-0 bg-repeating-linear-gradient-[45deg,transparent,transparent_2px,#D6B875_2px,#D6B875_4px] opacity-40" />
            </div>
          </div>

          {/* TOP CAKE TIER */}
          <div className="w-28 sm:w-36 h-12 bg-gradient-to-r from-[#F8F4ED] via-[#FFFBF5] to-[#F8F4ED] rounded-t-2xl border border-[#D9A6A0]/40 shadow-sm relative flex items-center justify-center">
            {/* Icing scalloped drops */}
            <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-3.5 h-3 rounded-full bg-[#FAF7F2] border-b border-[#D9A6A0]/30 shadow-2xs" />
              ))}
            </div>
            <span className="text-[10px] font-sans tracking-widest text-[#D9A6A0] font-semibold">VALE</span>
          </div>

          {/* BOTTOM CAKE TIER */}
          <div className="w-40 sm:w-52 h-16 bg-gradient-to-r from-[#FAF7F2] via-[#FFF9F0] to-[#FAF7F2] rounded-t-2xl border border-[#D9A6A0]/40 shadow-md relative flex items-center justify-center">
            {/* Decorative Gold Dots */}
            <div className="flex gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#D6B875] opacity-70" />
              ))}
            </div>
          </div>

          {/* CAKE STAND / PLATE */}
          <div className="w-52 sm:w-64 h-3 bg-gradient-to-r from-[#D6B875] via-[#E8CA88] to-[#D6B875] rounded-full shadow-lg border-t border-white/50" />
        </div>

        {/* Interactive Candle Prompt */}
        <p className="mt-5 font-handwriting text-xl sm:text-2xl text-[#352B46] font-semibold">
          {candleBlown ? finale.wishMadeText : finale.cakeInstruction}
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          onClick={triggerConfettiCannons}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D6B875] to-[#B89647] text-[#352B46] font-sans text-sm font-semibold tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          <PartyPopper className="w-4 h-4 text-[#352B46]" />
          <span>{finale.celebrateMoreButton}</span>
        </button>

        <button
          onClick={onReplay}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#352B46] border border-[#D9A6A0]/50 font-sans text-sm font-medium hover:border-[#D6B875] hover:bg-[#FAF7F2] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-[#D9A6A0]" />
          <span>{finale.replayButton}</span>
        </button>
      </motion.div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-[#D9A6A0]/25 flex flex-col items-center justify-center gap-2">
        <p className="font-serif text-sm sm:text-base text-[#352B46]/70 flex items-center gap-2">
          <span>{finale.footerText}</span>
          <Heart className="w-4 h-4 text-[#D9A6A0] fill-[#D9A6A0]/40" />
        </p>
        <p className="font-sans text-[11px] uppercase tracking-widest text-[#352B46]/40">
          Happy Birthday Valerie • A Little Universe
        </p>
      </div>
    </section>
  )
}

