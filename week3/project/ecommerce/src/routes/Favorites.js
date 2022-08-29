import React from "react";
import { useGlobalContext } from "../GlobalContext";

import FavoriteProduct from "../components/FavoriteProduct";

const Favorites = () => {
  const { favorites } = useGlobalContext();

  if (favorites.length === 0) {
    return (
      <div>
        <h3> No Favorite Product is Found</h3>
      </div>
    );
  }
  return (
    <div className="container flex-row">
      {favorites.map((productId) => (
        <FavoriteProduct key={productId} id={productId} />
      ))}
    </div>
  );
};

export default Favorites;
