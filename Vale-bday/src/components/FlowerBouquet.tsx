import React from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, Heart, ChevronDown } from 'lucide-react'
import { birthdayData } from '../data/birthdayContent'
import { soundscape } from '../utils/soundscape'
import rosesBouquetImg from '../images/roses-bouquet.jpg'

interface FlowerBouquetProps {
  onContinue?: () => void
}

export const FlowerBouquet: React.FC<FlowerBouquetProps> = ({ onContinue }) => {
  const { flowers } = birthdayData

  const triggerRosePetals = () => {
    soundscape.playSparkleBurst()

    try {
      // Rose petal burst with rich shades of red, ruby, and gold
      confetti({
        particleCount: 55,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#A00020', '#C70039', '#E31B23', '#FF4D6D', '#D6B875', '#FAF7F2'],
        ticks: 220,
        gravity: 0.75,
        scalar: 1.25,
      })
    } catch {
      // Fallback gracefully
    }
  }

  // Floating background petal items
  const backgroundPetals = [
    { id: 1, left: '8%', delay: 0, duration: 8, size: 16 },
    { id: 2, left: '22%', delay: 2.2, duration: 10, size: 20 },
    { id: 3, left: '42%', delay: 4, duration: 9, size: 14 },
    { id: 4, left: '68%', delay: 1.2, duration: 11, size: 18 },
    { id: 5, left: '86%', delay: 3.4, duration: 8.5, size: 15 },
    { id: 6, left: '55%', delay: 5.2, duration: 9.5, size: 13 },
  ]

  return (
    <section
      id="flowers"
      className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-6 py-20 max-w-4xl mx-auto overflow-hidden"
    >
      {/* Drifting Background Rose Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        {backgroundPetals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -40, opacity: 0, rotate: 0 }}
            animate={{
              y: '110vh',
              opacity: [0, 0.75, 0.75, 0],
              rotate: [0, 180, 360],
              x: [0, 20, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: petal.duration,
              delay: petal.delay,
              ease: 'easeInOut',
            }}
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size * 1.3,
            }}
            className="absolute rounded-full bg-gradient-to-br from-[#D90429] to-[#7A0016] opacity-60 shadow-xs [clip-path:polygon(50%_0%,100%_40%,80%_100%,20%_100%,0%_40%)]"
          />
        ))}
      </div>

      {/* Atmospheric Warm Rosy Glow */}
      <div className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#D91E36]/15 via-[#D6B875]/15 to-[#B9ADD9]/15 blur-3xl pointer-events-none -z-10" />

      {/* Category Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.25em] font-sans text-[#D91E36] font-semibold bg-[#D91E36]/10 px-3.5 py-1.5 rounded-full border border-[#D91E36]/20"
      >
        <Heart className="w-3.5 h-3.5 text-[#D91E36] fill-[#D91E36]/40" />
        <span>{flowers.tag}</span>
        <Heart className="w-3.5 h-3.5 text-[#D91E36] fill-[#D91E36]/40" />
      </motion.div>

      {/* Section Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#352B46] font-normal tracking-tight mb-3"
      >
        {flowers.headline}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-serif italic text-lg sm:text-xl text-[#352B46]/75 max-w-lg mx-auto mb-10"
      >
        "{flowers.subheadline}"
      </motion.p>

      {/* Beautiful High-Resolution Bouquet Photograph Mount */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25, type: 'spring', damping: 22 }}
        className="relative my-4 cursor-pointer group select-none max-w-lg sm:max-w-xl w-full mx-auto"
        onClick={triggerRosePetals}
        title={flowers.flowerHint}
      >
        {/* Soft Radial Rose Glow */}
        <div className="absolute -inset-6 bg-gradient-to-t from-[#D91E36]/25 to-transparent rounded-3xl blur-2xl group-hover:from-[#D91E36]/40 transition-colors duration-500" />

        {/* Vintage Ivory Photo Frame */}
        <div className="relative bg-[#FAF7F2] p-3.5 sm:p-5 pb-5 rounded-3xl shadow-2xl border border-[#D6B875]/40 paper-texture transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.015]">
          {/* Subtle Decorative Tape at Top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape rounded-xs pointer-events-none z-10 -rotate-1" />

          {/* The High-Resolution Bouquet Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-[#2C1F2D]">
            <img
              src={rosesBouquetImg}
              alt="Luxury bouquet of red roses for Vale"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Vignette & Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#352B46]/35 via-transparent to-transparent pointer-events-none" />

            {/* Top Right Floating Badge */}
            <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[11px] font-sans font-medium text-[#352B46] shadow-sm flex items-center gap-1.5 border border-[#D6B875]/40">
              <Sparkles className="w-3 h-3 text-[#D6B875]" />
              <span>Never Wilts • Forever Yours</span>
            </div>
          </div>

          {/* Bottom Photo Caption / Tag */}
          <div className="mt-3.5 flex items-center justify-between px-2 text-xs text-[#352B46]/60 font-sans">
            <span className="font-serif italic text-sm text-[#352B46]/80">A Bouquet Across the Miles</span>
            <span className="font-handwriting text-lg text-[#D91E36] font-semibold">100% Fresh Today & Always</span>
          </div>
        </div>

        {/* Interaction Hint Pill */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D91E36]/30 text-xs font-sans text-[#352B46] shadow-2xs group-hover:border-[#D91E36] transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#D91E36]" />
            <span>{flowers.flowerHint}</span>
          </span>
        </div>
      </motion.div>

      {/* The Attached Handwritten Note */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative max-w-xl w-full bg-[#FAF7F2] rounded-3xl p-7 sm:p-10 border border-[#E8DFC8] shadow-xl shadow-[#352B46]/5 paper-texture mt-6"
      >
        {/* Decorative Rose Pin / Tag on Top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#9E0022] text-[#FAF7F2] text-[11px] uppercase tracking-widest font-sans font-semibold shadow-md flex items-center gap-1.5 border border-[#FAF7F2]">
          <Heart className="w-3 h-3 fill-current" />
          <span>{flowers.noteHeader}</span>
        </div>

        {/* Note Body */}
        <div className="pt-2">
          {/* Exact User Requested Note Quote */}
          <p className="font-serif italic text-xl sm:text-2xl text-[#352B46] leading-relaxed mb-4">
            "{flowers.noteText}"
          </p>

          <div className="w-16 h-px bg-[#D6B875]/50 mx-auto my-4" />

          <p className="font-sans text-sm sm:text-base text-[#352B46]/80 leading-relaxed font-light">
            {flowers.noteSubtext}
          </p>
        </div>
      </motion.div>

      {/* Step Into Universe Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-12"
      >
        <button
          onClick={onContinue}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#352B46] text-[#F8F4ED] font-sans text-sm sm:text-base font-medium tracking-wide shadow-lg shadow-[#352B46]/20 transition-all duration-300 hover:bg-[#433758] hover:shadow-xl hover:shadow-[#D6B875]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
        >
          <span>{flowers.continueButton}</span>
          <ChevronDown className="w-4 h-4 text-[#D6B875] transition-transform duration-300 group-hover:translate-y-1" />
          <span className="absolute inset-0 rounded-full border border-[#D6B875]/40 pointer-events-none" />
        </button>
      </motion.div>
    </section>
  )
}
