import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { FaBars } from '@react-icons/all-files/fa/FaBars'

export default function Header() {

  const [isShowingMenu, setIsShowingMenu] = useState(false)

  return (
    <header className="bg-brand-yellow py-3 px-5">
      <div className="max-w-5xl mx-auto flex justify-between">
        <Link to="/" className="flex items-center font-medium">
          <StaticImage
            src="../images/dikadoin-dong-logo.webp"
            alt="Dikadoin Logo"
            placeholder="none"
            layout="fixed"
            width={40}
          />
          <span className="ml-4">Dikadoin.dong</span>
        </Link>
        <nav className="hidden md:flex justify-between items-center font-medium">
          <a href="/" className="mx-4">
            Produk
          </a>
          <a href="/" className="mx-4">
            Tentang Kami
          </a>
          <a href="/" className="mx-4">
            Kontak
          </a>
          <a href="/" className="block bg-yellow-200 ml-4 px-5 py-2 rounded-3xl">
            Yuk Belanja
          </a>
        </nav>
        <button
          aria-label="Buka Menu"
          className="md:hidden"
          onClick={() => setIsShowingMenu(!isShowingMenu)}
        >
          <FaBars size="1.5rem" />
        </button>
        <nav className={`md:hidden fixed w-80 top-0 min-h-screen bg-brand-brown z-50 flex flex-col shadow-xl transition-all ${isShowingMenu ? 'left-0' : '-left-full'}`}>
          <Link to="/" className="flex items-center font-medium px-8 py-4">
            <StaticImage
              src="../images/dikadoin-dong-logo.webp"
              alt="Dikadoin Logo"
              placeholder="none"
              layout="fixed"
              width={40}
            />
            <span className="ml-2 text-brand-yellow">Dikadoin.dong</span>
          </Link>
          <a href="/" className="mt-8 block px-8 py-4 text-brand-yellow">
            Produk
          </a>
          <a href="/" className="block px-8 py-4 text-brand-yellow">
            Tentang Kami
          </a>
          <a href="/" className="block px-8 py-4 text-brand-yellow">
            Kontak
          </a>
          <a href="/" className="mt-4 ml-8 mr-auto block bg-yellow-200 px-5 py-2 rounded-3xl">
            Yuk Belanja
          </a>
        </nav>
      </div>
    </header>
  )
}