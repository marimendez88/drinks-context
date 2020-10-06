import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

/** Creating the context reference */
export const CategoriesContext = createContext();

/** Creating the provider
 * Here is where we have the functions and the state
 */
const CategoriesProvider = (props) => {
  //Creating the context State
  const [categories, saveCategories] = useState([]);

  /** execute the API request*/
  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categories = await axios.get(url);
      saveCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  /** The info which we need to pass to our children  */
  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
