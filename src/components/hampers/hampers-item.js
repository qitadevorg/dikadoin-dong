import React from 'react'
import {StaticImage} from "gatsby-plugin-image";

export default function HampersItem ({ hamperItem }) {
  return (
    <article id={`item-${hamperItem.id}`} className={`bg-white border-2 rounded-lg overflow-hidden ${hamperItem.isSelected ? 'border-green-400' : 'border-brand-brown'}`}>
      <StaticImage
        src="../images/hero-image-1.webp"
        alt="Hero 1"
        placeholder="none"
        width={400}
        layout="constrained"
      />
      <div className="p-4">
        <h1 className="text-xl text-brand-brown font-bold">{hamperItem.name}</h1>
        <p className="mt-4">
          {hamperItem.price}
        </p>
      </div>
    </article>
  )
}