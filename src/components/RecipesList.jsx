import React, { useContext, Fragment } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Recipe from './Recipe';

const RecipesList = () => {
  /** Extracting the recipes */
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <Recipe key={recipe.idDrink} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
