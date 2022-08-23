import React from "react";
import { useGlobalContext } from "../GlobalContext";

import FavoriteProducts from "../components/FavoriteProducts";

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
    <div>
      {favorites.map((productId) => (
        <FavoriteProducts key={productId} id={productId} />
      ))}
    </div>
  );
};

export default Favorites;
