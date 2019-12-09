import { 
  ADD_INGREDIENT_DETAILS,
  EDIT_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS
} from "../../types";

const INITIAL_STATE = {
  recipeIngredientsDetailed: [],
  alertConfirmIngredient: {}
}

export default function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS:
      return { 
        ...state,
        recipeIngredientsDetailed: [...state.recipeIngredientsDetailed, action.item]
      };
    case EDIT_INGREDIENT_DETAILS:
      return { 
        ...state,
        recipeIngredientsDetailed: state.recipeIngredientsDetailed.map((item, index) => {
          if (index !== action.index) {
            return item
          }
          return {
            ...item,
            ...action.item
          }
        }) 
      };
    case REMOVE_INGREDIENT_DETAILS:
      return { 
        ...state,
        recipeIngredientsDetailed: state.recipeIngredientsDetailed.filter((item, index) => index !== action.index) 
      };
    default:
      return state;
  }
}