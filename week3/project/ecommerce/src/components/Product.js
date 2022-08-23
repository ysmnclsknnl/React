import React from "react";
import "../App.css";
import FavIcon from "./FavIcon";
import { Link } from "react-router-dom";

const Product = ({ id, title, image }) => {
  return (
    <div className="card">
      <div>
        <FavIcon id={id} />
      </div>
      <img src={image} alt={title}></img>
      <Link to={`product/${id}`}>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default Product;
