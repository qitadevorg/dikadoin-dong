import React, { useEffect, useState } from 'react'
import { getProductsById, getProductsByType } from '../../data/products'
import Header from '../../components/header'
import ProductDetail from '../../components/product-detail'

export default function Product({ params }) {
  const productId = params.id
  const [product, setProduct] = useState({})
  const [productsInThisType, setProductsInThisType] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getProduct = async () => {
    setIsLoading(true)
    const product = await getProductsById(productId)
    setProduct(product)
    const productsInThisType = await getProductsByType(product.type)
    setProductsInThisType(productsInThisType)
    setIsLoading(false)
  }

  useEffect(() => {
    getProduct()
  }, [productId])

  return (
    <main>
      <Header />
      <ProductDetail
        product={product}
        productsInThisType={productsInThisType}
        isLoading={isLoading}
      />
    </main>
  )
}
