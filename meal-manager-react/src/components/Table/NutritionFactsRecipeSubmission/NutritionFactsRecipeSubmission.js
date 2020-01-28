import React from 'react';
import stylesNutritionFacts from './NutritionFactsRecipeSubmission.module.scss'

const NutritionFactsRecipeSubmission = (props) => {
  return (
    <div id="nutritionFacts" title="Nutrition Facts">
      <div 
        className={`
          ${stylesNutritionFacts.nutritionFacts}
          ${stylesNutritionFacts.grid}
        `}
      >
          <h6 className={stylesNutritionFacts.nutritionLabelTitle}>Nutrition Facts</h6>
          <h6 className={stylesNutritionFacts.recipeTitle}>{props.food_name}</h6> 
          <div 
            className={stylesNutritionFacts.servingSize}            
          >
            {props.ingredientForm
              ? <div>
                  <span>
                    <input 
                      type="number" 
                      id="numberOfServings"
                      className={stylesNutritionFacts.servingSizeInput}
                      onChange={props.handleChange}
                      value={props.numberOfServings}
                      min="1">
                    </input> 
                  servings
                  </span>
                </div>  
              : <div>
                  <span>8 servings per container</span>
                </div>  
            }
            <div>
              {props.isRecipe
                ? <>
                    <span>Serving size</span>
                    <span>{Math.round(props.serving_weight_grams/props.numberOfServings)}g</span>
                  </>
                : <>
                    <span>Serving size</span>
                    <span>{props.serving_qty} {props.serving_unit} ({props.serving_weight_grams}g)</span>
                  </>
              }
            </div>
          </div>
          <div className={stylesNutritionFacts.calorieInfo}>
            <div>
              <span>Amount Per Serving</span>
            </div>
            <div>
              <span>Calories</span>
              <span>{Math.round(props.nf_calories/props.numberOfServings)}</span> 
            </div>
          </div>
          <div 
            className={stylesNutritionFacts.nutritionInfo}            
          >
          <div className={`${stylesNutritionFacts.textRight} ${stylesNutritionFacts.fontBold}`}>
            % Daily Value*
          </div>
          <div>
            <span>Total Fat</span>
            <span>{Math.round(props.nf_total_fat/props.numberOfServings)}g</span>
            <span>{Math.round(((props.nf_total_fat/props.numberOfServings)/70)*100)}%</span>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Saturated Fat</span>
              <span>{Math.round(props.nf_saturated_fat/props.numberOfServings)}g</span>
              <span>{Math.round(((props.nf_saturated_fat/props.numberOfServings)/300)*100)}%</span>
            </div>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Trans Fat</span>
              <span>{Math.round(props.nf_trans_fat/props.numberOfServings)}g</span>
            </div>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Polyunsaturated Fat</span>
              <span>{Math.round(props.nf_polyunsaturated_fat/props.numberOfServings)}g</span>
            </div>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Monounsaturated Fat</span>
              <span>{Math.round(props.nf_monounsaturated_fat/props.numberOfServings)}g</span>
            </div>
          </div>
          <div>
            <span>Cholesterol</span>
            <span>{Math.round(props.nf_cholesterol/props.numberOfServings)}mg</span>
            <span>{Math.round(((props.nf_cholesterol/props.numberOfServings)/300)*100)}%</span>
          </div>
          <div>
            <span>Sodium</span>
            <span>{Math.round(props.nf_sodium/props.numberOfServings)}mg</span>
            <span>{Math.round(((props.nf_sodium/props.numberOfServings)/2500)*100)}%</span>
          </div>
          <div>
              <span>Total Carbohydrate</span>
              <span>{Math.round(props.nf_total_carbohydrate/props.numberOfServings)}g</span>
              <span>{Math.round(((props.nf_total_carbohydrate/props.numberOfServings)/300)*100).toFixed(0)}%</span>
              <div className={stylesNutritionFacts.subFacts}>
                <span>Dietary Fiber</span>
                <span>{Math.round(props.nf_dietary_fiber/props.numberOfServings)}g</span>
                <span>{Math.round(((props.nf_dietary_fiber/props.numberOfServings)/25)*100).toFixed(0)}%</span>
              </div>
              <div className={stylesNutritionFacts.subFacts}>
                <span>Total Sugars</span>
                <span>{Math.round(props.nf_sugars/props.numberOfServings)}g</span>
              </div>
          </div>
          <div>
              <span>Protein</span>
              <span>{Math.round(props.nf_protein/props.numberOfServings)}g</span>
              <span>{Math.round(((props.nf_protein/props.numberOfServings)/56)*100).toFixed(0)}%</span>
            </div>
        </div>
          <div className={stylesNutritionFacts.vitaminsMineralsInfo}>
            <div>
              <span>Vitamin D</span>
              <span>{Math.round(props.nf_vitamin_d/props.numberOfServings)}mcg</span>
              <span>{Math.round(((props.nf_vitamin_d/props.numberOfServings)/550)*100).toFixed(0)}%</span>
            </div>
            <div>
              <span>Calcium</span>
              <span>{Math.round(props.nf_calcium/props.numberOfServings)}mg</span>
              <span>{Math.round(((props.nf_calcium/props.numberOfServings)/1000)*100).toFixed(0)}%</span>
            </div>
            <div>
              <span>Iron</span>
              <span>{Math.round(props.nf_iron/props.numberOfServings)}mg</span>
              <span>{Math.round(((props.nf_iron/props.numberOfServings)/8)*100).toFixed(0)}%</span>
            </div>
            <div>
              <span>Potassium</span>
              <span>{Math.round(props.nf_potassium/props.numberOfServings)}mg</span>
              <span>{Math.round(((props.nf_potassium/props.numberOfServings)/4000)*100).toFixed(0)}%</span>
            </div>
          </div>
      </div>
    </div>
  );
};

NutritionFactsRecipeSubmission.defaultProps = {
  food_name: 'artichoke',
  ingredientForm: true,
  serving_qty: 120,
  serving_unit: 'oz',
  serving_weight_grams: 52,
  nf_calories: 150,
  nf_total_fat:0.41,
  nf_saturated_fat:0.9,
  nf_trans_fat:0,
  nf_polyunsaturated_fat:0.2,
  nf_monounsaturated_fat:0,
  nf_cholesterol:0,
  nf_sodium:72,
  nf_total_carbohydrate:14.34,
  nf_dietary_fiber:6.84,
  nf_sugars:1.19,
  nf_protein:3.47,
  nf_vitamin_d: 0,
  nf_calcium:25.2,
  nf_iron:0.732,
  nf_potassium:343,
}

export default NutritionFactsRecipeSubmission;