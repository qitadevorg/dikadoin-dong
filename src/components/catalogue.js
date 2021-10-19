import React from 'react'
import ProductItem from './product-item'
import SkeletonProducts from './skeleton-products'
import {StringParam, useQueryParam} from "use-query-params";
import {ALL_TYPE, BOUQUET_TYPE, HAMPERS_TYPE} from "../constants/products";
import Hampers from './hampers'

const Catalogue = React.forwardRef(({ products, isLoading }, ref) => {
  const [type, setType] = useQueryParam("type", StringParam)

  const productList = (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => <ProductItem key={product.id} product={product} />)}
    </div>
  )

  const filteredProducts = () => {
    if([ALL_TYPE, undefined].includes(type)) {
      if (isLoading) {
        return <SkeletonProducts />
      }
      return productList
    } else if (type === BOUQUET_TYPE) {
      if (isLoading) {
        return <SkeletonProducts />
      }
      return productList
    } else if (type === HAMPERS_TYPE) {
      if (isLoading) {
        return <SkeletonProducts />
      }
      return <Hampers />
    }
  }

  return (
    <section ref={ref} className="bg-brand-yellow py-12 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bold text-2xl text-center">
          Katalog Produk
        </h2>
        <p className="mt-2 text-center">
          Kami menyediakan beberapa pilihan produk
        </p>
        <ul className="mt-8 text-center flex justify-center">
          <li>
            <button onClick={() => setType(ALL_TYPE)} className={`block mx-2 px-3 py-1 rounded ${[ALL_TYPE, undefined].includes(type) ? 'bg-brand-primary' : ''}`}>
              Semua
            </button>
          </li>
          <li>
            <button onClick={() => setType(BOUQUET_TYPE)} className={`block mx-2 px-3 py-1 rounded ${type === BOUQUET_TYPE ? 'bg-brand-primary' : ''}`}>
              Buket
            </button>
          </li>
          <li>
            <button onClick={() => setType(HAMPERS_TYPE)} className={`block mx-2 px-3 py-1 rounded ${type === HAMPERS_TYPE ? 'bg-brand-primary' : ''}`}>
              Hampers
            </button>
          </li>
        </ul>
        {filteredProducts()}
      </div>
    </section>
  )
})

export default Catalogue