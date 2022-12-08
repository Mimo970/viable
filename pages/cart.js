import Link from "next/link";
import React, { useContext } from "react";
// import { ProductsContext } from "../components/ProductsContext";

const Cart = () => {
  // const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);

  // const deleteFromCart = (id) => {
  //   // selectedProducts.filter((id) => id === p.id);
  //   const position = selectedProducts.indexOf(id);
  //   if (position !== -1) {
  //     setSelectedProducts((prev) => {
  //       return prev.filter((value, index) => index !== position);
  //     });
  //   }
  // };

  return (
    <div>
      <Link legacyBehavior href={"/"}>
        <a>Back to products</a>
      </Link>
      <div className="flex">
        {/* {selectedProducts.map((p) => (
          <div key={p.id}>
            <div>{p.title}</div>
            <button onClick={() => deleteFromCart(p.id)} className="bg-sky-300">
              Delete
            </button>
            <br />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Cart;
