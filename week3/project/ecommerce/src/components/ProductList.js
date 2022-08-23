import React from "react";
import Product from "./Product";
import Error from "./Error";
import Loading from "./Loading";
import API_URL from "../constants";
import { useFetch } from "../hooks/useFetch";

const ProductList = ({ selectedCat }) => {
  const productUrl =
    selectedCat === "" ? API_URL : `${API_URL}/category/${selectedCat}`;

  const { error, loading, data: products } = useFetch(productUrl);
  if (error) {
    return <Error text="Products can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container flex-row">
      {products &&
        products.map(({ id, title, image }) => (
          <Product key={id} id={id} title={title} image={image}></Product>
        ))}
    </div>
  );
};

export default ProductList;
