import React from 'react'

export default function HampersBox ({ hampersBox }) {
  return (
    <article id={`item-${hampersBox.id}`} className={`bg-white border rounded-lg overflow-hidden ${hampersBox.isSelected ? 'border-green-400' : 'border-brand-brown'}`}>
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={hampersBox.img_url}
          alt={hampersBox.name}
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-brand-brown font-bold">
          {hampersBox.name}
        </h3>
        <p className="mt-1 text-sm">
          {hampersBox.price}
        </p>
      </div>
    </article>
  )
}