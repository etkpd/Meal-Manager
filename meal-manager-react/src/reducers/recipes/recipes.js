import { FETCH_RECIPES_SUCCESS } from "../../types";

const INITIAL_STATE = {
  recipes: []
}

export default function requestRecipes(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      return { ...state, recipes: action.data};
    default:
      return state;
  }
}