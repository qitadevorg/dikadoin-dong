import React, { useState, useEffect, useRef } from "react"
import { getAllHampersBoxes, getAllHampersItems } from "../../data/products"
import HampersItem from "../hampers/hampers-item"
import HampersBox from "../hampers/hampers-box"
import SkeletonHampers from "../skeletons/skeleton-hampers"
import Modal from "../modal"
import OrderForm from "../order-form"


export default function Hampers () {
  const [hampersItems, setHampersItems] = useState([])
  const [hampersBoxes, setHampersBoxes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])
  const [checkedBox, setCheckedBox] = useState(null)
  const orderModalRef = useRef()

  const getItemsAndBoxes = async () => {
    setIsLoading(true)
    const hampersItems = await getAllHampersItems()
    const hampersBoxes = await getAllHampersBoxes()
    setHampersItems(hampersItems)
    setHampersBoxes(hampersBoxes)
    setIsLoading(false)
  }

  const handleItemClicked = (item) => {
    if(checkedItems.find(checkedItem => checkedItem.id === item.id)){
      setCheckedItems(checkedItems.filter(checkedItem => checkedItem.id !== item.id))
    } else {
      setCheckedItems([...checkedItems, item])
    }
  }

  const handleBoxClicked = (box) => {
    if(checkedBox && checkedBox.id === box.id){
      setCheckedBox(null)
    } else {
      setCheckedBox(box)
    }
  }

  const orderItems = () => {
    const orderItems = checkedItems.map(item => ({
      name: item.name,
      price: item.price
    }))
    if (checkedBox) {
      orderItems.push({
        name: checkedBox.name,
        price: checkedBox.price
      })
    }
    return orderItems
  }

  useEffect(() => {
    getItemsAndBoxes()
  }, [])

  return (
    <div>
      {
        isLoading
        ? <SkeletonHampers />
        : <div>
            <h2 className="mt-8 text-xl font-bold">
              Pilih Item
            </h2>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {hampersItems.map(item => <HampersItem
                key={item.id}
                hampersItem={item}
                isChecked={!!checkedItems.find(checkedItem => checkedItem.id === item.id)}
                onClick={() => handleItemClicked(item)}
              />)}
            </div>
            <h2 className="mt-8 text-xl font-bold">
              Pilih Item
            </h2>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {hampersBoxes.map(box => <HampersBox
                key={box.id}
                hampersBox={box}
                isChecked={checkedBox && checkedBox.id === box.id}
                onClick={() => handleBoxClicked(box)}
              />)}
            </div>
            <button
              className="mt-8 bg-brand-primary font-medium px-5 py-3 rounded-lg"
              onClick={() => orderModalRef.current.openModal()}
            >
              Pesan Sekarang
            </button>
            <Modal ref={orderModalRef} title="Beli Produk">
              <OrderForm items={orderItems()} />
            </Modal>
          </div>
      }
    </div>
  )
}