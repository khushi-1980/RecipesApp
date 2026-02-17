import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState("");

  // Load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favs")) || [];
    setFavorites(saved);
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    setFavorites((prev) => {
      const exists = prev.some((r) => r.idMeal === recipe.idMeal);

      if (!exists) {
        setMessage("✅ Added to favorites");
        setTimeout(() => setMessage(""), 2000);
        return [...prev, recipe];
      }

      return prev;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => {
      setMessage("❌ Removed from favorites");
      setTimeout(() => setMessage(""), 2000);
      return prev.filter((r) => r.idMeal !== id);
    });
  };

  return (
    <FavContext.Provider
      value={{ favorites, addFavorite, removeFavorite, message }}
    >
      {children}
    </FavContext.Provider>
  );
}

export const useFavorites = () => useContext(FavContext);
