'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background transparan */}
      <div className="absolute inset-0 -z-10">
        <Image
  src="/pernikahan.jpg"
  alt="Background Pernikahan"
  fill
  quality={100}
  className="opacity-40"
  style={{ objectFit: 'cover' }}
/>

      </div>

      {/* Overlay gradasi (opsional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/90 -z-10" />

      {/* Konten */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
