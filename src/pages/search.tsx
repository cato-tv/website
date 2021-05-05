import React from "react"
import Iframe from 'react-iframe'

export default function Home() {
    return <Iframe url="https://musing-pasteur-55bf40.netlify.app/"
    width="100%"
    height="100%"
    id="searchIframe"
    scrolling="auto"
    position="fixed"
    />
}