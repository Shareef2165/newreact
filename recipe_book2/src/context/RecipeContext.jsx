import React, { createContext, useState } from 'react';


export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Pasta', ingredients: 'Noodles, Tomato Sauce, Cheese' },
    { id: 2, name: 'Salad', ingredients: 'Lettuce, Tomato, Cucumber, Dressing' }
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: Date.now() }]);
  };

  const editRecipe = (updatedRecipe) => {
    setRecipes(recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(r => r.id !== id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, editRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
