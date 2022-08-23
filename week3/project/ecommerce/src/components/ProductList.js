import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import fetchData from "../helpers/fetchData";
import Error from "./Error";
import Loading from "./Loading";
import API_URL from "../constants";
import { useFetch } from "../hooks/useFetch";

const ProductList = ({ selectedCat }) => {
  console.log("rendered");

  const productUrl =
    selectedCat === "" ? API_URL : `${API_URL}/category/${selectedCat}`;

  const { error, loading, data } = useFetch(productUrl);
  if (error) {
    return <Error text="Products can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container flex-row">
      {data &&
        data.map(({ id, title, image }) => (
          <Product key={id} id={id} title={title} image={image}></Product>
        ))}
    </div>
  );
};

export default ProductList;
