'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Head from "next/head";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Template3({ id }: { id: string }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true // Animations trigger only once
    });
  }, []);

  return (
    <>
      <Head>
        <title>Undangan Classic | NikahKuy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Inter&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#f3f2ec] text-[#3b322c] font-[Inter] relative overflow-x-hidden">
        {/* HEADER / HERO */}
        <section
          className="relative text-center py-12 md:py-16 px-4 bg-gradient-to-b from-[#e7e4d8] to-[#f3f2ec]"
          data-aos="fade-down"
        >
          <Image
            src="/images/demo/prewedingClassic2.jpg"
            alt="Ornamen"
            width={60}
            height={60}
            className="absolute top-4 left-4 md:top-6 md:left-6 opacity-30 w-10 h-10 md:w-20 md:h-20"
          />
          <Image
            src="/images/demo/prewedingClassic3.jpg"
            alt="Ornamen"
            width={60}
            height={60}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rotate-180 opacity-30 w-10 h-10 md:w-20 md:h-20"
          />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[Playfair Display] text-[#6b4f3b] mb-2">
            Undangan Pernikahan
          </h1>
          <p className="text-base md:text-lg italic text-[#7d6b5a]">
            Dengan adat & nuansa klasik
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-3">ID: {id}</p>
        </section>

        {/* PROFIL PENGANTIN */}
        <section className="py-8 md:py-10 px-4 md:px-6 text-center" data-aos="fade-up">
  <p className="mb-2 md:mb-3 text-sm md:text-base">
    Assalamu&#39;alaikum Wr. Wb.
  </p>
  
  <h2 className="text-base md:text-lg font-medium mb-2 md:mb-3 max-w-2xl mx-auto">
    Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i ke acara pernikahan kami:
  </h2>

  <h3 className="text-3xl md:text-4xl font-[Playfair Display] text-[#96764d] mb-2">
    Rahmat &amp; Siti
  </h3>

  <p className="italic text-[#6e5c4f] text-sm md:text-base">
    Membangun rumah tangga sakinah, mawaddah, warahmah
  </p>
</section>


        {/* FOTO */}
        <section className="flex justify-center py-4 md:py-6 px-4" data-aos="zoom-in">
          <div className="w-full max-w-xs md:max-w-sm">
            <Image
              src="/images/demo/prewedingClassic.jpg"
              alt="Pasangan"
              width={320}
              height={440}
              className="rounded-2xl border-4 border-[#e7d8b9] shadow-lg w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* JADWAL ACARA */}
        <section className="bg-[#e9e6dc] py-8 md:py-10 px-4 md:px-6" data-aos="fade-up">
          <h2 className="text-xl md:text-2xl text-center font-semibold text-[#5e4733] mb-4 md:mb-6">
            Waktu & Tempat
          </h2>
          <div className="flex flex-col items-center gap-3 md:gap-4 text-sm md:text-base text-[#3d2b1f]">
            <div className="flex items-center gap-2 md:gap-3">
              <FaCalendarAlt className="text-lg md:text-xl text-[#96764d]" />
              <span>Ahad, 20 Agustus 2025 | 09.00 WIB</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <FaMapMarkerAlt className="text-lg md:text-xl text-[#96764d]" />
              <span>Gedung Sangkuriang, Bandung</span>
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.941458219803!2d110.37749927418743!3d-7.793687077179983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5842ecb9d3e3%3A0x6f73c65801c6f6c5!2sPendopo%20Agung!5e0!3m2!1sen!2sid!4v1720000000000"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded-xl border-2 border-[#96764d]"
            ></iframe>
          </div>
        </section>

        {/* PENUTUP */}
        <section className="text-center py-6 px-4 md:px-6" data-aos="fade-up">
  <p className="italic mb-2 text-sm md:text-base">
    Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
  </p>
  <p className="mb-3 md:mb-4 text-sm md:text-base">
    Wassalamu&#39;alaikum Wr. Wb.
  </p>
  <p className="text-lg font-semibold text-[#6b4f3b]">
    Rahmat &amp; Siti
  </p>
</section>


        {/* FOOTER */}
        <footer className="bg-[#6b4f3b] text-white text-center py-3 md:py-4 text-xs md:text-sm">
          <p>© 2025 NikahKuy - Template Classic</p>
        </footer>
      </div>
    </>
  );
}
