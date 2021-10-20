import React from 'react'
import {Helmet} from 'react-helmet'
import useSiteMetadata from '../hooks/use-site-metadata'

export default function Layout({ children }) {
  const {title, description} = useSiteMetadata()

  return (
    <main>
      <Helmet>
        <html lang="id" />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name="icon" href="/src/images/favicon.ico" />
      </Helmet>
      {children}
    </main>
  )
}
