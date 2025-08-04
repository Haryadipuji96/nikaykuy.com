'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaRegClock,
  FaMusic,
  FaEnvelopeOpenText,
  FaCamera,
} from 'react-icons/fa';
import Image from 'next/image';
import galeriImages from '@/data/galeriImages';

// Type untuk countdown timer
type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Template2({ id }: { id: string }) {
  const targetDate = new Date('2025-10-10T08:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f0ea] text-gray-900 font-serif relative overflow-hidden">
      {/* Background Batik */}
      <div className="absolute inset-0 bg-[url('/images/demo/preweding-Elegan2.jpg')] bg-repeat opacity-35 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6 text-center">
        {/* Judul dan Nama Pasangan */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7a3e1d] mb-2 font-[Cinzel] tracking-wide">
          ꦲꦶꦢꦶꦪꦤ꧀ꦠꦸ
        </h1>
        <p className="text-xl sm:text-2xl mb-4 sm:mb-6 text-[#a65b2a]">Sinta & Joko</p>
        <p className="text-xs sm:text-sm text-gray-500 mb-4">ID Undangan: {id}</p>

        {/* Kutipan Ayat */}
        <motion.blockquote
          className="italic text-pink-800 mb-8 text-sm sm:text-base px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          &quot;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup...&quot;
          <br />
          <span className="text-xs sm:text-sm">&quot;QS. Ar-Rum: 21&quot;</span>
        </motion.blockquote>

        {/* Gambar Pasangan */}
        <div className="rounded-xl overflow-hidden shadow-xl border-4 border-[#7a3e1d] w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-6 transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/demo/preweding-Elegan.jpg"
            alt="Pasangan Adat Jawa"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Info Waktu */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3 mb-2 sm:mb-3">
          <div className="flex items-center gap-1 sm:gap-2">
            <FaRegClock className="text-[#7a3e1d] text-sm sm:text-base" />
            <p className="text-sm sm:text-lg">10 Oktober 2025</p>
          </div>
          <span className="hidden sm:inline">,</span>
          <p className="text-sm sm:text-lg">Pukul 08.00 WIB</p>
        </div>

        {/* Lokasi */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <FaMapMarkerAlt className="text-[#7a3e1d] text-sm sm:text-base" />
          <p className="text-sm sm:text-lg">Pendopo Agung, Yogyakarta</p>
        </div>

        {/* Musik */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <FaMusic className="text-[#7a3e1d]" />
            <span className="text-sm sm:text-base">Musik Tradisional</span>
          </div>
          <audio controls className="w-full sm:w-64 mt-2 sm:mt-0">
            <source src="/music/Lagu Pernikahan Kita.mp3" type="audio/mp3" />
            Browser tidak mendukung audio.
          </audio>
        </div>

        {/* Countdown */}
        <div className="bg-[#7a3e1d] text-white py-4 sm:py-6 px-4 rounded-xl shadow-lg mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Menuju Hari Bahagia</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-sm sm:text-lg font-bold">
            <div className="p-2">{timeLeft.days} Hari</div>
            <div className="p-2">{timeLeft.hours} Jam</div>
            <div className="p-2">{timeLeft.minutes} Menit</div>
            <div className="p-2">{timeLeft.seconds} Detik</div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-8 sm:mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.941458219803!2d110.37749927418743!3d-7.793687077179983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5842ecb9d3e3%3A0x6f73c65801c6f6c5!2sPendopo%20Agung!5e0!3m2!1sen!2sid!4v1720000000000"
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border-2 border-[#a65b2a]"
          />
        </div>

        {/* RSVP Button */}
        <div className="mb-8 sm:mb-12">
          <a
            href="https://forms.gle/contohRSVP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#a65b2a] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#7a3e1d] shadow-lg transition text-sm sm:text-base"
          >
            <FaEnvelopeOpenText size={16} />
            Konfirmasi Kehadiran
          </a>
        </div>

        {/* Galeri Foto */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg mb-8 sm:mb-12">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#7a3e1d] flex items-center gap-2 justify-center">
            <FaCamera size={16} /> Galeri Kenangan
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            {galeriImages.map((img, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg shadow hover:scale-105 transition"
              >
                <Image
                  src={`/images/demo/${img}`}
                  alt={`Galeri ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
