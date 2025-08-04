'use client'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold tracking-wide drop-shadow-md ${
          scrolled ? 'text-black' : 'text-rose-500'
        }`}>
          NikahKuy
        </h1>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-6 text-sm font-medium ${
          scrolled ? 'text-black' : 'text-rose-500'
        }`}>
          <a href="#beranda" className="hover:text-rose-500 transition-colors duration-200">Beranda</a>
          <a href="#tentang" className="hover:text-rose-500 transition-colors duration-200">Tentang</a>
          <a href="#galeri" className="hover:text-rose-500 transition-colors duration-200">Galeri</a>
          <a href="#harga" className="hover:text-rose-500 transition-colors duration-200">Harga</a>
          <a href="#cara-pesan" className="hover:text-rose-500 transition-colors duration-200">Cara Pesan</a>
          <a href="#kontak" className="hover:text-rose-500 transition-colors duration-200">Kontak</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke={scrolled ? 'black' : '#f43f5e'} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white/90' : 'bg-white'
      }`}>
        <div className="px-4 py-2 flex flex-col space-y-3">
          <a 
            href="#beranda" 
            className="block py-2 hover:text-rose-500 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Beranda
          </a>
          <a 
            href="#tentang" 
            className="block py-2 hover:text-rose-500 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Tentang
          </a>
          <a 
            href="#galeri" 
            className="block py-2 hover:text-rose-500 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Galeri
          </a>
          <a 
            href="#harga" 
            className="block py-2 hover:text-rose-500 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Harga
          </a>
          <a 
            href="#cara-pesan" 
            className="block py-2 hover:text-rose-500 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Cara Pesan
          </a>
          <a 
            href="#kontak" 
            className="block py-2 hover:text-rose-500 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar