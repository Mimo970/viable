import React, { useContext } from "react";
import Link from "next/link";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ product }) => {
  const addToFavorites = (e) => {};

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
  };

  return (
    <>
      <div className="card p-3 ">
        <div className=" h-[300px]  relative overflow-hidden group transition ">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[240px]"
                src={product.image}
                alt={product.title}
                layout="responsive"
              />
            </div>
          </div>
          {/* buttons */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={addToCartHandler}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-blue-400">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <button>
              <Link legacyBehavior href={`/product/${product.id}`}>
                <div className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                  <BsEyeFill />
                </div>
              </Link>
            </button>
            <button onClick={addToFavorites}>
              {/* <Link legacyBehavior href={`/product/${product.id}`}> */}
              <div className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                <AiOutlineHeart />
              </div>
              {/* </Link> */}
            </button>
          </div>
        </div>
        {/* category & title & price */}
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <Link legacyBehavior href={`product/${product.id}`}>
              <a>
                <div className="text-sm capitalize text-black-500 mb-1 hover:text-sky-700">
                  {product.title}
                </div>
              </a>
            </Link>

            <div className="text-sm capitalize text-gray-500 mb-1">
              {product.category}
            </div>
            {/* <Link legacyBehavior>
          <a href={`/product/${product.id}`}>
            <h2 className="font-semibold mb-1">{product.title}</h2>
          </a>
        </Link> */}
            <div className="font-semibold">$ {product.price}</div>
          </div>
          {/* <div>{product.rating.rate} of 5.0</div> */}
          {/* <button className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                Add to cart
              </button> */}
        </div>
      </div>
    </>

    // <div className=" flex flex-col self-start">
    //   <div className="flex flex-col ">
    //     <Link legacyBehavior href={`/product/${product.id}`}>
    //       <a>
    //         <img
    //           src={product.image}
    //           alt={product.name}
    //           // width={250}
    //           // height={250}
    //           className="rounded shadow object-scale-down h-48 w-96"
    //         />
    //       </a>
    //     </Link>
    //   </div>
    //   <div className="flex flex-col items-center  p-5">
    //     <Link legacyBehavior href={`/product/${product.id}`}>
    //       <a>
    //         <h2 className="text-lg">{product.title}</h2>
    //       </a>
    //     </Link>
    //     <p className="mb-2">{product.rating.rate}</p>
    //     <p>${product.price}</p>
    //     <button className="primary-button " type="button">
    //       Add to cart
    //     </button>
    //   </div>
    // </div>
  );
};

export default Card;
