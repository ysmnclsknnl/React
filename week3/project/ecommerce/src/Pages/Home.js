import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import { GlobalProvider } from "../GlobalContext";

const Home = () => {
  const [selectedCat, setSelectedCat] = useState("");

  const onCategoryChange = (categoryName) => {
    setSelectedCat(categoryName);
  };

  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header flex-row">
          <h1>Products</h1>
          <nav>
            <NavLink to="/">Products</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
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
    </GlobalProvider>
  );
};

export default Home;
