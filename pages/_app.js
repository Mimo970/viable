import "../styles/globals.css";
import { ProductsCartProvider } from "../utils/ProductsContext";
import CartProvider from "../contexts/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      {/* <ProductsCartProvider> */}
      <Component {...pageProps} />
      {/* </ProductsCartProvider> */}
    </CartProvider>
  );
}

export default MyApp;
