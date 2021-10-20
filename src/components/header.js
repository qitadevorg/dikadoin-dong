import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { FaBars } from '@react-icons/all-files/fa/FaBars'
import { ABOUT_US, CONTACT, PRODUCT } from '../constants/navigation'

export default function Header({ goToComponent }) {

  const [isShowingMenu, setIsShowingMenu] = useState(false)

  const handleClickOutsideMenu = (event) => {
    if(event.target === event.currentTarget) {
      setIsShowingMenu(false)
    }
  } 

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
          <button onClick={() => goToComponent(PRODUCT)} className="mx-4">
            Produk
          </button>
          <button onClick={() => goToComponent(ABOUT_US)} className="mx-4">
            Tentang Kami
          </button>
          <button onClick={() => goToComponent(CONTACT)} className="mx-4">
            Kontak
          </button>
          <button onClick={() => goToComponent(PRODUCT)} className="block bg-yellow-200 ml-4 px-5 py-2 rounded-3xl">
            Yuk Belanja
          </button>
        </nav>
        <button
          aria-label="Buka Menu"
          className="md:hidden"
          onClick={() => setIsShowingMenu(!isShowingMenu)}
        >
          <FaBars size="1.5rem" />
        </button>
        <nav
          onKeyDown={handleClickOutsideMenu}
          onClick={handleClickOutsideMenu}
          role="presentation"
          className={`md:hidden fixed w-full top-0 bg-black bg-opacity-20 z-40 shadow-xl ${isShowingMenu ? 'min-h-screen' : 'h-0'}`}
        >
          <div className={`fixed bg-brand-brown w-80 min-h-screen flex flex-col transition-all ${isShowingMenu ? 'left-0' : '-left-full'}`}>
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
            <button onClick={() => goToComponent(PRODUCT)} className="mt-8 px-8 py-4 text-left text-brand-yellow">
              Produk
            </button>
            <button onClick={() => goToComponent(ABOUT_US)} className="px-8 py-4 text-left text-brand-yellow">
              Tentang Kami
            </button>
            <button onClick={() => goToComponent(CONTACT)} className="px-8 py-4 text-left text-brand-yellow">
              Kontak
            </button>
            <button onClick={() => goToComponent(PRODUCT)} className="mt-4 ml-8 mr-auto bg-yellow-200 px-5 py-2 rounded-3xl">
              Yuk Belanja
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}