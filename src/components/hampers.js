import React from 'react'
import HampersItem from './hampers/hampers-item'
import HampersBox from "./hampers/hampers-box";

export default function Hampers () {
  const hampersItem = [
    {
      id: 1,
      name: "Alat Masak",
      price: "Rp 40000",
      isSelected: false
    },
    {
      id: 2,
      name: "Alat Tulis",
      price: "Rp 30000",
      isSelected: false
    },
    {
      id: 3,
      name: "Alat Kantor",
      price: "Rp 20000",
      isSelected: false
    }
  ]

  const hampersBox = [
    {
      id: 1,
      name: "Box Kotak",
      price: "Rp 10000",
      isSelected: false
    },
    {
      id: 2,
      name: "Box Bundar",
      price: "Rp 15000",
      isSelected: false
    }
  ]

  const renderItem = (
    <div id="item-wrapper" className="grid grid-cols-3 gap-4 mt-4">
      {
        hampersItem.map(hampers => <HampersItem key={hampers.id} hamperItem={hampers} />)
      }
    </div>
  )

  const renderBox = (
    <div id="item-wrapper" className="grid grid-cols-3 gap-4 mt-4">
      {
        hampersBox.map(hampers => <HampersBox key={hampers.id} hamperBox={hampers} />)
      }
    </div>
  )

  return (
    <section id="items" className="w-full mt-4 flex flex-col">
      <h1 className="text-3xl font-bold text-brand-brown">Pilih Item</h1>
      {renderItem}
      <h1 className="text-3xl font-bold text-brand-brown mt-8">Pilih Box</h1>
      {renderBox}
      <button className="block mt-8 py-4 rounded-lg bg-brand-brown text-brand-yellow font-bold">
        Pesan Sekarang
      </button>
    </section>
  )
}