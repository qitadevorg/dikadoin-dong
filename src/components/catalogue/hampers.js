import React, { useState, useEffect } from "react"
import { getAllHampersBoxes, getAllHampersItems } from "../../data/products"
import HampersItem from "../hampers/hampers-item"
import HampersBox from "../hampers/hampers-box"
import SkeletonHampers from "../skeletons/skeleton-hampers"


export default function Hampers () {
  const [hampersItems, setHampersItems] = useState([])
  const [hampersBoxes, setHampersBoxes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])
  const [checkedBoxes, setCheckedBoxes] = useState([])

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
    if(checkedBoxes.find(checkedBox => checkedBox.id === box.id)){
      setCheckedBoxes(checkedBoxes.filter(checkedBox => checkedBox.id !== box.id))
    } else {
      setCheckedBoxes([...checkedBoxes, box])
    }
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
                isChecked={!!checkedBoxes.find(checkedBox => checkedBox.id === box.id)}
                onClick={() => handleBoxClicked(box)}
              />)}
            </div>
            <button className="mt-8 bg-brand-primary font-medium px-5 py-3 rounded-lg">
              Pesan Sekarang
            </button>
          </div>
      }
    </div>
  )
}