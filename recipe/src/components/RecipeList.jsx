import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, onSelect }) {
  return (
    <div className="grid">
      {recipes.map((r) => (
        <RecipeCard key={r.idMeal} recipe={r} onSelect={onSelect} />
      ))}
    </div>
  );
}
