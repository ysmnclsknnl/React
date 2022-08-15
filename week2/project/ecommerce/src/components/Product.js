import React from "react";

import { Link } from "react-router-dom";

const Product = ({ id, title, image }) => {
  return (
    <Link to="products/11">
      {" "}
      <div className="card">
        <img src={image} alt={title}></img>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Product;
