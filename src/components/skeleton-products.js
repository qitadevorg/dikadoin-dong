import React from 'react'
import SkeletonProductItem from './skeleton-product-item'

export default function SkeletonProducts() {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
      <SkeletonProductItem />
      <SkeletonProductItem />
      <SkeletonProductItem />
      <SkeletonProductItem />
      <SkeletonProductItem />
      <SkeletonProductItem />
    </div>
  )
}
