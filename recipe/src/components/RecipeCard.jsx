import { useFavorites } from "../context/FavoritesContext";

export default function RecipeCard({ recipe, onSelect }) {
  const { addFavorite } = useFavorites();

  return (
    <div className="card">
      <img src={recipe.strMealThumb} />
      <h3>{recipe.strMeal}</h3>

      <button onClick={() => onSelect(recipe)}>View</button>
      <button onClick={() => addFavorite(recipe)}>❤️</button>
    </div>
  );
}
