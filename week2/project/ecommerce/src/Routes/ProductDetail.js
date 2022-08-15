import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  let { productId } = useParams();

  console.log("product id is " + productId);
  const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {product && (
        <>
          <h2>{product.title}</h2>
          <p> {product.description}</p>
          <img src={product.image} alt={product.title}></img>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
