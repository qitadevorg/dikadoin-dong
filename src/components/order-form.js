import React, { useState } from 'react'

export default function OrderForm({ product }) {

  const [senderName, setSenderName] = useState('')
  const [senderPhone, setSenderPhone] = useState('')
  const [receiverName, setReceiverName] = useState('')
  const [receiverPhone, setReceiverPhone] = useState('')
  const [amIReceiver, setAmIReceiver] = useState(false)
  const [greetingMessage, setGreetingMessage] = useState('')

  const phone = '6282251919416'

  const message = () =>
    `Halo kak!
    Saya mau order dong :)
    Nama pengirim: ${senderName}
    No. HP pengirim: ${senderPhone}
    
    Nama penerima: ${amIReceiver ? senderName : receiverName}
    No. HP penerima: ${amIReceiver ? senderPhone : receiverPhone}

    Pesanan: ${product.type} - ${product.name}
    
    Ucapan:
    ${greetingMessage}`

  const fullWhatsAppURL = () =>
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message())}`

  const handleAmIReceiverChange = (event) => {
    setAmIReceiver(event.target.checked)
  }

  return (
    <div>
      <div>
        <label htmlFor="senderName" className="text-sm block">
          Nama Pengirim
        </label>
        <input
          id="senderName"
          type="text"
          placeholder="Masukkan nama"
          value={senderName}
          onChange={(event) => setSenderName(event.target.value)}
          className="mt-2 px-4 py-2 w-full rounded-lg border border-brand-brown transition focus:outline-none focus:ring focus:ring-brand-brown"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="senderPhone" className="text-sm block">
          No. HP Pengirim
        </label>
        <input
          id="senderPhone"
          type="text"
          placeholder="Masukkan no. HP"
          value={senderPhone}
          onChange={(event) => setSenderPhone(event.target.value)}
          className="mt-2 px-4 py-2 w-full rounded-lg border border-brand-brown transition focus:outline-none focus:ring focus:ring-brand-brown"
        />
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          id="amIReceiver"
          defaultChecked={amIReceiver}
          onChange={handleAmIReceiverChange}
        />
        <label
          htmlFor="amIReceiver"
          className="ml-2"
        >
          Saya adalah penerima
        </label>
      </div>
      {
        amIReceiver
        ? ''
        : <>
            <div className="mt-4">
              <label htmlFor="receiverName" className="text-sm block">
                Nama Penerima
              </label>
              <input
                id="receiverName"
                type="text"
                placeholder="Masukkan nama"
                value={receiverName}
                onChange={(event) => setReceiverName(event.target.value)}
                className="mt-2 px-4 py-2 w-full rounded-lg border border-brand-brown transition focus:outline-none focus:ring focus:ring-brand-brown"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="receiverPhone" className="text-sm block">
                No. HP Penerima
              </label>
              <input
                id="receiverPhone"
                type="text"
                placeholder="Masukkan no. HP"
                value={receiverPhone}
                onChange={(event) => setReceiverPhone(event.target.value)}
                className="mt-2 px-4 py-2 w-full rounded-lg border border-brand-brown transition focus:outline-none focus:ring focus:ring-brand-brown"
              />
            </div>
          </>
      }
      <div className="mt-4">
        <h3 className="font-bold text-sm">Produk</h3>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2">
                {product.type} - {product.name}
              </td>
              <td className="text-right py-2">
                Rp {product.price}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <label htmlFor="greetingMessage" className="text-sm block">
          Pesan Ucapan
        </label>
        <textarea
          id="greetingMessage"
          placeholder="Masukkan kata ucapan"
          value={greetingMessage}
          onChange={(event) => setGreetingMessage(event.target.value)}
          rows={3}
          className="mt-2 px-4 py-2 w-full rounded-lg border border-brand-brown transition focus:outline-none focus:ring focus:ring-brand-brown"
        />
      </div>
      <a
        href={fullWhatsAppURL()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-center block bg-brand-primary px-5 py-3 font-bold rounded-lg w-full"
      >
        Pesan sekarang
      </a>
    </div>
  )
}
