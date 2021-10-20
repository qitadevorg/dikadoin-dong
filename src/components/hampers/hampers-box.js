import React from 'react'

export default function HampersBox ({ hampersBox, isChecked, onClick }) {
  return (
    <label htmlFor={`box${hampersBox.id}`} className={`bg-white rounded-lg overflow-hidden border filter border-brand-brown transition cursor-pointer ${isChecked ? 'ring ring-brand-brown' : 'ring-0 grayscale'}`}>
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
      <input
        id={`box${hampersBox.id}`}
        type="checkbox"
        className="hidden"
        defaultChecked={isChecked}
        onClick={onClick}
      />
    </label>
  )
}