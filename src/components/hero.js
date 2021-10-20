import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Hero({ onCTAClick }) {
  return (
    <section className="bg-brand-yellow px-5 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="font-bold text-4xl">
            Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial
          </h1>
          <p className="mt-6">
            Visualisasikan rasa sayangmu dengan berbagi kisah bersama orang spesial
          </p>
          <button
            className="mt-4 px-8 py-3 bg-brand-primary rounded-lg font-medium"
            onClick={onCTAClick}
          >
            Yuk Belanja
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <StaticImage
            src="../images/hero-image-1.webp"
            alt="Hero 1"
            placeholder="none"
            width={400}
            layout="constrained"
          />
        </div>
      </div>
    </section>
  )
}
