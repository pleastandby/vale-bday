/**
 * Procedural ambient celestial soundscape generator using Web Audio API.
 * Provides a serene, dreamy pentatonic chord & chime progression without requiring external MP3 files.
 */

class SoundscapeManager {
  private ctx: AudioContext | null = null
  private isAudioRunning: boolean = false
  private masterGain: GainNode | null = null
  private loopInterval: number | null = null
  private listeners: ((playing: boolean) => void)[] = []

  // Pentatonic scale frequencies in Hz (C4, D4, E4, G4, A4, C5, D5, E5)
  private readonly notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25]
  private readonly padChords = [
    [261.63, 329.63, 392.0, 523.25], // C major
    [220.0, 261.63, 329.63, 440.0],  // A minor
    [174.61, 220.0, 261.63, 349.23], // F major
    [196.0, 246.94, 293.66, 392.0],  // G major
  ]
  private chordIndex = 0

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      this.ctx = new AudioCtx()
      this.masterGain = this.ctx.createGain()
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime)
      this.masterGain.connect(this.ctx.destination)
    }
    return this.ctx
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.push(cb)
    cb(this.isAudioRunning)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb)
    }
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isAudioRunning))
  }

  public isPlaying(): boolean {
    return this.isAudioRunning
  }

  public async toggle(): Promise<boolean> {
    if (this.isAudioRunning) {
      this.stop()
      return false
    } else {
      await this.start()
      return true
    }
  }

  public async start(): Promise<void> {
    const ctx = this.getContext()
    if (ctx.state === 'suspended') {
      await ctx.resume()
    }

    this.isAudioRunning = true
    this.notify()
    this.triggerPadCycle()

    // Periodically play gentle celestial chimes
    if (this.loopInterval) window.clearInterval(this.loopInterval)
    this.loopInterval = window.setInterval(() => {
      if (this.isAudioRunning) {
        this.playRandomChime()
        if (Math.random() > 0.6) {
          this.triggerPadCycle()
        }
      }
    }, 2800)
  }

  public stop(): void {
    this.isAudioRunning = false
    if (this.loopInterval) {
      window.clearInterval(this.loopInterval)
      this.loopInterval = null
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2)
      setTimeout(() => {
        if (this.masterGain && this.ctx) {
          this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime)
        }
      }, 300)
    }
    this.notify()
  }

  // Play a soft bell/chime
  public playChime(freqIndex?: number): void {
    if (!this.isAudioRunning) return
    const ctx = this.getContext()
    const now = ctx.currentTime

    const freq = freqIndex !== undefined ? this.notes[freqIndex % this.notes.length] : this.notes[Math.floor(Math.random() * this.notes.length)]

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, now)

    // Gentle low-pass for warm music-box feel
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(1400, now)

    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.05)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4)

    osc.connect(filter)
    filter.connect(gain)
    if (this.masterGain) gain.connect(this.masterGain)

    osc.start(now)
    osc.stop(now + 2.5)
  }

  // Play warm synth pad chord
  private triggerPadCycle(): void {
    if (!this.isAudioRunning) return
    const ctx = this.getContext()
    const now = ctx.currentTime
    const chord = this.padChords[this.chordIndex]
    this.chordIndex = (this.chordIndex + 1) % this.padChords.length

    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq * 0.5, now) // Sub/warm register

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(500 + idx * 80, now)

      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(0.04, now + 1.2)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.0)

      osc.connect(filter)
      filter.connect(gain)
      if (this.masterGain) gain.connect(this.masterGain)

      osc.start(now)
      osc.stop(now + 5.2)
    })
  }

  private playRandomChime() {
    this.playChime()
  }

  // Sparkle burst sound effect for interactions (gift open, wish made)
  public playSparkleBurst(): void {
    const ctx = this.getContext()
    if (ctx.state === 'suspended') ctx.resume()
    const now = ctx.currentTime

    const arpeggio = [523.25, 659.25, 783.99, 1046.5, 1318.51] // C5, E5, G5, C6, E6
    arpeggio.forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now + i * 0.08)

      gain.gain.setValueAtTime(0, now + i * 0.08)
      gain.gain.linearRampToValueAtTime(0.15, now + i * 0.08 + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 1.0)

      osc.connect(gain)
      if (this.masterGain) gain.connect(this.masterGain)

      osc.start(now + i * 0.08)
      osc.stop(now + i * 0.08 + 1.1)
    })
  }
}

export const soundscape = new SoundscapeManager()

