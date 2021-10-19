import { Link } from 'gatsby'
import React, { useRef } from 'react'
import Modal from './modal'
import OrderForm from './order-form'

export default function ProductItem({ product }) {
  const orderModalRef = useRef()
  
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-brand-brown">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={product.img_url}
          alt={product.name}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold">
          {product.type} ({product.name})
        </h2>
        <p>
          Rp {product.price}
        </p>
        <button
          className="mt-2 px-4 py-2 bg-brand-primary rounded w-full text-sm font-medium"
          onClick={() => orderModalRef.current.openModal()}
        >
          Beli Sekarang
        </button>
        <Modal ref={orderModalRef} title="Beli Produk">
          <OrderForm product={product} />
        </Modal>
        <Link
          to={`/products/${product.id}`}
          className="mt-2 px-4 py-2 block text-center rounded w-full text-sm font-medium"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  )
}
