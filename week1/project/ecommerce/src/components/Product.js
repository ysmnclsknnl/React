import React from "react";

const Product = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title}></img>
      <h4>{title}</h4>
    </div>
  );
};

export default Product;
