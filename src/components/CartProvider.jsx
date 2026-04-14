import { createContext, useState, useEffect, useContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites((prev) => [...prev, product]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesProvider;
