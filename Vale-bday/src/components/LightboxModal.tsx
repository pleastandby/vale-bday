import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import type { ScrapbookPhoto } from '../data/birthdayContent'

interface LightboxModalProps {
  photo: ScrapbookPhoto | null
  photos: ScrapbookPhoto[]
  onClose: () => void
  onSelectPhoto: (photo: ScrapbookPhoto) => void
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1

  const handleNext = useCallback(() => {
    if (currentIndex === -1 || photos.length === 0) return
    const nextIdx = (currentIndex + 1) % photos.length
    onSelectPhoto(photos[nextIdx])
  }, [currentIndex, photos, onSelectPhoto])

  const handlePrev = useCallback(() => {
    if (currentIndex === -1 || photos.length === 0) return
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length
    onSelectPhoto(photos[prevIdx])
  }, [currentIndex, photos, onSelectPhoto])

  useEffect(() => {
    if (!photo) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [photo, onClose, handleNext, handlePrev])

  if (!photo) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#352B46]/85 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-60 p-2.5 rounded-full bg-[#F8F4ED]/20 text-[#F8F4ED] hover:bg-[#F8F4ED]/40 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close photo view"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            className="absolute left-4 sm:left-8 z-60 p-3 rounded-full bg-[#F8F4ED]/20 text-[#F8F4ED] hover:bg-[#F8F4ED]/40 transition-colors focus:outline-none hidden sm:flex items-center justify-center cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Modal Card Content (Vintage Editorial Mount) */}
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-2xl w-full bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl shadow-2xl border border-[#D6B875]/40 flex flex-col items-center max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Decorative Tape on Top */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 washi-tape rotate-1 rounded-xs" />

          {/* Photo Frame Container */}
          <div className="relative w-full rounded-lg overflow-hidden bg-[#2D243B] flex items-center justify-center shadow-inner max-h-[62vh]">
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[62vh] w-auto max-w-full object-contain select-none"
            />
          </div>

          {/* Details & Caption */}
          <div className="w-full mt-4 sm:mt-5 text-center px-2">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="text-[11px] uppercase tracking-widest font-sans text-[#D9A6A0] font-semibold">
                {photo.tag}
              </span>
              {photo.date && (
                <>
                  <span className="text-[#D6B875] text-xs">•</span>
                  <span className="text-[11px] font-sans text-[#352B46]/60">
                    {photo.date}
                  </span>
                </>
              )}
            </div>

            <p className="font-handwriting text-2xl sm:text-3xl text-[#352B46] font-bold tracking-wide">
              {photo.caption}
            </p>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#352B46]/50">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B875]" />
              <span>Click outside or press Escape to close</span>
            </div>
          </div>
        </motion.div>

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 sm:right-8 z-60 p-3 rounded-full bg-[#F8F4ED]/20 text-[#F8F4ED] hover:bg-[#F8F4ED]/40 transition-colors focus:outline-none hidden sm:flex items-center justify-center cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
