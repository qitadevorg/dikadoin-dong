import React from 'react'
import { FaCheck } from '@react-icons/all-files/fa/FaCheck'

export default function HampersBox ({ hampersBox, isChecked, onClick }) {
  return (
    <label htmlFor={`box${hampersBox.id}`} className={`relative bg-white rounded-lg overflow-hidden border border-brand-brown transition cursor-pointer ${isChecked ? 'ring ring-brand-brown' : 'ring-0'}`}>
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
      {isChecked && (
        <div className="absolute w-full h-full inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow">
            <FaCheck size="1.5rem" />
          </div>
        </div>
      )}
    </label>
  )
}