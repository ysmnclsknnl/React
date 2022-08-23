import React, { useContext, useState, createContext } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  const addFavorites = (id) => {
    setFavorites([...favorites, id]);
  };
  const removeFavorites = (id) => {
    setFavorites(favorites.filter((item) => item !== id));
  };

  const isFavorite = (id) => favorites.includes(id);

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        setFavorites,
        addFavorites,
        removeFavorites,
        isFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
