import React from "react";
import Product from "./Product";
import allProducts from "../fake-data/all-products";

const ProductList = ({ selectedCategory }) => {
  const selectedProducts =
    selectedCategory === ""
      ? allProducts
      : allProducts.filter(({ category }) => category === selectedCategory);
  return (
    <div className="container">
      {selectedProducts.map(({ id, title, image }) => (
        <Product key={id} title={title} image={image}></Product>
      ))}
    </div>
  );
};

export default ProductList;
