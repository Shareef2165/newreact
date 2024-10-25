import React from 'react';
import './App.css'
import { RecipeProvider } from './context/RecipeContext';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <RecipeProvider>
      <div className="App">
        <h1>Recipe Book</h1>
        <RecipeForm />
        <RecipeList />
      </div>
    </RecipeProvider>
  );
}

export default App;
