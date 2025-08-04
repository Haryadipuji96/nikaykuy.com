'use client'

import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const templates = [
  {
    slug: 'diamond',
    name: 'Diamond',
    image: '/images/Diamond.png',
    description: 'Tampilan modern dengan aksen mewah dan elegan.',
  },
  {
    slug: 'elegant',
    name: 'Elegant',
    image: '/images/Elegan.png',
    description: 'Desain bersih dan sederhana dengan nuansa profesional.',
  },
  {
    slug: 'classic',
    name: 'Classic',
    image: '/images/Classic.png',
    description: 'Gaya tradisional yang formal dan timeless.',
  },
];

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main className="space-y-24 md:space-y-32">

      {/* HERO SECTION */}
      <section id="beranda" className="relative bg-rose-50 py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-rose-300"></div>
          <Image
            src="/images/pernikahan.jpg"
            alt="Pasangan Wedding"
            fill
            priority
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight 
              bg-gradient-to-r from-rose-100 via-white to-rose-200 text-transparent bg-clip-text drop-shadow-lg"
          >
            Undangan Digital Untuk Hari Istimewamu
          </h1>

          <p 
            data-aos="fade-up" data-aos-delay="100"
            className="mt-4 md:mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto font-sans font-light leading-relaxed"
          >
            Buat momen sakral jadi tak terlupakan bersama
            <span className="font-semibold text-rose-200"> NikahKuy</span> — desain
            <span className="text-rose-300 font-medium"> premium</span>, 
            <span className="text-rose-300 font-medium"> responsif</span>, dan mudah dibagikan ke siapa saja.
          </p>

          <div 
            data-aos="fade-up" data-aos-delay="200"
            className="mt-8 md:mt-10 flex justify-center gap-3 md:gap-4 flex-wrap"
          >
            <Link
              href="#galeri"
              className="px-5 py-2 md:px-6 md:py-3 bg-white text-rose-600 rounded-full shadow-md hover:bg-rose-100 transition font-medium text-sm md:text-base"
            >
              Lihat Template
            </Link>
            <Link
              href="#cara-pesan"
              className="px-5 py-2 md:px-6 md:py-3 border border-white text-white rounded-full hover:bg-rose-600 transition font-medium text-sm md:text-base"
            >
              Cara Pesan
            </Link>
          </div>

          <div 
            data-aos="fade-up" data-aos-delay="300"
            className="mt-12 md:mt-16 flex justify-center gap-6 md:gap-10 text-white/90 text-xs md:text-sm flex-wrap"
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-rose-100">1.500+</p>
              <p>Pernikahan Terlayani</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-rose-100">4.9/5</p>
              <p>Rating Pelanggan</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-rose-100">100%</p>
              <p>Kustomisasi Template</p>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
