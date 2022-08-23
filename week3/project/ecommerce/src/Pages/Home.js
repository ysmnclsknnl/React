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
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
        <nav>
          <NavLink className="nav-link" to="/">
            Products
          </NavLink>
          <NavLink className="nav-link" to="/favorites">
            Favorites
          </NavLink>
        </nav>
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
