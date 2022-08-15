import React from "react";
import { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState("");
  const [products, setProducts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    const productUrl =
      selectedCat === "" ? API_URL : `${API_URL}/category/${selectedCat}`;
    const res = await fetch(productUrl);
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [selectedCat]);

  const onCategoryChange = (categoryName) => {
    setSelectedCat(categoryName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <main>
        <CategoryList
          onCategoryChange={onCategoryChange}
          selectedCategory={selectedCat}
        ></CategoryList>
        <ProductList selectedProducts={products}></ProductList>
      </main>
    </div>
  );
};

export default Home;
