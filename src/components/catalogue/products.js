import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../data/products'
import ProductItem from '../product-item'
import SkeletonProducts from '../skeletons/skeleton-products'

export default function Products() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getProducts = async () => {
    setIsLoading(true)
    const products = await getAllProducts()
    setProducts(products)
    setIsLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    (
      <div>
        {
          isLoading
          ? <SkeletonProducts />
          : <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map(product => <ProductItem key={product.id} product={product} />)}
            </div>
        }
      </div>
    )
  )
}
