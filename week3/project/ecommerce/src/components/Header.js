import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <header className="App-header">
      <h1>Products</h1>
      <nav className="header-navlink-container">
        <NavLink className="nav-link" to="/">
          Products
        </NavLink>
        <NavLink className="nav-link" to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
