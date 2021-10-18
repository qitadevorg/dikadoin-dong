import React from 'react'
import logo from '../images/dikadoin-dong-logo.webp'

export default function Header() {
    return (
        <header className="bg-brand-yellow">
            <nav className="max-w-5xl mx-auto py-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-brand-brown">
                <a href="#" className="navbar-brand flex flex-row items-center font-bold">
                    <img src={logo} alt="dikadoin logo" width={75} />
                    <span className="text-2xl ml-4">dikadoin.dong</span>
                </a>
                <div className="flex flex-row justify-between items-center font-semibold mt-4">
                    <a href="#" className="mx-4">Produk</a>
                    <a href="#" className="mx-4">Tentang Kami</a>
                    <a href="#" className="mx-4">Kontak</a>
                    <a href="#" className="bg-yellow-200 mx-4 px-4 py-2 rounded-3xl text-brand-brown">
                        Yuk Belanja
                    </a>
                </div>
            </nav>
        </header>
    )
}