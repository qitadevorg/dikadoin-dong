import React from 'react'
import {Helmet} from 'react-helmet'

export default function Layout({ children }) {

  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>
          Dikadoin.dong
        </title>
        <meta name='description' content="Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial" />
      </Helmet>
      {children}
    </main>
  )
}
