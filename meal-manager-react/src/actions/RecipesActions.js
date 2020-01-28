import {FETCH_RECIPES_SUCCESS} from "../types";
import { history } from "../index";
import {urlGenerator} from "../utils/urlGenerator"
import api from "../api";

const recipesFetched = data => ({
  type: FETCH_RECIPES_SUCCESS,
  data
});

export const fetchRecipes = () => dispatch =>
  api.recipes
    .fetchRecipesFromDb().then(recipes => {
      console.log(recipes)
      dispatch(recipesFetched(recipes));
    });

export const fetchFilteredRecipes = () => async (dispatch, getState) => {
  const urlString = urlGenerator(getState().criteria)
  
  history.push(`/recipes?${urlString}`)

  const recipes = await api.recipes.fetchFilteredRecipes(urlString);

  dispatch(recipesFetched(recipes))
}