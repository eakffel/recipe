import React from "react";
import './App.css';
// Correct for ES Modules
import Recard from './comp/Recard.js';

const recipes = [
  {
    title: "Spaghetti Bolognese",
    image: "https://via.placeholder.com/350x200?text=Spaghetti+Bolognese",
    prepTime: 30,
    type: "Italian",
    nutrition: "400 kcal per serving",
    ingredients: [
      "200g Spaghetti",
      "100g Ground beef",
      "1 Onion",
      "2 Tomatoes",
      "Garlic",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: "Boil the spaghetti. Sauté the beef and vegetables in olive oil, then mix with pasta and serve."
  },
  {
    title: "Pancakes",
    image: "https://via.placeholder.com/350x200?text=Pancakes",
    prepTime: 15,
    type: "Breakfast",
    nutrition: "250 kcal per serving",
    ingredients: [
      "1 cup Flour",
      "2 Eggs",
      "1 cup Milk",
      "1 tbsp Sugar",
      "Butter for frying"
    ],
    instructions: "Mix ingredients, pour batter onto a hot pan, and cook until golden on both sides."
  }
];

const App = () => {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, title) => (
        <Recard
          key={title}
          title={recipe.title}
          image={recipe.image}
          prepTime={recipe.prepTime}
          type={recipe.type}
          nutrition={recipe.nutrition}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </div>
  );
};

export default App;
