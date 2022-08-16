import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../helpers/fetchData";
import Error from "../components/Error";
import Loading from "../components/Loading";
import API_URL from "../constants";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { productId } = useParams();

  const getProduct = async () => {
    const productData = await fetchData(`${API_URL}/${productId}`);

    if (!productData) {
      setLoading(false);
      setError(true);
      return;
    }
    setLoading(false);
    setProduct(productData);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (error) {
    return <Error text="Product Details can not be loaded" />;
  }

  return (
    <div className="container flex-column">
      {loading && <Loading />}{" "}
      {product && (
        <>
          <h2 className="text-center">{product.title}</h2>
          <div className="product-detail flex-row">
            {" "}
            <div className="description">
              {" "}
              <p> {product.description}</p>
            </div>
            <img src={product.image} alt={product.title}></img>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
