import React from 'react'

export default function HampersItem ({ hampersItem }) {
  return (
    <article className={`bg-white border rounded-lg overflow-hidden ${hampersItem.isSelected ? 'border-green-400' : 'border-brand-brown'}`}>
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={hampersItem.img_url}
          alt={hampersItem.name}
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-brand-brown font-bold">
          {hampersItem.name}
        </h3>
        <p className="mt-1 text-sm">
          {hampersItem.price}
        </p>
      </div>
    </article>
  )
}