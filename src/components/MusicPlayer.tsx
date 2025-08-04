'use client'

import { useEffect, useRef, useState } from 'react'
import { PlayCircle, PauseCircle } from 'lucide-react'

interface Props {
  src: string
}

export default function MusicPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true)
        }).catch(() => {
          // autoplay gagal, tunggu manual klik
        })
      }
    }
  }, [src])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex items-center gap-3 mt-4">
      <button onClick={togglePlay}>
        {isPlaying ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
      </button>
      <audio ref={audioRef} src={src} loop />
    </div>
  )
}
