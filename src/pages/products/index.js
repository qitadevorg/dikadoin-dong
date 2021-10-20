import React from 'react'
import { Router } from '@reach/router'
import NotFoundPage from '../404'
import Product from './[id]'

export default function Products() {
  return (
    <Router basepath="/products">
      <Product path="/:id" />
      <NotFoundPage path="/" />
    </Router>
  )
}
