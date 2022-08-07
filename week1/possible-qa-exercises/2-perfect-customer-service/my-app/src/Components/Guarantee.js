import React from "react";

const Guarantee = ({ image, title, description }) => {
  return (
    <div className="guarantee">
      <img src={image} alt={title}></img>
      <h3> {title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
