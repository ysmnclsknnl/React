import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { useGlobalContext } from "../GlobalContext";

const FavIcon = ({ id }) => {
  const { addFavorites, removeFavorites, isFavorite } = useGlobalContext();

  const handleFavorite = (id) => {
    if (!isFavorite(id)) {
      addFavorites(id);
    } else {
      removeFavorites(id);
    }
  };

  return (
    <img
      src={isFavorite(id) ? heartSolid : heartRegular}
      onClick={() => handleFavorite(id)}
      className="fav-icon"
      alt="fav-icon"
    ></img>
  );
};

export default FavIcon;
