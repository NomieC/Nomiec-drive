import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layouts/main"
import { AnimatePresence, motion } from 'framer-motion'
import Fonts from '../components/fonts'

function MyApp({ Component, pageProps, router }) {
  return (
  <ChakraProvider>
    <Fonts />
    <Layout router={router}>
      <AnimatePresence mode='wait' initial={true} onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}>
          <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
