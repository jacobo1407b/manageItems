import type { AppProps } from 'next/app'
import { SSRProvider } from '@react-aria/ssr';
import { Toaster } from 'react-hot-toast';
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
    <SSRProvider>
      <NextUIProvider theme={theme}>
        <div className='layout-jhm'>
          <Component {...pageProps} />
        </div>
      </NextUIProvider>
      <Toaster containerClassName="toast-container" />
    </SSRProvider>

  )


}
// <div className={currentMode === 'Dark' ? 'dark' : ''}>