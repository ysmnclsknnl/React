import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center">
      <h2>Page is Not Found</h2>
      <Link to="/">Please Click Here to Go to The HomePage</Link>
    </div>
  );
};

export default NotFound;
