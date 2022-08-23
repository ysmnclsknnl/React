import React from "react";
import { useState, useEffect } from "react";
import Category from "./Category";
import Error from "./Error";
import Loading from "./Loading";
import API_URL from "../constants";

import { useFetch } from "../hooks/useFetch";

const CategoryList = ({ selectedCategory, onCategoryChange }) => {
  const {
    loading,
    error,
    data: allCategories,
  } = useFetch(`${API_URL}/categories`);

  if (error) {
    return <Error text="Categories can not be loaded" />;
  }

  return (
    <>
      {loading && <Loading />}
      {allCategories && (
        <nav className="categories">
          {allCategories.map((category, index) => (
            <Category
              catClicked={category === selectedCategory}
              onChange={onCategoryChange}
              key={index}
              text={category}
            ></Category>
          ))}
        </nav>
      )}
    </>
  );
};

export default CategoryList;
