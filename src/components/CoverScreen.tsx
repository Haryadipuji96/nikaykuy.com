'use client'

import React from 'react'

interface CoverScreenProps {
  groomName: string
  brideName: string
  date: string
  location?: string
  onOpenInvitation: () => void
}

export default function CoverScreen({
  groomName,
  brideName,
  date,
  location,
  onOpenInvitation,
}: CoverScreenProps) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center bg-[url('/images/cover-default.jpg')] text-white px-4 text-center">
      <h1 className="text-4xl font-bold mb-2">
        {groomName} & {brideName}
      </h1>
      <p className="text-lg mb-1">{date}</p>
      {location && <p className="text-sm mb-4">{location}</p>}
      <button
        onClick={onOpenInvitation}
        className="mt-4 px-6 py-2 bg-white text-gray-800 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition"
      >
        Buka Undangan
      </button>
    </div>
  )
}
