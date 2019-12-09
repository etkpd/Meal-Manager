import { combineReducers } from 'redux';
import CriteriaReducer from './criteria/criteria'
import FiltersReducer from './filters/filters';
import ModalReducer from './modal/modal';
import RecipeReducer from './recipe/recipe';
import RecipesReducer from './recipes/recipes';

export default combineReducers({
  criteria: CriteriaReducer,
  filters: FiltersReducer,
  modal: ModalReducer,
  recipe: RecipeReducer,
  recipes: RecipesReducer
});
