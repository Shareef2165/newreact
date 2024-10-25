import React, { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const RecipeItem = ({ recipe }) => {
  const { deleteRecipe, editRecipe } = useContext(RecipeContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newRecipe, setNewRecipe] = useState(recipe);

  const handleEdit = () => {
    editRecipe(newRecipe);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={newRecipe.name} 
            onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })} 
          />
          <textarea 
            value={newRecipe.ingredients}
            onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{recipe.name}</h3>
          <p>{recipe.ingredients}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RecipeItem;
