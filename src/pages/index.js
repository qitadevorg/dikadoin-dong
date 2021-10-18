import React from 'react'
import BrandStats from '../components/brand-stats'
import Catalogue from '../components/catalogue'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'

export default function IndexPage() {
  return (
    <main>
      <Header />
      <Hero />
      <BrandStats />
      <Catalogue />
      <Footer />
    </main>
  )
}
