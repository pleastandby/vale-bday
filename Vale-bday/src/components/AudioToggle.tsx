import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX, Sparkles } from 'lucide-react'
import { soundscape } from '../utils/soundscape'

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const unsubscribe = soundscape.subscribe((playing) => {
      setIsPlaying(playing)
    })
    return () => unsubscribe()
  }, [])

  const handleToggle = async () => {
    setHasInteracted(true)
    const newState = await soundscape.toggle()
    if (newState) {
      soundscape.playSparkleBurst()
    }
  }

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={handleToggle}
        className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full border text-xs tracking-wider uppercase font-medium transition-all duration-300 backdrop-blur-md shadow-sm ${
          isPlaying
            ? 'bg-[#352B46] text-[#F8F4ED] border-[#D6B875]/60 shadow-[#D6B875]/20 ring-2 ring-[#D6B875]/30'
            : 'bg-[#F8F4ED]/80 text-[#352B46] border-[#D9A6A0]/40 hover:border-[#D6B875] hover:bg-[#F8F4ED]'
        }`}
        title={isPlaying ? 'Mute ambient melody' : 'Play ambient melody'}
        aria-label={isPlaying ? 'Mute ambient soundtrack' : 'Play ambient soundtrack'}
      >
        <span className="relative flex h-3.5 w-3.5 items-center justify-center">
          {isPlaying ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6B875] opacity-50"></span>
              <Volume2 className="h-3.5 w-3.5 text-[#D6B875]" />
            </>
          ) : (
            <VolumeX className="h-3.5 w-3.5 text-[#352B46]/70 group-hover:text-[#352B46]" />
          )}
        </span>

        <span className="font-sans text-[11px] font-medium">
          {isPlaying ? (
            <span className="flex items-center gap-1.5">
              <span>Melody On</span>
              <span className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 h-1.5 bg-[#D6B875] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-0.5 h-2.5 bg-[#D6B875] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-0.5 h-2 bg-[#D6B875] rounded-full animate-bounce"></span>
              </span>
            </span>
          ) : (
            <span>Sound {hasInteracted ? 'Off' : ''}</span>
          )}
        </span>

        {!hasInteracted && !isPlaying && (
          <Sparkles className="w-3 h-3 text-[#D6B875] animate-pulse" />
        )}
      </button>
    </div>
  )
}

