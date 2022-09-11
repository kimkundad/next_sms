import '@public/css/bootstrap.css';
import { ChakraProvider } from '@chakra-ui/react'
import '@public/css/theme.css';
import '@public/css/style.css';
import '@public/css/pum.css';
import '@public/font-awesome/css/font-awesome.css';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
