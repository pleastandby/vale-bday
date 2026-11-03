import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Maximize2, Camera } from 'lucide-react'
import { birthdayData, type ScrapbookPhoto } from '../data/birthdayContent'
import { LightboxModal } from './LightboxModal'

export const ScrapbookGallery: React.FC = () => {
  const { scrapbook } = birthdayData
  const [selectedPhoto, setSelectedPhoto] = useState<ScrapbookPhoto | null>(null)

  return (
    <section id="scrapbook" className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] font-sans text-[#D9A6A0] font-semibold"
        >
          <Camera className="w-3.5 h-3.5 text-[#D6B875]" />
          <span>{scrapbook.title}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl text-[#352B46] font-normal tracking-tight"
        >
          Moments & Memories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 font-sans text-sm sm:text-base text-[#352B46]/70 max-w-lg mx-auto"
        >
          {scrapbook.subtitle}
        </motion.p>
      </div>

      {/* Polaroid Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start justify-center">
        {scrapbook.photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30, rotate: photo.rotation }}
            whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              rotate: 0,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Vintage Polaroid Card */}
            <div className="relative bg-[#FAF7F2] p-4 sm:p-5 pb-7 sm:pb-8 rounded-sm shadow-md group-hover:shadow-xl transition-all duration-300 border border-[#EBE4D8] paper-texture">
              {/* Decorative Washi Tape */}
              <div
                className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 washi-tape rounded-xs pointer-events-none z-10 ${
                  index % 2 === 0 ? '-rotate-2' : 'rotate-2'
                }`}
              />

              {/* Photo Area */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs bg-[#EAE3D6] shadow-inner mb-4">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle vintage photo grain & vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#352B46]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                  <span className="p-2 rounded-full bg-[#FAF7F2]/90 text-[#352B46] shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Tag & Handwritten Caption */}
              <div className="text-center px-1">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#D9A6A0] font-semibold block mb-1">
                  {photo.tag}
                </span>
                <p className="font-handwriting text-xl sm:text-2xl text-[#352B46] font-semibold leading-snug">
                  {photo.caption}
                </p>
              </div>

              {/* Subtle Polaroid corner shimmer */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B875]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Helpful Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center font-handwriting text-lg text-[#352B46]/60 mt-12"
      >
        ✦ Click any photograph to view in full resolution ✦
      </motion.p>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={scrapbook.photos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </section>
  )
}
