import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../utils/ProductsContext";
const ProductDetails = ({ product }) => {
  // const { state, dispatch } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    // if (product.countInStock < quantity) {
    //   alert("Sorry. Product is out of stock");
    //   return;
    // }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.title}>
      <a href="/">Back to products</a>
      {/* <div className="flex-row items-start   md:flex justify-center mt-12 "> */}
      {/* <div className="mt-12 flex flex-col  items-center md:flex-row items-start justify-around lg:flex-row "> */}
      <div className=" gap-0 place-items-center justify-center grid md:grid-cols-[500px_minmax(600px,_0px)]">
        <div>
          <img
            className="max-h-[480px]"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="flex flex-col justify-start max-w-sm">
          <div className="text-lg capitalize text-gray-black mb-0 font-extrabold">
            {product.title}
          </div>
          <div className="text-lg capitalize text-gray-500 mb-3">
            {product.category}
          </div>
          <div className="text-md capitalize text-black-500 mb-2">
            {product.rating.rate} stars, {product.rating.count} ratings
          </div>
          <div className="text-md capitalize text-black-500 mb-3">
            {product.description}
          </div>

          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status:</div>
                <div>In stock</div>
                {/* <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div> */}
              </div>
              <button
                onClick={() => addToCart(product, product.id)}
                className="primary-button w-full"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const results = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      product: results,
    },
  };
}

export async function getStaticPaths() {
  const allProducts = await fetch("https://fakestoreapi.com/products").then(
    (r) => r.json()
  );

  return {
    paths: allProducts.map((product) => {
      return {
        params: {
          id: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export default ProductDetails;
