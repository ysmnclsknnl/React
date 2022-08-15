import React from "react";
import Product from "./Product";

const ProductList = ({ selectedProducts }) => {
  return (
    <div className="container">
      {selectedProducts.map(({ id, title, image }) => (
        <Product key={id} id={id} title={title} image={image}></Product>
      ))}
    </div>
  );
};

export default ProductList;
