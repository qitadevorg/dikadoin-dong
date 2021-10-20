import React, { useEffect, useState } from 'react'
import { getProductsById, getProductsByType } from '../../data/products'
import ProductDetail from '../../components/product-detail'
import Footer from '../../components/footer'
import Breadcrumb from '../../components/breadcrumb'

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
      <Breadcrumb path={[{ name: 'Produk' }]} />
      <ProductDetail
        product={product}
        productsInThisType={productsInThisType}
        isLoading={isLoading}
      />
      <Footer />
    </main>
  )
}
