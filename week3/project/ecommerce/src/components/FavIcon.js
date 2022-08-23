import React, { useState, useEffect } from "react";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { useGlobalContext } from "../GlobalContext";

const FavIcon = ({ id }) => {
  const { addFavorites, removeFavorites, isFavorite } = useGlobalContext();
  const [favorite, setFavorite] = useState(() => isFavorite(id));

  useEffect(() => {
    if (favorite) {
      addFavorites(id);
    } else {
      removeFavorites(id);
    }
  }, [favorite]);

  return (
    <img
      src={favorite ? heartSolid : heartRegular}
      onClick={() => setFavorite(!favorite)}
      className="fav-icon"
      alt="fav-icon"
    ></img>
  );
};

export default FavIcon;
