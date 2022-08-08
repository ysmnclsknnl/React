import "./App.css";
import { useState } from "react";
import allCategories from "./fake-data/all-categories";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [catClicked, setCatClicked] = useState("");

  const onCategoryChange = (categoryName) => {
    setCategories([categoryName]);
    setCatClicked(categoryName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <main>
        <CategoryList
          onCategoryChange={onCategoryChange}
          selectedCategories={allCategories}
          catClicked={catClicked}
        ></CategoryList>
        <ProductList selectedCategories={categories}></ProductList>
      </main>
    </div>
  );
}

export default App;
