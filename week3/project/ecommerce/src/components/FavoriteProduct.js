import React from "react";
import { useFetch } from "../hooks/useFetch";
import API_URL from "../constants";
import Error from "./Error";
import Loading from "./Loading";
import FavIcon from "./FavIcon";
import { Link } from "react-router-dom";

const FavoriteProduct = ({ id }) => {
  const productUrl = `${API_URL}/${id}`;
  const { loading, error, data: product } = useFetch(productUrl);

  if (error) {
    return <Error text="Product can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="card">
      <FavIcon id={id} />
      <img src={product.image} alt={product.title}></img>
      <Link className="product-link" to={`../product/${id}`}>
        <p>{product.title}</p>
      </Link>
    </div>
  );
};

export default FavoriteProduct;
