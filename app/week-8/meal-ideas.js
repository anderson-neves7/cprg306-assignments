"use client";

import { useState, useEffect } from "react";

// This function fetches meal ideas from TheMealDB API based on the ingredient
async function fetchMealIdeas(ingredient) {
  const cleaned = ingredient.toLowerCase().trim();
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleaned}`
  );
  const data = await response.json();
  return data.meals || [];
}

// This component displays meal ideas based on the selected ingredient
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // When the ingredient changes, fetch new meal ideas
  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  return (
    <div className="p-4 bg-orange-50 rounded-lg w-full md:w-1/2">
      <h2 className="text-xl font-bold mb-2">Meal Ideas for: {ingredient || "..."}</h2>
      {meals.length > 0 ? (
        <ul className="grip gap-3">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border p-2 rounded bg-white">
              <p className="font-semibold">{meal.strMeal}</p>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full max-w-xs rounded mt-2"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No meals found or select an item.</p>
      )}
    </div>
  );
}