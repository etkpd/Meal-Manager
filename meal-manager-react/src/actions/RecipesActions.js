import {FETCH_RECIPES_SUCCESS} from "../types";
import api from "../api";

const recipesFetched = data => ({
  type: FETCH_RECIPES_SUCCESS,
  data
});

export const fetchRecipes = () => dispatch =>
  api.recipes
    .fetchAll().then(recipes => {
      dispatch(recipesFetched(recipes));
    });