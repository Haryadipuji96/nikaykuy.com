// // pages/preview/[slug].tsx
// 'use client'

// import { useParams } from 'next/navigation'
// import { templates } from '@/data/templates'

// export default function TemplatePreviewPage() {
//   const { slug } = useParams();
//   const template = templates.find((t) => t.slug === slug);

//   if (!template) return <div>Template tidak ditemukan.</div>;

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
//       <div className="max-w-md w-full rounded-xl overflow-hidden shadow-lg">
//         <div className="relative w-full pt-[177.78%] bg-black rounded-lg overflow-hidden">
//           {/* Rasio 9:16 = 16 / 9 * 100% = 177.78% untuk padding-top */}
//           <video
//             src={template.video}
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             muted
//             autoPlay
//             loop
//             playsInline
//             controls={false}
//           />
//         </div>
//         <div className="p-6 text-center">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Preview Template
//           </h1>
//           <p className="text-gray-600 mt-2">Template ini bisa kamu kustom sesuai keinginan.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
