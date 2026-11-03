import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CelestialBackground } from './components/CelestialBackground'
import { AudioToggle } from './components/AudioToggle'
import { IntroScreen } from './components/IntroScreen'
import { FlowerBouquet } from './components/FlowerBouquet'
import { BirthdayHero } from './components/BirthdayHero'
import { ScrapbookGallery } from './components/ScrapbookGallery'
import { AppreciationCards } from './components/AppreciationCards'
import { BirthdayLetter } from './components/BirthdayLetter'
import { GiftReveal } from './components/GiftReveal'
import { FinalCelebration } from './components/FinalCelebration'

export const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleOpenInvitation = () => {
    setIsUnlocked(true)
    setTimeout(() => {
      const flowersElement = document.getElementById('flowers')
      if (flowersElement) {
        flowersElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  }

  const handleScrollToHero = () => {
    const heroElement = document.getElementById('introduction')
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToNext = () => {
    const scrapbookElement = document.getElementById('scrapbook')
    if (scrapbookElement) {
      scrapbookElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      setIsUnlocked(false)
    }, 450)
  }

  return (
    <div className="relative min-h-screen bg-[#F8F4ED] text-[#352B46] selection:bg-[#D9A6A0]/30 selection:text-[#352B46] transition-colors duration-500 overflow-x-hidden">
      {/* Background celestial starfield */}
      <CelestialBackground />

      {/* Floating Audio Soundscape Toggle */}
      <AudioToggle />

      <main className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7 }}
            >
              <IntroScreen onOpen={handleOpenInvitation} />
            </motion.div>
          ) : (
            <motion.div
              key="main-universe"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12 sm:space-y-16 pb-16"
            >
              {/* Scene 01.5 — The Bouquet Across The Distance */}
              <FlowerBouquet onContinue={handleScrollToHero} />

              {/* Scene 02 — Birthday Introduction */}
              <BirthdayHero onScrollNext={handleScrollToNext} />

              {/* Scene 03 — The Digital Scrapbook with Polaroid Gallery */}
              <ScrapbookGallery />

              {/* Scene 04 — A Few Things About You (Appreciation Flip Cards) */}
              <AppreciationCards />

              {/* Scene 05 — A Little Message (Editorial Letter) */}
              <BirthdayLetter />

              {/* Scene 06 — The Surprise Box (3D Gift Box) */}
              <GiftReveal />

              {/* Scene 07 — The Final Birthday Reveal & Celebration */}
              <FinalCelebration onReplay={handleReplay} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
