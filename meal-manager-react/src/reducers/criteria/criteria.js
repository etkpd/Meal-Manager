import {
  EDIT_RECIPE_CRITERIA
} from "../../types";

const INITIAL_STATE = {
   spice: {},
   beef: {},
   chicken: {},
   grain: {},
   vegetable: {},
   fruit: {},
   dairy: {},
   fat: {},
   legume: {}
}

export default function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case EDIT_RECIPE_CRITERIA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}