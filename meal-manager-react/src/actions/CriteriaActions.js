import {
  EDIT_RECIPE_CRITERIA
} from "../types";

// edit recipe criteria
export const editRecipeCriteria = (newCriteria) => dispatch => {
  try {
  /* 
    dispatch({
      type: SET_LOADING
    }); */
    
    dispatch({
      type: EDIT_RECIPE_CRITERIA,
      payload: newCriteria  
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => console.log(error));
    }
  } 
}; 