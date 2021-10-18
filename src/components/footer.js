import React from 'react'
import logo from '../images/dikadoin-dong-logo.webp'
import { IconContext } from "@react-icons/all-files";
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp'
import { FaShopify } from '@react-icons/all-files/fa/FaShopify'

export default function Footer () {
    return (
        <footer className="bg-brand-brown">
            <div className="max-w-6xl px-4 sm:px-0 py-6 sm:justify-between flex flex-col sm:flex-row items-start mx-auto">
                <div id="identity" className="flex flex-col text-white m-4 sm:w-30p">
                    <div className="flex flex-row items-center">
                        <img src={logo} alt="dikadoin logo" width={75} />
                        <h1 className="text-2xl">
                            dikadoiin.dong
                        </h1>
                    </div>
                    <p>
                        Dikadoiin.dong merupakan bisnis industri kreatif yang menghasilkan produk berupa custom gift dan variasi buket dan berlokasi di Yogyakarta.
                        Konsep yang ditawarkan adalah berupa kesederhanaan yang bernilai estetika. Dengan Tagline "Berbagi Kisah" membantu untuk memvisualisasikan rasa sayang dengan produk kami.
                    </p>
                </div>

                <div id="location" className="flex flex-col text-white m-4 sm:w-1/4 sm:pt-4">
                    <h1 className="text-2xl">
                        Lokasi
                    </h1>
                    <p className="mt-4">
                        Jl. Kaliurang KM 14,5. Ngemplak, Sleman, Daerah Istimewa Yogyakarta
                    </p>
                </div>

                <div id="contact" className="flex flex-col text-white m-4 sm:w-1/4 sm:mt-4 sm:pt-4">
                    <h1 className="text-2xl">
                        Kontak
                    </h1>

                    <div className="flex flex-row sm:flex-col mt-4">
                        <IconContext.Provider value={{ size: '2em' }}>
                            <a href="#" className="flex flex-row items-center">
                                <FaInstagram />
                                <span className="ml-4">Instagram</span>
                            </a>
                            <hr className="bg-brand-yellow mx-4 h-8 w-1 rounded-full sm:hidden" />
                            <a href="#" className="flex flex-row items-center sm:mt-4">
                                <FaWhatsapp />
                                <span className="ml-4">Whatsapp</span>
                            </a>
                            <hr className="bg-brand-yellow mx-4 h-8 w-1 rounded-full sm:hidden" />
                            <a href="#" className="flex flex-row items-center sm:mt-4">
                                <FaShopify />
                                <span className="ml-4">Shopee</span>
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </footer>
    )
}