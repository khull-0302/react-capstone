import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success("Added to cart 🛒");
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from cart 🛒");
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const increaseQuantity = (id) => {
    setFavorites((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setFavorites((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };
  const clearCart = () => {
    setFavorites([]);
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
        clearCart,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesProvider;
