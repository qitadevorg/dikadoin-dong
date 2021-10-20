import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Breadcrumb({ path }) {
  return (
    <header className="bg-brand-yellow py-3 px-5">
      <div className="max-w-5xl mx-auto flex items-center">
        <Link to="/" className="flex items-center font-medium">
          <StaticImage
            src="../images/dikadoin-dong-logo.webp"
            alt="Dikadoin Logo"
            placeholder="none"
            layout="fixed"
            width={40}
          />
          <span className="ml-4">Dikadoin.dong</span>
        </Link>
        { path.map(location => (
          <div key={location.name} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-4 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">
              {location.name}
            </span>
          </div>
        )) }
      </div>
    </header>
  )
}
