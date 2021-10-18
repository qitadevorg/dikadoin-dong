import React from 'react'
import BrandStats from '../components/brand-stats'
import Catalogue from '../components/catalogue'
import Hero from '../components/hero'

export default function IndexPage() {
  return (
    <main>
      <Hero />
      <BrandStats />
      <Catalogue />
    </main>
  )
}
