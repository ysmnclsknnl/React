import React from "react";

const Category = ({ text, onChange, catClicked }) => {
  return (
    <button
      value={text}
      className={`category-btn ${catClicked ? "clicked" : ""}`}
      onClick={(e) => {
        onChange(e.target.value);
      }}
    >
      {text}
    </button>
  );
};

export default Category;
