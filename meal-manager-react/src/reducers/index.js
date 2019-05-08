import { combineReducers } from 'redux';
import  RecipesReducer from './recipes/recipes';
import  FiltersReducer from './filters/filters';

export default combineReducers({
  recipes: RecipesReducer,
  filters: FiltersReducer
});
