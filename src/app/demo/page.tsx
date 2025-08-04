'use client';

import Image from 'next/image';
import Link from 'next/link';
import { templates } from '@/data/templates'

export default function DemoPage() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Pilih Template Undangan
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <Link
            key={template.slug}
            href={`/template/${template.slug}/cover`}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
              <div className="relative w-full h-48">
                <Image
                  src={template.image}
                  alt={`Template ${template.title}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-medium text-gray-800 group-hover:text-rose-600">
                  {template.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
