import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
        <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
