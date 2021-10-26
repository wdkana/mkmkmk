import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
        <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
