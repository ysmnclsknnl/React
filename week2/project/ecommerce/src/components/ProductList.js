import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import fetchData from "../helpers/fetchData";
import Error from "./Error";
import Loading from "./Loading";
import API_URL from "../constants";

const ProductList = ({ selectedCat }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const productUrl =
    selectedCat === "" ? API_URL : `${API_URL}/category/${selectedCat}`;

  useEffect(() => {
    fetchData(productUrl, setProducts, setLoading, setError);
  }, [selectedCat]);

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
