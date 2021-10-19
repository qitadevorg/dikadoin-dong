import React from 'react'

export default function Footer () {
    return (
        <footer className="bg-brand-brown">
            <div className="max-w-5xl mx-auto px-5 py-5 text-brand-yellow flex flex-col md:flex-row text-sm justify-between items-center">
                <p className="my-4 text-center">
                    ©Dikadoin.dong 2021
                </p>
                <p className="my-4 text-center max-w-sm">
                    Jl. Kaliurang, Candi Winangun, Sardonoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
                </p>
                <p className="my-4 text-center">
                    <a
                        href="https://www.instagram.com/dikadoin.dong"
                        className="mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    |
                    <a
                        href="https://wa.me/6281357139503"
                        className="mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Whatsapp
                    </a>
                    |
                    <a
                        href="https://shopee.co.id/dikadoin.dong"
                        className="mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Shopee
                    </a>
                </p>
            </div>
        </footer>
    )
}