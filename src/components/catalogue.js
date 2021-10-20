import React, { useEffect, useState } from 'react'
import {StringParam, useQueryParam} from "use-query-params";
import {ALL_TYPE, BOUQUET_TYPE, HAMPERS_TYPE} from "../constants/products";
import Hampers from './catalogue/hampers'
import Products from './catalogue/products';

const ClientSideOnlyCatalogueTabs = React.lazy(() =>
  import('./catalogue/catalogue-tabs')
)

const Catalogue = React.forwardRef((_, ref) => {
  const [type, setType] = useQueryParam("type", StringParam)
  const [filteredProducts, setFilteredProducts] = useState(null)
  const isSSR = typeof window === 'undefined'

  const updateFilteredProduct = () => {
    if([ALL_TYPE, undefined].includes(type)) {
      setFilteredProducts(<Products />)
    } else if (type === BOUQUET_TYPE) {
      setFilteredProducts(<Products />)
    } else if (type === HAMPERS_TYPE) {
      setFilteredProducts(<Hampers />)
    }
  }

  useEffect(() => {
    updateFilteredProduct()
  }, [type])

  const handleChangeType = (type) => {
    setType(type)
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
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyCatalogueTabs type={type} changeType={handleChangeType} />
          </React.Suspense>
        )}
        {filteredProducts}
      </div>
    </section>
  )
})

export default Catalogue