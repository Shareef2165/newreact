import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const RecipeForm = () => {
  const { addRecipe } = useContext(RecipeContext);
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(newRecipe);
    setNewRecipe({ name: '', ingredients: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input 
        type="text" 
        placeholder="Recipe Name" 
        value={newRecipe.name}
        onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
      />
      <textarea 
        placeholder="Ingredients"
        value={newRecipe.ingredients}
        onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
