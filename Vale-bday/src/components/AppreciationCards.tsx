import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Star, Smile, RotateCw } from 'lucide-react'
import { birthdayData, type AppreciationCard } from '../data/birthdayContent'
import { soundscape } from '../utils/soundscape'

export const AppreciationCards: React.FC = () => {
  const { appreciation } = birthdayData
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

  const toggleFlip = (id: string, index: number) => {
    soundscape.playChime(index)
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D6B875]" />
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#D9A6A0]" />
      case 'Star':
        return <Star className="w-5 h-5 text-[#D6B875]" />
      case 'Smile':
      default:
        return <Smile className="w-5 h-5 text-[#B9ADD9]" />
    }
  }

  return (
    <section id="appreciation" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] font-sans text-[#D9A6A0] font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D6B875]" />
          <span>Little Reminders</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl text-[#352B46] font-normal tracking-tight"
        >
          {appreciation.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 font-sans text-sm sm:text-base text-[#352B46]/70 max-w-lg mx-auto"
        >
          {appreciation.subtitle}
        </motion.p>
      </div>

      {/* 2x2 Interactive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {appreciation.cards.map((card: AppreciationCard, index: number) => {
          const isFlipped = !!flippedCards[card.id]

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-72 sm:h-80 w-full perspective-1000 cursor-pointer select-none"
              onClick={() => toggleFlip(card.id, index)}
            >
              {/* Inner Flippable Container */}
              <motion.div
                className="w-full h-full relative transform-style-3d transition-transform duration-700 ease-in-out"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-[#F8F4ED] p-7 sm:p-8 border border-[#D9A6A0]/40 shadow-md hover:shadow-xl hover:border-[#D6B875]/60 transition-all flex flex-col justify-between paper-texture">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest font-sans font-semibold text-[#D9A6A0] bg-[#D9A6A0]/10 px-2.5 py-1 rounded-full">
                      {card.category}
                    </span>
                    <div className="p-2 rounded-full bg-[#FAF7F2] border border-[#D9A6A0]/30 shadow-2xs">
                      {getIcon(card.frontIcon)}
                    </div>
                  </div>

                  <div className="my-auto text-left">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#352B46] font-normal mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-handwriting text-xl text-[#352B46]/75">
                      "{card.highlight}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#352B46]/50 pt-4 border-t border-[#D9A6A0]/20 font-sans">
                    <span className="flex items-center gap-1.5 font-medium text-[#D6B875]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Tap to reveal
                    </span>
                    <RotateCw className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-[#352B46] to-[#251E32] text-[#F8F4ED] p-7 sm:p-8 border border-[#D6B875]/50 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest font-sans font-semibold text-[#D6B875]">
                      {card.title}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#D6B875]" />
                  </div>

                  <div className="my-auto text-left">
                    <p className="font-serif text-base sm:text-lg text-[#F8F4ED]/90 leading-relaxed italic">
                      "{card.message}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#F8F4ED]/50 pt-4 border-t border-[#F8F4ED]/15 font-sans">
                    <span className="text-[#D9A6A0]">✦ Just for you</span>
                    <span className="flex items-center gap-1">
                      <RotateCw className="w-3.5 h-3.5" />
                      Flip back
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
