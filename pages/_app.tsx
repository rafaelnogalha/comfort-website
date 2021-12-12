import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme'

import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="shortcut icon" href="/Comfort_Icon_Gold.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}
export default MyApp
