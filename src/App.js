import React, { Fragment } from 'react';
/** Importing Components */
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';

/** Importing Context */
import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <RecipesProvider>
      <CategoriesProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipesList />
          </div>
        </ModalProvider>
      </CategoriesProvider>
    </RecipesProvider>
  );
}

export default App;
