import React from "react";
import { useState, useEffect } from "react";
import Category from "./Category";
import Error from "./Error";
import Loading from "./Loading";
import API_URL from "../constants";
import fetchData from "../helpers/fetchData";

const CategoryList = ({ selectedCategory, onCategoryChange }) => {
  const [allCategories, SetAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(`${API_URL}/categories`, SetAllCategories, setLoading, setError);
  }, []);

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
