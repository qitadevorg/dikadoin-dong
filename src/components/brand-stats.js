import React from 'react'

export default function BrandStats() {
  return (
    <section className="px-5 py-8 bg-brand-brown text-brand-yellow">
      <div className="max-w-4xl mx-auto flex items-center">
        <div className="flex-1">
          <p className="text-center">
            <span className="text-4xl">15+</span><br/>
            Variasi Produk
          </p>
        </div>
        <hr className="bg-brand-yellow h-14 w-1 rounded-full" />
        <div className="flex-1">
          <p className="text-center">
            <span className="text-4xl">96+</span><br/>
            Produk Terjual
          </p>
        </div>
        <hr className="bg-brand-yellow h-14 w-1 rounded-full" />
        <div className="flex-1">
          <p className="text-center">
            <span className="text-4xl">80+</span><br/>
            Pelanggan
          </p>
        </div>
      </div>
    </section>
  )
}
