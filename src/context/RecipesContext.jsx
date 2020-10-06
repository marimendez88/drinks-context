import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

/** Creating the context reference */
export const RecipesContext = createContext();

/** Creating the provider
 * Here is where we have the functions and the state
 */
const RecipesProvider = (props) => {
  //Creating the context State
  const [recipes, saveRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: '',
    category: '',
  });
  const [request, saveRequest] = useState(false);

  /** execute the API request*/
  useEffect(() => {
    if (request) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
        const recipes = await axios.get(url);
        saveRecipes(recipes.data.drinks);
      };
      getRecipes();
    }
  }, [search]);

  /** The info which we need to pass to our children  */
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        searchRecipes,
        saveRequest,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
