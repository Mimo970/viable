import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { ProductsContext } from "../utils/ProductsContext";
import { CartContext } from "../contexts/CartContext";

const Layout = ({ title, children }) => {
  // const { state, dispatch } = useContext(ProductsContext);
  // const { cart } = state;
  const { cart } = useContext(CartContext);

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.length);
  }, [cart]);

  // const [count, setCount] = useState(0);

  // useLayoutEffect(() => {
  //   if (sessionStorage.getItem("state")) {
  //     setCount(parseInt(sessionStorage.getItem("state")));
  //   } else {
  //     sessionStorage.setItem("state", count.toString());
  //   }
  // }, []);

  // useEffect(() => {
  //   sessionStorage.setItem("state", count.toString());
  // }, [count]);

  return (
    <>
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button> */}

      <Head>
        <title>{title ? title + " - Viable" : "Viable"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link legacyBehavior href="/">
              <a className="text-lg font-bold">Viable</a>
            </Link>
            <div className="flex justify-start items-center">
              <Link legacyBehavior href="/cart">
                <a className="p-2 flex items-center">
                  <AiOutlineShoppingCart />
                  {/* {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} */}

                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="p-2">Sign in</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Viable</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
