import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 700,
    display: 'block',
  },
}));

const Recipe = ({ recipe }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { saveRecipeId, recipeDetails, saveRecipeDetails } = useContext(
    ModalContext
  );

  const showIngredients = (recipeDetails) => {
    let ingredients = [];
    for (let i = 0; i < 16; i++) {
      if (recipeDetails[`strIngredients${1}`]) {
      }
    }
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card border-dark">
        <h5 className="card-header">{recipe.strDrink}</h5>
        <div className="card-body">
          <img className="card-img-top" src={recipe.strDrinkThumb}></img>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              saveRecipeId(recipe.idDrink);
              handleOpen();
            }}
          >
            View Recipe
          </button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={() => {
              saveRecipeId(null);
              saveRecipeDetails([]);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2 id="simple-modal-title">{recipeDetails.strDrink}</h2>
              <h3 className="m4"> Instructions:</h3>
              <p id="simple-modal-description">
                {recipeDetails.strInstructions}
              </p>
              <img
                className="img-fluid mt-4"
                src={recipeDetails.strDrinkThumb}
              />
              <h3>Ingredients</h3>
              <ul>{showIngredients(recipeDetails)}</ul>
              <hr></hr>
              <p id="simple-modal-description">
                Categories: {recipeDetails.strCategory}
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
