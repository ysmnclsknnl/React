import React from "react";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState("");

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
        />
        <ProductList selectedCat={selectedCat} />
      </main>
    </div>
  );
};

export default Home;
