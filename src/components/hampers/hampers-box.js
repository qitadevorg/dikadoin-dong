import React from 'react'
import {StaticImage} from "gatsby-plugin-image";

export default function HampersBox ({ hamperBox }) {
  return (
    <article id={`item-${hamperBox.id}`} className={`bg-white border-2 rounded-lg overflow-hidden ${hamperBox.isSelected ? 'border-green-400' : 'border-brand-brown'}`}>
      <StaticImage
        src="../images/hero-image-1.webp"
        alt="Hero 1"
        placeholder="none"
        width={400}
        layout="constrained"
      />
      <div className="p-4">
        <h1 className="text-xl text-brand-brown font-bold">{hamperBox.name}</h1>
        <p className="mt-4">
          {hamperBox.price}
        </p>
      </div>
    </article>
  )
}