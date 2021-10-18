import React, { useEffect, useState } from 'react'
import BrandStats from '../components/brand-stats'
import Catalogue from '../components/catalogue'
import Header from '../components/header'
import Hero from '../components/hero'
import { getAllProducts } from '../data/products'

export default function IndexPage() {
  const [products, setProducts] = useState([])
  const [isLoadingCatalogue, setIsLoadingCatalogue] = useState(false)

  const getProducts = async () => {
    setIsLoadingCatalogue(true)
    const products = await getAllProducts()
    setIsLoadingCatalogue(false)
    setProducts(products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <BrandStats />
      <Catalogue
        products={products}
        isLoading={isLoadingCatalogue}
      />
    </main>
  )
}
