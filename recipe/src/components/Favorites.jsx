import { useFavorites } from "../context/FavoritesContext";

export default function Favorites({ onSelect }) {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet ❤️</p>;
  }

  return (
    <div>
      <h2>⭐ Favorites</h2>

      <div className="grid">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="card">
            <img src={recipe.strMealThumb} />
            <h3>{recipe.strMeal}</h3>

            <button onClick={() => onSelect(recipe)}>View</button>
            <button onClick={() => removeFavorite(recipe.idMeal)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
