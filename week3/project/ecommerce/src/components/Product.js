import React from "react";
import "../App.css";
import FavIcon from "./FavIcon";
import { Link } from "react-router-dom";

const Product = ({ id, title, image }) => {
  return (
    <div className="card">
      <FavIcon id={id} />
      <img src={image} alt={title} className="card-image"></img>
      <Link className="product-link" to={`product/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default Product;
