import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length ? (
        recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default RecipeList;
