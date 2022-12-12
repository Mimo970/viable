import Image from "next/image";
import Link from "next/link";
import React, { use, useContext } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Layout from "../components/Layout";
import { ProductsContext } from "../utils/ProductsContext";
import { useRouter } from "next/router";
import { CartContext } from "../contexts/CartContext";
import dynamic from "next/dynamic";

function CartPage() {
  const router = useRouter();
  // const { state, dispatch } = useContext(ProductsContext);

  // const {
  //   cart: { cartItems },
  // } = state;
  // const removeItemHandler = (item) => {
  //   dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  // };
  // const updateCartHandler = (item, qty) => {
  //   const quantity = Number(qty);
  //   dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  // };
  const { cart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const { increaseAmount, decreaseAmount, total } = useContext(CartContext);
  console.log(total);
  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <Link legacyBehavior href={`/product/${item.id}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.images[0]}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      {/* <select
                        value={item.quantity}
                        // value={countInStock[2]}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.rating.count).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select> */}
                      <div className="flex justify-end">
                        <button
                          onClick={() => decreaseAmount(item.id)}
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0 px-0 border border-gray-400 rounded shadow"
                          // className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-0 px-0 rounded"
                        >
                          <AiOutlineMinus />
                        </button>
                        <div className="px-2">{item.amount}</div>

                        <button
                          onClick={() => increaseAmount(item.id)}
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0 px-0 border border-gray-400 rounded shadow"
                          // className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-0 px-0 rounded"
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeFromCart(item.id)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal : $ {parseFloat(total).toFixed(2)}
                  {/* Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)} */}
                  {/* {`${product.price * product.amount}`} */}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("login?redirect=/shipping")}
                  className="primary-button w-full"
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
// import Link from "next/link";
// import React, { useContext } from "react";
// // import { ProductsContext } from "../components/ProductsContext";

// const Cart = () => {
//   // const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);

//   // const deleteFromCart = (id) => {
//   //   // selectedProducts.filter((id) => id === p.id);
//   //   const position = selectedProducts.indexOf(id);
//   //   if (position !== -1) {
//   //     setSelectedProducts((prev) => {
//   //       return prev.filter((value, index) => index !== position);
//   //     });
//   //   }
//   // };

//   return (
//     <div>
//       <Link legacyBehavior href={"/"}>
//         <a>Back to products</a>
//       </Link>
//       <div className="flex">
//         {/* {selectedProducts.map((p) => (
//           <div key={p.id}>
//             <div>{p.title}</div>
//             <button onClick={() => deleteFromCart(p.id)} className="bg-sky-300">
//               Delete
//             </button>
//             <br />
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default Cart;
