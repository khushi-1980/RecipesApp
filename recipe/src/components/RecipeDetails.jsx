export default function RecipeDetails({ recipe, goBack }) {
  return (
    <div className="details">
      <button onClick={goBack}>⬅ Back</button>

      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} />

      <p>{recipe.strInstructions}</p>
    </div>
  );
}
