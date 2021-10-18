import React from 'react'

export default function SkeletonProductItem() {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden">
      <div className="aspect-w-4 aspect-h-3 bg-gray-300 animate-pulse" />
      <div className="p-4">
        <div className="w-full h-4 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-3/4 h-4 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-1/2 h-4 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-1/3 h-4 bg-gray-300 animate-pulse" />
      </div>
    </div>
  )
}
