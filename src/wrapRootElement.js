import React from 'react'

import './styles/global.css'

import {Helmet} from 'react-helmet'

export const wrapPageElement = ({element, props}) => (
  <React.Fragment>
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="theme-color" content="#68db85" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,700&family=Poppins:ital,wght@0,400;0,500;0,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <>{element}</>
  </React.Fragment>
)
