import { FETCH_FILTERS_SUCCESS } from "../../types";

const INITIAL_STATE = {
  filters: []
}

export default function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case FETCH_FILTERS_SUCCESS:
      return { ...state, filters: action.data};
    default:
      return state;
  }
}