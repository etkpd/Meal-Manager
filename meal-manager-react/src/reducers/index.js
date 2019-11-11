import { combineReducers } from 'redux';
import  RecipesReducer from './recipes/recipes';
import  FiltersReducer from './filters/filters';
import  CriteriaReducer from './criteria/criteria'

export default combineReducers({
  recipes: RecipesReducer,
  filters: FiltersReducer,
  criteria: CriteriaReducer
});
