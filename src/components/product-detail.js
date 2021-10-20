import { Link } from 'gatsby'
import React, { useRef } from 'react'
import Modal from './modal'
import OrderForm from './order-form'
import SkeletonProductDetail from './skeletons/skeleton-product-detail'

export default function ProductDetail({product, productsInThisType, isLoading}) {
  const orderModalRef = useRef()

  return (
    <section className="bg-brand-yellow p-5">
      <div className="max-w-5xl mx-auto">
        {
          isLoading
          ? <SkeletonProductDetail />
          : <article className="bg-white p-4 rounded-lg flex flex-col md:flex-row">
              <div>
                <img
                  src={product.img_url}
                  alt={`${product.type} - ${product.name}`}
                  className="w-full md:w-96"
                />
              </div>
              <div className="ml-0 mt-8 md:mt-0 md:ml-8 flex-1">
                <h1 className="font-medium text-xl">
                  {product.type} - {product.name}
                </h1>
                <p>
                  Terjual 40
                </p>
                <p className="mt-4 font-bold text-4xl">
                  {product.price}
                </p>
                <p className="mt-8 font-medium">
                  Deskripsi
                </p>
                <p className="mt-2">
                  {product.description}
                </p>
                <p className="mt-8 font-medium">
                  Varian
                </p>
                <ul className="mt-2 flex flex-wrap">
                  {productsInThisType.map(productInThisType => (
                    <li key={productInThisType.id}>
                      <Link
                        to={`/products/${productInThisType.id}`}
                        className={`block mr-2 border border-brand-brown px-4 py-2 ${product.name === productInThisType.name ? 'bg-brand-brown text-brand-yellow' : ''}`}
                      >
                        {productInThisType.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-8 px-8 py-2 bg-brand-primary rounded-md font-medium"
                  onClick={() => orderModalRef.current.openModal()}
                >
                  Pesan Sekarang
                </button>
                <Modal ref={orderModalRef} title="Beli Produk">
                  <OrderForm items={[{
                    name: `${product.type} - ${product.name}`,
                    price: product.price
                  }]} />
                </Modal>
              </div>
            </article>
        }
      </div>
    </section>
  )
}
