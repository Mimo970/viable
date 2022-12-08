import "../styles/globals.css";
import { ProductsCartProvider } from "../utils/ProductsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsCartProvider>
      <Component {...pageProps} />
    </ProductsCartProvider>
  );
}

export default MyApp;
