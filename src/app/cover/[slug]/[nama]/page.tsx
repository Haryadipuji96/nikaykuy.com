'use client';

import { useParams, useRouter } from 'next/navigation';

export default function CoverPage() {
  const router = useRouter();
  const params = useParams();
  const { slug, nama } = params as { slug: string; nama: string };

  const handleOpenInvitation = () => {
    router.push(`/undangan/${slug}/${nama}`);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4 sm:px-6"
      style={{ 
        backgroundImage: "url('/images/pernikahan.jpg')",
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay untuk meningkatkan keterbacaan teks */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      {/* Konten teks undangan */}
      <div className="relative z-10 text-center text-white max-w-md sm:max-w-xl px-4 py-8">
        <h2 className="italic text-4xl sm:text-sm mb-2">The Wedding of</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[cursive] font-bold mb-2 sm:mb-3 tracking-wide">
          {nama.replace('-', ' & ')}
        </h1>
        <p className="text-base sm:text-lg mb-1">Sabtu</p>
        <p className="text-sm sm:text-base mb-4">05 / Oktober / 2019</p>
        <p className="text-xs sm:text-sm tracking-wide mb-6">
          WE INVITE YOU TO CELEBRATE OUR WEDDING
        </p>

        <button
          onClick={handleOpenInvitation}
          className="mt-2 px-6 sm:px-8 py-2 sm:py-3 bg-white text-gray-800 font-medium sm:font-semibold rounded-full hover:bg-rose-500 hover:text-white transition duration-300 text-sm sm:text-base"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}