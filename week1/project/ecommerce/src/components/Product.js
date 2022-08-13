import React from "react";

const Product = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default Product;
