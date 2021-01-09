/* eslint-disable react/prop-types */
import React, {FC} from 'react'
import {Helmet} from 'react-helmet'

type SiteHelmetProps = {
  title?: string
  description?: string
}

const keywords = ''

const SiteHelmet: FC<SiteHelmetProps> = props => {
  const {
    title = 'Home',
    description = 'Cato.tv has curated list of best of resources to learn Life Skills',
  } = props

  const pageTitle = `${title} | Cato.tv`
  return (
    <Helmet>
      <meta name="theme-color" content="#68db85" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" property="og:title" content={pageTitle}></meta>
      <meta
        name="og:description"
        property="og:description"
        content={description}></meta>
      {/* <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="/icons/icon-256x256.png"
      /> */}

      <title>{pageTitle}</title>

      <meta name="google-site-verification" content="" />
      {props.children}
    </Helmet>
  )
}

export {SiteHelmet}
