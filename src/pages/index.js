import React from 'react'
import BrandStats from '../components/brand-stats'
import Catalogue from '../components/catalogue'
import Header from '../components/header'

export default function IndexPage() {
  return (
    <div>
      <Header />
      <BrandStats />
      <Catalogue />
    </div>
  )
}
