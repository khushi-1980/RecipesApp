import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./components/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);

  // Fetch recipes
  const searchRecipes = async (query) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      const data = await res.json();

      setRecipes(data.meals || []);
      setSelected(null);
    } catch (err) {
      console.error(err);
      setRecipes([]);
    }
  };

  return (
    <FavoritesProvider>
      <div className="container">

        <h1>🍔 Recipe Finder</h1>

        {/* HOME SCREEN */}
        {!selected && (
          <>
            <SearchBar onSearch={searchRecipes} />
            <RecipeList recipes={recipes} onSelect={setSelected} />
            <Favorites onSelect={setSelected} />
          </>
        )}
        {selected && (
          <>
            <button
              onClick={() => setSelected(null)}
              style={{ marginBottom: "20px" }}
            >
              ⬅ Back
            </button>

            <RecipeDetails recipe={selected} />
          </>
        )}

      </div>
    </FavoritesProvider>
  );
}

export default App;
