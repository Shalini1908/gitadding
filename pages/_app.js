import '../styles/globals.css';
import Navbar from "../Components/Navbar/Navbar";
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
    <Navbar />
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  )

}
