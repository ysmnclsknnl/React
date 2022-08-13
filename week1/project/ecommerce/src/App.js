import "./App.css";
import { useState } from "react";

import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
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
        ></CategoryList>
        <ProductList selectedCategory={selectedCat}></ProductList>
      </main>
    </div>
  );
}

export default App;