<section id="tentang" className="py-1 md:py-16 bg-white relative">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 
      data-aos="fade-up"
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-600 mb-4 md:mb-6"
    >
      Tentang <span className="text-gray-800">NikahKuy</span>
    </h2>

    <p 
      data-aos="fade-up" data-aos-delay="100"
      className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
    >
      <strong>NikahKuy</strong> adalah solusi undangan digital untuk generasi modern — dirancang dengan cinta dan detail, untuk membantu pasangan menyampaikan kabar bahagia dengan cara yang elegan, cepat, dan berkesan.
    </p>

    <p 
      data-aos="fade-up" data-aos-delay="150"
      className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto italic"
    >
      *Website ini masih dalam tahap pengembangan. Fitur-fitur baru akan terus diperbarui untuk meningkatkan pengalaman pengguna.
    </p>

    <div 
      data-aos="fade-up" data-aos-delay="200"
      className="mt-8 md:mt-10 flex justify-center gap-4 md:gap-6 flex-wrap"
    >
      {[
        {
          value: "100%",
          label: "Desain Responsif"
        },
        {
          value: "24/7",
          label: "Support Ramah"
        },
        {
          value: "5+",
          label: "Pilihan Template"
        }
      ].map((stat, index) => (
        <div 
          key={index}
          data-aos="zoom-in" data-aos-delay={300 + (index * 100)}
          className="w-40 md:w-60 bg-rose-50 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <p className="text-2xl md:text-3xl font-bold text-rose-500 mb-2">{stat.value}</p>
          <p className="text-xs md:text-sm text-gray-700">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* GALERI */}
      <section id="galeri" className="bg-rose-50 py-1 md:py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            data-aos="fade-up"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-rose-600 mb-4 md:mb-6"
          >
            Galeri Template
          </h2>
          
          <p 
            data-aos="fade-up" data-aos-delay="100"
            className="text-center text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-base"
          >
            Pilih template undangan favoritmu — semua bisa dikustom sesuai keinginan dan penuh nuansa cinta 💍
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {templates.map((template, index) => (
              <Link
                key={template.slug}
                href={`/cover/${template.slug}/fuji-rani`}
                data-aos="fade-up"
                data-aos-delay={150 + (index * 100)}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1">
                  <div className="relative w-full aspect-[3/4] bg-gray-100">
                    <Image
                      src={template.image}
                      alt={template.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-base md:text-lg font-medium text-gray-800 group-hover:text-rose-600">
                      {template.name}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    
      {/* HARGA */}
      <section id="harga" className="max-w-5xl mx-auto px-4 text-center py-1 md:py-8">
        <h2 
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-rose-600 mb-6"
        >
          Paket Harga
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              name: "Paket Diamond",
              price: "Rp 299.000",
              features: [
                "✔ Profil Pengantin Lengkap",
                "✔ Jadwal Acara + Countdown",
                "✔ Google Maps Lokasi",
                "✔ Galeri Foto & Video",
                "✔ Buku Tamu Digital",
                "✔ RSVP Otomatis",
                "✔ Musik Latar Custom",
                "✔ Custom Domain",
                "✔ Link Live Streaming"
              ],
              bg: "bg-yellow-50"
            },
            {
              name: "Paket Elegan",
              price: "Rp 199.000",
              features: [
                "✔ Profil Pengantin",
                "✔ Jadwal Acara + Countdown",
                "✔ Google Maps Lokasi",
                "✔ Galeri Foto",
                "✔ RSVP Otomatis (Default)",
                "✔ Musik Default",
                "✘ Tanpa Buku Tamu",
                "✘ Tanpa Custom Domain"
              ],
              bg: "bg-rose-50"
            },
            {
              name: "Paket Classic",
              price: "Rp 99.000",
              features: [
                "✔ Profil Pengantin",
                "✔ Jadwal Acara",
                "✔ Google Maps Lokasi",
                "✘ Tanpa Galeri",
                "✘ Tanpa Musik",
                "✘ Tanpa RSVP",
                "✘ Tanpa Buku Tamu"
              ],
              bg: "bg-white"
            }
          ].map((pkg, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 100)}
              className={`border p-4 md:p-6 rounded-xl shadow-sm ${pkg.bg} hover:shadow-md transition`}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800">{pkg.name}</h3>
              <p className="text-rose-600 text-xl md:text-2xl font-semibold mt-2">{pkg.price}</p>
              <ul className="text-xs md:text-sm mt-3 md:mt-4 text-gray-600 space-y-1 text-left">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CARA PESAN */}
      <section id="cara-pesan" className="py-5 md:py-10 bg-gradient-to-b from-white via-rose-50 to-white border-t border-rose-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div 
            data-aos="fade-up"
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-rose-600 mb-3 md:mb-4">Cara Pesan Undangan</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Proses mudah dan cepat. Dapatkan undangan digitalmu dalam hitungan menit!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Pilih Template",
                desc: "Lihat galeri dan pilih desain undangan sesuai selera.",
                icon: "🎨",
              },
              {
                title: "Isi Data",
                desc: "Masukkan informasi lengkap pengantin dan acara.",
                icon: "📝",
              },
              {
                title: "Cek Preview",
                desc: "Kami kirimkan tampilan undangan untuk kamu tinjau.",
                icon: "👀",
              },
              {
                title: "Selesai & Kirim",
                desc: "Undangan siap disebar via link atau QR Code.",
                icon: "🚀",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={100 + (idx * 100)}
                className="group bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-rose-500 transition-transform group-hover:rotate-12">
                  {step.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-rose-700 mb-1 md:mb-2">{`${idx + 1}. ${step.title}`}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer 
        id="kontak"
        className="bg-pink-200 text-center text-gray-700 py-8 md:py-10 mt-16 md:mt-20"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-3 md:mb-4 hover:scale-105 transition">
            Hubungi Kami
          </h2>
          
          <p className="mb-4 md:mb-6 text-sm md:text-base">
            Jika Anda memiliki pertanyaan atau ingin menghubungi pengantin, silakan hubungi kami melalui:
          </p>
          
          <div className="flex justify-center gap-4 md:gap-6 text-xl md:text-2xl text-pink-600 mb-4 md:mb-6">
            {[
              { icon: <FaWhatsapp />, href: "https://wa.me/6282127934276" },
              { icon: <FaInstagram />, href: "https://www.instagram.com/nikahkuy2025?igsh=cnBmYnpobHJ0c2l1" },
              { icon: <FaFacebook />, href: "https://www.facebook.com/share/19CoV8MHDT/" },
              { icon: <FaEnvelope />, href: "nikahkuy.com@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-800 hover:scale-125 transition"
                data-aos="zoom-in"
                data-aos-delay={100 + (index * 100)}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <p className="text-xs md:text-sm text-gray-500">
            © 2025 Undangan Digital. Dibuat dengan ❤️ oleh Tim Developer
          </p>
        </div>
      </footer>
    </main>
  )
}