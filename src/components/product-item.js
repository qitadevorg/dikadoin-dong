import React from 'react'

export default function ProductItem() {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-brand-brown">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src="https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold">
          Buket Snack
        </h2>
        <p>
          Rp 100.000
        </p>
        <button className="mt-2 px-4 py-2 bg-brand-primary rounded w-full text-sm font-medium">
          Beli Sekarang
        </button>
        <button className="mt-2 px-4 py-2 rounded w-full text-sm font-medium">
          Lihat Detail
        </button>
      </div>
    </article>
  )
}
