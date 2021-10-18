import React from 'react'
import { Link } from 'gatsby'
import ProductItem from './product-item'

export default function Catalogue() {
  return (
    <section className="bg-brand-yellow py-12 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-2xl text-center">
          Katalog Produk
        </h2>
        <p className="mt-2 text-center">
          Kami menyediakan beberapa pilihan produk
        </p>
        <ul className="mt-2 text-center flex justify-center">
          <li>
            <Link to="/" className="block mx-2 bg-brand-primary px-3 py-1 rounded">
              Semua
            </Link>
          </li>
          <li>
            <Link to="/bouquets" className="block mx-2 px-3 py-1 rounded">
              Buket
            </Link>
          </li>
          <li>
            <Link to="/hampers" className="block mx-2 px-3 py-1 rounded">
              Hampers
            </Link>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  )
}
