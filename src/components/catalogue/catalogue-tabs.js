import React from 'react'
import { ALL_TYPE, BOUQUET_TYPE, HAMPERS_TYPE } from '../../constants/products'

export default function CatalogueTabs({ type, changeType }) {
  return (
    <ul className="mt-8 text-center flex justify-center">
      <li>
        <button onClick={() => changeType(ALL_TYPE)} className={`block mx-2 px-3 py-1 rounded ${[ALL_TYPE, undefined].includes(type) ? 'bg-brand-primary' : ''}`}>
          Terlaris
        </button>
      </li>
      <li>
        <button onClick={() => changeType(BOUQUET_TYPE)} className={`block mx-2 px-3 py-1 rounded ${type === BOUQUET_TYPE ? 'bg-brand-primary' : ''}`}>
          Buket
        </button>
      </li>
      <li>
        <button onClick={() => changeType(HAMPERS_TYPE)} className={`block mx-2 px-3 py-1 rounded ${type === HAMPERS_TYPE ? 'bg-brand-primary' : ''}`}>
          Hampers
        </button>
      </li>
    </ul>
  )
}
