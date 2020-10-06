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
    width: 800,
    backgroundColor: theme.palette.background.paper,
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

  const { saveRecipeId, recipeDetails } = useContext(ModalContext);
  console.log(recipeDetails);

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
            open={open}
            onClose={() => {
              saveRecipeId(null);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              Name: {recipeDetails.strDrink}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
