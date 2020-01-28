import { 
  ADD_INGREDIENT_DETAILS,
  EDIT_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS,
  CLEAR_ALERT_INGREDIENT
} from "../../types";
import {createSelector} from 'reselect';

const INITIAL_STATE = {
  recipeIngredientsDetailed: [],
  alertConfirmIngredient: []
}

export default function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS:
      return { 
        ...state,
        recipeIngredientsDetailed: [...state.recipeIngredientsDetailed, action.item],
        alertConfirmIngredient: [...state.alertConfirmIngredient, true]
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
        }),
        alertConfirmIngredient: state.alertConfirmIngredient.map((item, index) => {
          if (index !== action.index) {
            return item
          }
          return true
        })
      };
    case REMOVE_INGREDIENT_DETAILS:
      return { 
        ...state,
        recipeIngredientsDetailed: state.recipeIngredientsDetailed.filter((item, index) => index !== action.index), 
        alertConfirmIngredient: state.alertConfirmIngredient.filter((item, index) => index !== action.index) 
      };
    case CLEAR_ALERT_INGREDIENT:
      return { 
        ...state,
        alertConfirmIngredient: state.alertConfirmIngredient.map((item, index) => {
          if (index !== action.index) {
            return item
          }
          return false
        }) 
      };
    default:
      return state;
  }
}


const getRecipeNutritionObject = (state) => {
  const ingredientsDetailedArray = state.recipe.recipeIngredientsDetailed
  console.log(ingredientsDetailedArray)
  let nutritionObjectAnother = ingredientsDetailedArray.reduce((nutritionObject, ingredient)=>{
      let {
        serving_weight_grams = 0,
        nf_calories = 0,
        nf_total_fat = 0,
        nf_saturated_fat = 0,
        nf_trans_fat = 0,
        nf_polyunsaturated_fat = 0,
        nf_monounsaturated_fat = 0,
        nf_cholesterol = 0,
        nf_sodium = 0,
        nf_total_carbohydrate = 0,
        nf_dietary_fiber = 0,
        nf_sugars = 0,
        nf_protein = 0,
        nf_vitamin_d = 0,
        nf_calcium = 0,
        nf_iron = 0,
        nf_potassium = 0,
      } = ingredient

      nutritionObject['serving_weight_grams'] = nutritionObject.serving_weight_grams + serving_weight_grams
      nutritionObject['nf_calories'] = nutritionObject.nf_calories + nf_calories
      nutritionObject['nf_total_fat'] = nutritionObject.nf_total_fat + nf_total_fat
      nutritionObject['nf_saturated_fat'] = nutritionObject.nf_saturated_fat + nf_saturated_fat
      nutritionObject['nf_trans_fat'] = nutritionObject.nf_trans_fat + nf_trans_fat
      nutritionObject['nf_polyunsaturated_fat'] = nutritionObject.nf_polyunsaturated_fat + nf_polyunsaturated_fat
      nutritionObject['nf_monounsaturated_fat'] = nutritionObject.nf_monounsaturated_fat + nf_monounsaturated_fat
      nutritionObject['nf_cholesterol'] = nutritionObject.nf_cholesterol + nf_cholesterol
      nutritionObject['nf_sodium'] = nutritionObject.nf_sodium + nf_sodium
      nutritionObject['nf_total_carbohydrate'] = nutritionObject.nf_total_carbohydrate + nf_total_carbohydrate
      nutritionObject['nf_dietary_fiber'] = nutritionObject.nf_dietary_fiber + nf_dietary_fiber
      nutritionObject['nf_sugars'] = nutritionObject.nf_sugars + nf_sugars
      nutritionObject['nf_protein'] = nutritionObject.nf_protein + nf_protein
      nutritionObject['nf_vitamin_d'] = nutritionObject.nf_vitamin_d + nf_vitamin_d
      nutritionObject['nf_calcium'] = nutritionObject.nf_calcium + nf_calcium
      nutritionObject['nf_iron'] = nutritionObject.nf_iron + nf_iron
      nutritionObject['nf_potassium'] = nutritionObject.nf_potassium + nf_potassium
      return nutritionObject
    }
   ,
    {
      serving_weight_grams: 0,
      nf_calories: 0,
      nf_total_fat: 0,
      nf_saturated_fat: 0,
      nf_trans_fat: 0,
      nf_polyunsaturated_fat: 0,
      nf_monounsaturated_fat: 0,
      nf_cholesterol: 0,
      nf_sodium: 0,
      nf_total_carbohydrate: 0,
      nf_dietary_fiber: 0,
      nf_sugars: 0,
      nf_protein: 0,
      nf_vitamin_d: 0,
      nf_calcium: 0,
      nf_iron: 0,
      nf_potassium: 0,
    }
  )
  return nutritionObjectAnother
}

export const getRecipeNutritionDetails = createSelector(
  getRecipeNutritionObject,
  (nutritionObjectOO)=>{ return nutritionObjectOO}
)