import React from "react";
import Product from "./Product";
import allProducts from "../fake-data/all-products";

const ProductList = ({ selectedCategories }) => {
  const selectedProducts = allProducts.filter((product) =>
    selectedCategories.includes(product.category)
  );
  return (
    <div className="container">
      {selectedProducts.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          image={product.image}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
