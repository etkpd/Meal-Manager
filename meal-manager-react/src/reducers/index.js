import { combineReducers } from 'redux';
import  requestRecipes from './recipes/recipes';
import  requestFilters from './filters/filters';

export default combineReducers({
  requestRecipes,
  requestFilters
});
