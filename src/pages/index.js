import React, { useEffect, useRef, useState } from 'react'
import BrandStats from '../components/brand-stats'
import Catalogue from '../components/catalogue'
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import { getAllProducts } from '../data/products'
import Footer from '../components/footer'
import { ABOUT_US, CONTACT, PRODUCT } from '../constants/navigation'

export default function IndexPage() {
  const [products, setProducts] = useState([])
  const [isLoadingCatalogue, setIsLoadingCatalogue] = useState(false)
  const productRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const getProducts = async () => {
    setIsLoadingCatalogue(true)
    const products = await getAllProducts()
    setIsLoadingCatalogue(false)
    setProducts(products)
  }

  const goToComponent = (destination) => {
    switch (destination) {
      case PRODUCT:
        console.log(productRef)
        productRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case ABOUT_US:
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
      case CONTACT:
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <main>
      <Header goToComponent={goToComponent} />
      <Hero onCTAClick={() => goToComponent(PRODUCT)} />
      <BrandStats />
      <Catalogue
        ref={productRef}
        products={products}
        isLoading={isLoadingCatalogue}
      />
      <About ref={aboutRef} />
      <Footer ref={contactRef} />
    </main>
  )
}
