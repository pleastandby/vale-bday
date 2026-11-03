import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { birthdayData } from '../data/birthdayContent'

interface BirthdayHeroProps {
  onScrollNext?: () => void
}

export const BirthdayHero: React.FC<BirthdayHeroProps> = ({ onScrollNext }) => {
  const { introduction } = birthdayData

  return (
    <section id="introduction" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-20 max-w-4xl mx-auto">
      {/* Editorial Category Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.25em] font-sans text-[#D9A6A0] font-semibold"
      >
        <span className="w-6 h-px bg-[#D9A6A0]" />
        <span>{introduction.overheadBadge}</span>
        <span className="w-6 h-px bg-[#D9A6A0]" />
      </motion.div>

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#352B46] font-normal leading-tight tracking-tight mb-4"
      >
        {introduction.headline}
      </motion.h2>

      {/* Hero Name Spotlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative my-6 sm:my-8 inline-block"
      >
        <span className="relative z-10 font-serif text-6xl sm:text-8xl md:text-9xl font-semibold tracking-wider text-[#352B46] uppercase bg-gradient-to-r from-[#352B46] via-[#594269] to-[#352B46] bg-clip-text text-transparent">
          {introduction.highlightedName}
        </span>

        {/* Soft decorative underline & sparkle */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-transparent via-[#D6B875] to-transparent mx-auto mt-2 rounded-full"
        />

        <Sparkles className="absolute -top-3 -right-5 sm:-right-8 w-6 h-6 sm:w-8 sm:h-8 text-[#D6B875] animate-pulse" />
      </motion.div>

      {/* Introductory Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="max-w-2xl mx-auto mt-4 px-6 py-6 rounded-2xl bg-gradient-to-b from-[#FAF7F2]/80 to-[#F8F4ED]/60 border border-[#D9A6A0]/25 shadow-sm backdrop-blur-xs"
      >
        <p className="font-serif text-lg sm:text-2xl text-[#352B46]/85 leading-relaxed italic">
          "{introduction.narrative}"
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-16 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={onScrollNext}
      >
        <span className="text-xs uppercase tracking-widest text-[#352B46]/60 font-sans group-hover:text-[#352B46] transition-colors">
          {introduction.scrollCue}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full border border-[#D9A6A0]/40 flex items-center justify-center text-[#352B46]/60 group-hover:border-[#D6B875] group-hover:text-[#352B46] transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

