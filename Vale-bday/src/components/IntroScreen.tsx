import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Mail, Heart } from 'lucide-react'
import { birthdayData } from '../data/birthdayContent'
import { soundscape } from '../utils/soundscape'

interface IntroScreenProps {
  onOpen: () => void
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onOpen }) => {
  const { invitation } = birthdayData

  const handleOpen = () => {
    soundscape.playSparkleBurst()
    onOpen()
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-12"
    >
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#D9A6A0]/25 via-[#B9ADD9]/20 to-[#D6B875]/15 blur-3xl pointer-events-none -z-10" />

      {/* Decorative Constellation Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D6B875]/40 bg-[#F8F4ED]/80 backdrop-blur-sm text-xs text-[#352B46]/80 mb-8 shadow-xs"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#D6B875]" />
        <span className="font-serif tracking-widest uppercase text-[11px]">A Little Universe</span>
        <Sparkles className="w-3.5 h-3.5 text-[#D6B875]" />
      </motion.div>

      {/* Illustrated Envelope / Gift Icon with Gentle Ambient Float */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 4.5,
            ease: 'easeInOut',
          },
          scale: { duration: 0.8, ease: 'easeOut' },
          opacity: { duration: 0.8 },
        }}
        className="relative mb-10 cursor-pointer group"
        onClick={handleOpen}
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-b from-[#F8F4ED] to-[#FAF7F2] border border-[#D9A6A0]/50 shadow-xl shadow-[#352B46]/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:border-[#D6B875]">
          {/* Subtle envelope lines */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-30">
            <div className="absolute top-0 left-0 right-0 h-1/2 border-b border-[#D9A6A0] [clip-path:polygon(0_0,50%_100%,100%_0)] bg-[#D9A6A0]/10" />
          </div>

          {/* Central Wax Seal / Stamp */}
          <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#D6B875] to-[#B89647] flex items-center justify-center text-[#352B46] shadow-md border border-[#F8F4ED]">
            <Heart className="w-5 h-5 text-[#F8F4ED] fill-[#F8F4ED]/80 drop-shadow-xs" />
          </div>

          <Mail className="absolute bottom-3 right-3 w-4 h-4 text-[#B9ADD9]/60" />
        </div>

        {/* Pulsing Aura */}
        <div className="absolute -inset-2 rounded-3xl bg-[#D6B875]/20 -z-10 blur-md group-hover:bg-[#D6B875]/35 transition-all duration-500" />
      </motion.div>

      {/* Main Salutation */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-5xl sm:text-7xl font-serif text-[#352B46] font-normal tracking-tight mb-4"
      >
        {invitation.greeting}
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="text-lg sm:text-xl font-sans text-[#352B46]/75 max-w-md mx-auto mb-10 leading-relaxed font-light"
      >
        {invitation.subtitle}
      </motion.p>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#352B46] text-[#F8F4ED] font-sans text-sm sm:text-base font-medium tracking-wide shadow-lg shadow-[#352B46]/20 transition-all duration-300 hover:bg-[#433758] hover:shadow-xl hover:shadow-[#D6B875]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
        >
          <span>{invitation.buttonText}</span>
          <Sparkles className="w-4 h-4 text-[#D6B875] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

          {/* Button Subtle Border Glow */}
          <span className="absolute inset-0 rounded-full border border-[#D6B875]/40 pointer-events-none" />
        </button>

        <p className="mt-4 text-xs font-handwriting text-[#352B46]/60 text-base">
          {invitation.hint}
        </p>
      </motion.div>
    </motion.section>
  )
}

