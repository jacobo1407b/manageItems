import {useState} from "react"
import type { AppProps } from 'next/app'

import { NextUIProvider, createTheme } from '@nextui-org/react';

import "../styles/globals.css"


const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {},
  }
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider theme={theme}>
      <div className='layout-jhm'>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  )


}
// <div className={currentMode === 'Dark' ? 'dark' : ''}>