import React from "react";
import { useState, useEffect } from "react";
import Category from "./Category";
import fetchData from "../helpers/fetchData";
import Error from "./Error";
import Loading from "./Loading";
import API_URL from "../constants";

const CategoryList = ({ selectedCategory, onCategoryChange }) => {
  const [allCategories, SetAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCategories = async () => {
    setLoading(true);

    const categoryData = await fetchData(`${API_URL}/categories`);

    if (!categoryData) {
      setError(true);
      setLoading(false);
    }
    setLoading(false);
    SetAllCategories(categoryData);
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (error) {
    return <Error text="Categories can be loaded" />;
  }

  return (
    <>
      {loading && <Loading />}
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
    </>
  );
};

export default CategoryList;
