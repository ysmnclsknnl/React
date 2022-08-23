import React from "react";
import "../App.css";
import FavIcon from "../components/FavIcon";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import API_URL from "../constants";
import { useFetch } from "../hooks/useFetch";

const ProductDetail = () => {
  const { productId } = useParams();
  const productUrl = `${API_URL}/${productId}`;

  const { loading, error, data } = useFetch(productUrl);

  if (error) {
    return <Error text="Product Details can not be loaded" />;
  }
  return (
    <div className="container flex-column">
      {loading && <Loading />}
      {data && (
        <>
          <div>
            <h2 className="text-center">{data.title}</h2>
            <FavIcon id={parseInt(productId)} />
          </div>

          <div className="product-detail flex-row">
            <div className="description">
              <p> {data.description}</p>
            </div>
            <img src={data.image} alt={data.title}></img>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
