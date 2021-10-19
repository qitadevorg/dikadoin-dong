import React from 'react'

export default function SkeletonProductDetail() {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row">
      <div className="w-full md:w-96 h-96 bg-gray-300 animate-pulse" />
      <div className="ml-0 mt-8 md:mt-0 md:ml-8 flex-1">
        <div className="w-full h-8 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-1/4 h-6 bg-gray-300 animate-pulse" />
        <div className="mt-4 w-1/2 h-12 bg-gray-300 animate-pulse" />
        <div className="mt-8 w-1/5 h-4 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-full h-6 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-full h-6 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-full h-6 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-full h-6 bg-gray-300 animate-pulse" />
        <div className="mt-2 w-full h-6 bg-gray-300 animate-pulse" />
        <div className="mt-8 w-1/5 h-4 bg-gray-300 animate-pulse" />
        <div className="flex mt-2">
          <div className="mr-2 h-12 w-12 bg-gray-300 animate-pulse" />
          <div className="mr-2 h-12 w-12 bg-gray-300 animate-pulse" />
          <div className="mr-2 h-12 w-12 bg-gray-300 animate-pulse" />
        </div>
        <div className="mt-8 w-3/5 h-12 bg-gray-300 animate-pulse" />
      </div>
    </div>
  )
}
