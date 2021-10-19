import React from 'react'
import HampersItem from './hampers/hampers-item'
import HampersBox from "./hampers/hampers-box";

export default function Hampers () {
  const hampersItems = [
    {
      id: 1,
      name: "Alat Masak",
      price: "Rp 40000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 2,
      name: "Alat Tulis",
      price: "Rp 30000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 3,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 4,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 5,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 6,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 7,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 8,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 9,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 10,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 11,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 12,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 13,
      name: "Alat Kantor",
      price: "Rp 20000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
  ]

  const hampersBoxes = [
    {
      id: 1,
      name: "Box Kotak",
      price: "Rp 10000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    },
    {
      id: 2,
      name: "Box Bundar",
      price: "Rp 15000",
      img_url: 'https://res.cloudinary.com/dau2gxgbw/image/upload/c_scale,w_360/v1634525074/dikadoin.dong/EE04D058-D997-4B0E-8E6D-4F562C891300_coxagl.jpg'
    }
  ]

  return (
    <section id="items" className="w-full mt-4">
      <h2 className="text-xl font-bold text-brand-brown">
        Pilih Item
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
        {hampersItems.map(item => <HampersItem key={item.id} hampersItem={item} />)}
      </div>
      <h2 className="text-xl font-bold text-brand-brown mt-8">
        Pilih Box
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
        {hampersBoxes.map(box => <HampersBox key={box.id} hampersBox={box} />)}
      </div>
      <button className="block mt-8 px-5 py-4 rounded-lg bg-brand-primary font-medium">
        Pesan Sekarang
      </button>
    </section>
  )
}