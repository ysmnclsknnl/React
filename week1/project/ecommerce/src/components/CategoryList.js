import React from "react";
import allCategories from "../fake-data/all-categories";
import Category from "./Category";

const CategoryList = ({ selectedCategory, onCategoryChange }) => {
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
