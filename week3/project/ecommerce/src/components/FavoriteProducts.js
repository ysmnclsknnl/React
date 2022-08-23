import React from "react";
import { useFetch } from "../hooks/useFetch";
import API_URL from "../constants";
import Error from "./Error";
import Loading from "./Loading";
import FavIcon from "./FavIcon";
import { Link } from "react-router-dom";

const FavoriteProducts = ({ id }) => {
  const productUrl = `${API_URL}/${id}`;
  console.log(`${id} is and ${productUrl}`);
  const { loading, error, data: product } = useFetch(productUrl);

  if (error) {
    return <Error text="Products can not be loaded" />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="card">
      <FavIcon id={id} />
      <img src={product.image} alt={product.title}></img>
      <Link to={`../product/${id}`}>
        <p>{product.title}</p>
      </Link>
    </div>
  );
};

export default FavoriteProducts;
