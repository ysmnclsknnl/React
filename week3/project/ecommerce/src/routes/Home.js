import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState("");

  const onCategoryChange = (categoryName) => {
    setSelectedCat(categoryName);
  };

  return (
    <main>
      <CategoryList
        onCategoryChange={onCategoryChange}
        selectedCategory={selectedCat}
      />
      <ProductList selectedCat={selectedCat} />
    </main>
  );
};

export default Home;
