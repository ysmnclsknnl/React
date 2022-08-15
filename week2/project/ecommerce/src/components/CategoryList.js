import React from "react";
import { useState, useEffect } from "react";
import Category from "./Category";

const CategoryList = ({ selectedCategory, onCategoryChange }) => {
  const [allCategories, SetAllCategories] = useState([]);

  const getCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    SetAllCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <nav>
      {allCategories.map((category, index) => (
        <Category
          catClicked={category === selectedCategory}
          onChange={onCategoryChange}
          key={index}
          text={category}
        ></Category>
      ))}
    </nav>
  );
};

export default CategoryList;
