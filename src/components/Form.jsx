import React, { Fragment, useContext, useState } from 'react';
import { CategoriesContext } from './../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {
  const [search, saveSearch] = useState({
    name: '',
    category: '',
  });

  const { categories } = useContext(CategoriesContext);
  const { searchRecipes } = useContext(RecipesContext);
  const { saveRequest } = useContext(RecipesContext);

  /** Function in order to read the content */
  const getRecipesData = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchRecipes(search);
        saveRequest(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search drinks by categories or ingredients</legend>
      </fieldset>
      <div className="row mt-10">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Search by ingredient"
            onChange={getRecipesData}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={getRecipesData}
          >
            <option>- Select Category -</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            name="name"
            className="btn btn-block btn-primary"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
