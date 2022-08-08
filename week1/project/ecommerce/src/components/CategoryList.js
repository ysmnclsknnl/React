import React from "react";
import Category from "./Category";
import { useState } from "react";

const CategoryList = ({ selectedCategories, onCategoryChange, catClicked }) => {
  return (
    <nav>
      {selectedCategories.map((category, index) => (
        <Category
          catClicked={catClicked}
          onChange={onCategoryChange}
          key={index}
          text={category}
        ></Category>
      ))}
    </nav>
  );
};

export default CategoryList;
