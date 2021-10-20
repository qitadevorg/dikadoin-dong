import React from 'react'

export default function HampersItem ({ hampersItem, isChecked, onClick }) {
  return (
    <label htmlFor={`item${hampersItem.id}`} className={`bg-white rounded-lg overflow-hidden border filter border-brand-brown transition cursor-pointer ${isChecked ? 'ring ring-brand-brown' : 'ring-0 grayscale'}`}>
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
      <input
        id={`item${hampersItem.id}`}
        type="checkbox"
        className="hidden"
        defaultChecked={isChecked}
        onClick={onClick}
      />
    </label>
  )
}