import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
export default function Home({ productData }) {
  // const [productsData, setProductsData] = React.useState([]);
  // console.log(productData);
  return (
    <Layout title="Home Page">
      {/* <div className="grid  grid-cols-4"> */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
        {productData.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const productData = await res.json();
  return {
    props: { productData }, // will be passed to the page component as props
  };
};
