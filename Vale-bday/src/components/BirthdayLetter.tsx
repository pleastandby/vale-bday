import React from 'react'
import { motion } from 'framer-motion'
import { Feather, Heart, Sparkles } from 'lucide-react'
import { birthdayData } from '../data/birthdayContent'

export const BirthdayLetter: React.FC = () => {
  const { letter } = birthdayData

  return (
    <section id="letter" className="py-24 px-6 relative max-w-4xl mx-auto">
      {/* Editorial Category Tag */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] font-sans text-[#D9A6A0] font-semibold"
        >
          <Feather className="w-3.5 h-3.5 text-[#D6B875]" />
          <span>Personal Note</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl text-[#352B46] font-normal tracking-tight"
        >
          {letter.header}
        </motion.h2>
      </div>

      {/* Handcrafted Stationery Envelope / Letter Mount */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#FAF7F2] rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#E8DFC8] shadow-xl shadow-[#352B46]/5 paper-texture"
      >
        {/* Decorative Vintage Stamp / Wax Seal in the Corner */}
        <div className="absolute -top-6 right-8 sm:right-12 w-14 h-14 rounded-full bg-gradient-to-br from-[#D6B875] via-[#C9A658] to-[#9E7A31] border-2 border-[#FAF7F2] shadow-lg flex items-center justify-center text-[#352B46]">
          <Heart className="w-6 h-6 text-[#FAF7F2] fill-[#FAF7F2]/80 drop-shadow-sm" />
        </div>

        {/* Delicate Inner Border */}
        <div className="border border-[#D6B875]/30 rounded-2xl p-6 sm:p-10 relative">
          {/* Subtle Top Flourish */}
          <div className="flex items-center justify-center gap-2 mb-8 text-[#D6B875]/60">
            <span className="h-px w-12 bg-[#D6B875]/40" />
            <Sparkles className="w-4 h-4 text-[#D6B875]" />
            <span className="h-px w-12 bg-[#D6B875]/40" />
          </div>

          {/* Salutation */}
          <h3 className="font-serif text-2xl sm:text-3xl text-[#352B46] font-medium mb-6">
            {letter.salutation}
          </h3>

          {/* Special Featured Quote on Destiny & Connection */}
          {letter.specialQuote && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="my-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#D9A6A0]/15 via-[#FAF7F2] to-[#D6B875]/15 border-l-4 border-[#D6B875] shadow-xs relative"
            >
              <p className="font-serif italic text-xl sm:text-2xl text-[#352B46] leading-relaxed">
                "{letter.specialQuote}"
              </p>
              <div className="mt-3 flex items-center gap-2 font-handwriting text-lg text-[#D6B875]">
                <Sparkles className="w-4 h-4" />
                <span>A journey that was meant to be</span>
              </div>
            </motion.div>
          )}

          {/* Letter Paragraphs */}
          <div className="space-y-4 sm:space-y-5 text-[#352B46]/85 font-serif text-lg sm:text-xl leading-relaxed">
            {letter.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0 || idx === letter.paragraphs.length - 1
                    ? 'font-medium text-[#352B46]'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Signoff & Signature */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-[#D9A6A0]/25 text-right">
            <p className="font-sans text-xs uppercase tracking-widest text-[#352B46]/60 mb-2">
              {letter.signoff}
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#352B46] font-bold">
              {letter.signature}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
