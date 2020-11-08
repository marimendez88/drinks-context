import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

/** Creating the provider
 * Here is where we have the functions and the state
 */
const ModalProvider = (props) => {
  //Creating the context State
  const [recipeId, saveRecipeId] = useState(null);
  const [recipeDetails, saveRecipeDetails] = useState([]);

  const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i`;

  const fetchApiData = async () => {
    const url = `${baseUrl}=${recipeId}`;
    const recipe = await axios.get(url);
    saveRecipeDetails(recipe.data.drinks[0]);
  };

  useEffect(() => {
    if (recipeId) {
      fetchApiData();
    }
  }, [recipeId]);

  /** The info which we need to pass to our children  */
  return (
    <ModalContext.Provider
      value={{
        saveRecipeId,
        recipeDetails,
        saveRecipeDetails,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
