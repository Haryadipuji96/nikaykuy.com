'use client'

import Image from 'next/image';

import { useEffect, useRef, useState } from 'react'
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCommentDots,
  FaVideo,
  FaPlay,
  FaPause,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Template1({ id }: { id: string }) {
  const [countdown, setCountdown] = useState('')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  // Mencegah render sebelum client-side mount
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Countdown waktu
  useEffect(() => {
    if (!hasMounted) return
    const targetDate = new Date('2025-10-10T08:00:00')
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance <= 0) {
        setCountdown('Hari Bahagia Telah Tiba!')
        clearInterval(timer)
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((distance / (1000 * 60)) % 60)
        const seconds = Math.floor((distance / 1000) % 60)
        setCountdown(`${days}h ${hours}j ${minutes}m ${seconds}d`)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [hasMounted])

  // Autoplay audio saat interaksi
  useEffect(() => {
    if (!hasMounted) return

    const handleInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(e => console.log("Autoplay prevented:", e))
      }
      window.removeEventListener('click', handleInteraction)
    }
    window.addEventListener('click', handleInteraction)

    return () => window.removeEventListener('click', handleInteraction)
  }, [isPlaying, hasMounted])

  // Sinkronisasi status audio
  useEffect(() => {
    if (!hasMounted) return
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [hasMounted])

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (audioRef.current.paused) {
      audioRef.current.play().catch(e => console.log("Play failed:", e))
    } else {
      audioRef.current.pause()
    }
  }

  if (!hasMounted) return null // ⛔ Hindari SSR hydration error

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-serif relative overflow-x-hidden">
      {/* Musik */}
      <audio ref={audioRef} loop>
        <source src="/music/Lagu Pernikahan Kita.mp3" type="audio/mp3" />
      </audio>

      <div className="max-w-3xl mx-auto py-8 md:py-12 px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm text-gray-500 mb-2">ID Undangan: {id}</p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Undangan Pernikahan
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Rina & Budi
        </motion.p>

        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={toggleAudio}
            className="flex items-center gap-2 bg-white border border-pink-300 text-pink-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow hover:bg-pink-100 transition text-sm sm:text-base"
          >
            {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            <span>{isPlaying ? 'Pause Musik' : 'Mainkan Musik'}</span>
          </button>
        </motion.div>

        <motion.div
          className="mx-auto mb-6 max-w-xs sm:max-w-sm md:max-w-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
         <Image
  src="/images/demo/prewedingDiamond4.jpg"
  alt="Pasangan"
  width={500}
  height={500}
  className="rounded-lg w-full h-auto shadow-xl"
  priority
/>

        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 mb-2 text-pink-600 text-sm sm:text-base">
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={14} />
            <span>10 Oktober 2025</span>
          </div>
          <span className="hidden sm:inline">-</span>
          <span>08:00 WIB</span>
        </div>

        <motion.div
          className="text-base sm:text-lg md:text-xl font-semibold text-pink-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Hitung Mundur: {countdown}
        </motion.div>

        <motion.blockquote
          className="italic text-pink-800 mb-8 text-sm sm:text-base px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup...&quot;
          <br />
          <span className="text-xs sm:text-sm"> QS. Ar-Rum: 21</span>
        </motion.blockquote>

        <p className="mb-4 text-sm sm:text-base">Kami mengundang Anda untuk hadir di hari bahagia kami.</p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 mb-4 text-pink-600 text-sm sm:text-base">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt size={14} />
            <span>Gedung Serbaguna, Bandung</span>
          </div>
        </div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-48 sm:h-64 rounded-lg"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6438469270585!2d107.61912251530936!3d-6.914744969692288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c4f30c32b%3A0xf6238c6e3dfbbb7f!2sGedung%20Serbaguna!5e0!3m2!1sid!2sid!4v1622123456789"
          ></iframe>
        </motion.div>

        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 flex items-center justify-center gap-2">
            <FaVideo size={16} /> Live Streaming Acara
          </h2>
          <a
            href="https://youtube.com/live/abcdef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-700 transition text-sm sm:text-base"
          >
            Tonton di YouTube Live
          </a>
        </div>

        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Galeri Momen Kami</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            <img src="/images/demo/prewedingDiamond1.jpg" alt="Galeri 1" className="rounded-lg w-full h-auto object-cover aspect-square" />
            <img src="/images/demo/prewedingDiamond2.jpg" alt="Galeri 2" className="rounded-lg w-full h-auto object-cover aspect-square" />
            <img src="/images/demo/prewedingDiamond3.jpg" alt="Galeri 3" className="rounded-lg w-full h-auto object-cover aspect-square" />
          </div>
        </motion.div>

        <div className="mb-6 sm:mb-8">
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition text-sm sm:text-base"
          >
            <FaEnvelope size={16} /> Konfirmasi Kehadiran (RSVP)
          </a>
        </div>

        <motion.div
          className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center justify-center gap-2">
            <FaCommentDots size={18} /> Ucapan untuk Pasangan
          </h2>
          <form className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="border px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
              required
            />
            <textarea
              placeholder="Tulis ucapan di sini..."
              className="border px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
              rows={3}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white py-1 sm:py-2 rounded hover:bg-pink-600 transition text-sm sm:text-base"
            >
              Kirim Ucapan
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
