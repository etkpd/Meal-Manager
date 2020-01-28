import React from 'react';
import stylesNutritionFacts from './NutritionFactsRecipe.module.scss'

const NutritionFactsRecipe = (props) => {
  return (
    <div id="nutritionFacts" title="Nutrition Facts">
      <div 
        className={`
          ${stylesNutritionFacts.nutritionFacts}
          ${stylesNutritionFacts.grid}
        `}
      >
          <h6 className={stylesNutritionFacts.nutritionLabelTitle}>Nutrition Facts</h6>
          <h6 className={stylesNutritionFacts.recipeTitle}>{props.title}</h6> 
          <div 
            className={stylesNutritionFacts.servingSize}            
          >
            <div>
              <span>{Math.round(props.total_servings)} servings</span>
            </div>
            <div>
              <span>Serving size</span>
              <span>{Math.round(props.serving_weight_grams/props.total_servings)}g</span>
            </div>
          </div>
          <div className={stylesNutritionFacts.calorieInfo}>
            <div>
              <span>Amount Per Serving</span>
            </div>
            <div>
              <span>Calories</span>
              <span>{Math.round(props.calories_per_serving)}</span>
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
            <span>{Math.round(props.nf_total_fat)}g</span>
            <span>{Math.round(((props.nf_total_fat)/70)*100)}%</span>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Saturated Fat</span>
              <span>{Math.round(props.nf_saturated_fat)}g</span>
              <span>{Math.round(((props.nf_saturated_fat)/300)*100)}%</span>
            </div>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Trans Fat</span>
              <span>{Math.round(props.nf_trans_fat)}g</span>
            </div>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Polyunsaturated Fat</span>
              <span>{Math.round(props.nf_polyunsaturated_fat)}g</span>
            </div>
            <div className={stylesNutritionFacts.subFacts}>
              <span>Monounsaturated Fat</span>
              <span>{Math.round(props.nf_monounsaturated_fat)}g</span>
            </div>
          </div>
          <div>
            <span>Cholesterol</span>
            <span>{Math.round(props.nf_cholesterol)}mg</span>
            <span>{Math.round(((props.nf_cholesterol)/300)*100)}%</span>
          </div>
          <div>
            <span>Sodium</span>
            <span>{Math.round(props.nf_sodium)}mg</span>
            <span>{Math.round(((props.nf_sodium)/2500)*100)}%</span>
          </div>
          <div>
              <span>Total Carbohydrate</span>
              <span>{Math.round(props.nf_total_carbohydrate)}g</span>
              <span>{Math.round(((props.nf_total_carbohydrate)/300)*100)}%</span>
              <div className={stylesNutritionFacts.subFacts}>
                <span>Dietary Fiber</span>
                <span>{Math.round(props.nf_dietary_fiber)}g</span>
                <span>{Math.round(((props.nf_dietary_fiber)/25)*100)}%</span>
              </div>
              <div className={stylesNutritionFacts.subFacts}>
                <span>Total Sugars</span>
                <span>{Math.round(props.nf_sugars)}g</span>
              </div>
          </div>
          <div>
              <span>Protein</span>
              <span>{Math.round(props.nf_protein)}g</span>
              <span>{Math.round(((props.nf_protein)/56)*100)}%</span>
            </div>
        </div>
          <div className={stylesNutritionFacts.vitaminsMineralsInfo}>
            <div>
              <span>Vitamin D</span>
              <span>{Math.round(props.nf_vitamin_d)}mcg</span>
              <span>{Math.round(((props.nf_vitamin_d)/550)*100)}%</span>
            </div>
            <div>
              <span>Calcium</span>
              <span>{Math.round(props.nf_calcium)}mg</span>
              <span>{Math.round(((props.nf_calcium)/1000)*100)}%</span>
            </div>
            <div>
              <span>Iron</span>
              <span>{Math.round(props.nf_iron)}mg</span>
              <span>{Math.round(((props.nf_iron)/8)*100)}%</span>
            </div>
            <div>
              <span>Potassium</span>
              <span>{Math.round(props.nf_potassium)}mg</span>
              <span>{Math.round(((props.nf_potassium)/4000)*100)}%</span>
            </div>
          </div>
      </div>
    </div>
  );
};

NutritionFactsRecipe.defaultProps = {
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

export default NutritionFactsRecipe;