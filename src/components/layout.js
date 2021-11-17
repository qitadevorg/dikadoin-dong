import React from 'react'
import {Helmet} from 'react-helmet'
import icon from '../images/favicon.ico'

export default function Layout({ children }) {

  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>
          Dikadoin.dong
        </title>
        <meta name='description' content="Bagikan kebahagiaan dengan berbagi kisah bersama orang spesial" />
        <link rel="shortcut icon" href={icon} type="image/x-icon" />
        <meta name="google-site-verification" content="HxQVztMq4UZ7ExI-JtxWpgUygnvacrPF4XlZ50SLB5Q" />
      </Helmet>
      {children}
    </main>
  )
}
