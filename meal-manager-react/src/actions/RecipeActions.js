import {
  ADD_INGREDIENT_DETAILS,
  EDIT_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS,
  CLEAR_ALERT_INGREDIENT, 
} from "../types";
import api from "../api";


export const fetchIngredientDetails = (ingredient, index) => async (dispatch, getState) => {
  try {
    let response =  ingredient !== "" ? await api.recipes.fetchIngredientDetailsV2(ingredient) : null
    if(index >= getState().recipe.recipeIngredientsDetailed.length) {
      dispatch({
        type: ADD_INGREDIENT_DETAILS,
        item: response.data,
        index: index
      });
    } else if(ingredient !==""){
      dispatch({
        type: EDIT_INGREDIENT_DETAILS,
        item: response.data,
        index: index
      });
    } else if(ingredient ===""){
      dispatch({
        type: REMOVE_INGREDIENT_DETAILS,
        index: index
      });
    }

  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => console.log(error));
    }
  } 
};     

export const clearIngredientAlert = (index) => (dispatch) => {
  dispatch({
    type: CLEAR_ALERT_INGREDIENT,
    index: index
  })
};     