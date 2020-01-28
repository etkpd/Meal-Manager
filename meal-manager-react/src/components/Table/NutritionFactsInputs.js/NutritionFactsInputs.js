import React from 'react';
//eslint-disable-next-line
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import stylesNutritionFactsInputs from './NutritionFactsInputs.module.scss'

const NutritionFactsInputs = (props) => {
  return (
    <Formik
      initialValues={{ 
        serving_qty: 1,
        serving_unit: 'oz'
      }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      } 
    >
      {({values})=>(
        <Form>
        <div id="nutritionFacts" title="Nutrition Facts">
          <div 
            className={`
              ${stylesNutritionFactsInputs.nutritionFacts}
              ${stylesNutritionFactsInputs.grid}
            `}
          >
              <h6 className={stylesNutritionFactsInputs.nutritionLabelTitle}>Nutrition Facts</h6>
              <Field
                placeholder="enter ingredient name"
                name="food_name"
                className={stylesNutritionFactsInputs}
              /> 
              <div 
                className={stylesNutritionFactsInputs.servingSize}            
              >
                <div>
                  <span>Serving size</span>
                  <Field
                    name="serving_qty"
                    className={stylesNutritionFactsInputs}
                  /> 
                  <Field
                    name="serving_unit"
                    className={stylesNutritionFactsInputs}
                    component="select"
                  >
                    <option value="cup">cup</option>
                    <option value="fl_oz">fl oz</option>
                    <option value="oz">oz</option>
                    <option value="piece">piece</option>
                    <option value="tbsp">tbsp</option>
                  </Field> 
                  <Field
                    name="serving_weight_grams"
                    className={stylesNutritionFactsInputs}
                  /> 
                  <span>{props.serving_qty} {props.serving_unit} ({props.serving_weight_grams}g)</span>
                </div>
                {props.ingredientForm
                  ? null
                  : (
                  <div>
                    <span>Number of Servings</span>
                    <span>8</span>
                  </div>  
                  )
                }
              </div>
              <div className={stylesNutritionFactsInputs.calorieInfo}>
                <div>
                  <span>Amount Per Serving</span>
                </div>
                <div>
                  <span>Calories</span>
                  <span>{props.nf_calories}</span>
                </div>
              </div>
              <div 
                className={stylesNutritionFactsInputs.nutritionInfo}            
              >
              <div className={`${stylesNutritionFactsInputs.textRight} ${stylesNutritionFactsInputs.fontBold}`}>
                % Daily Value*
              </div>
              <div>
                <span>Total Fat</span>
                <span>{props.nf_total_fat}g</span>
                <span>{Math.round((props.nf_total_fat/70)*100)}%</span>
                <div className={stylesNutritionFactsInputs.subFacts}>
                  <span>Saturated Fat</span>
                  <span>{props.nf_saturated_fat}g</span>
                  <span>{Math.round((props.nf_saturated_fat/300)*100)}%</span>
                </div>
                <div className={stylesNutritionFactsInputs.subFacts}>
                  <span>Trans Fat</span>
                  <span>{props.nf_trans_fat}g</span>
                </div>
                <div className={stylesNutritionFactsInputs.subFacts}>
                  <span>Polyunsaturated Fat</span>
                  <span>{props.nf_polyunsaturated_fat}g</span>
                </div>
                <div className={stylesNutritionFactsInputs.subFacts}>
                  <span>Monounsaturated Fat</span>
                  <span>{props.nf_monounsaturated_fat}g</span>
                </div>
              </div>
              <div>
                <span>Cholesterol</span>
                <span>{props.nf_cholesterol}mg</span>
                <span>{Math.round((props.nf_cholesterol/300)*100)}%</span>
              </div>
              <div>
                <span>Sodium</span>
                <span>{props.nf_sodium}mg</span>
                <span>{Math.round((props.nf_sodium/2500)*100)}%</span>
              </div>
              <div>
                  <span>Total Carbohydrate</span>
                  <span>{props.nf_total_carbohydrate}g</span>
                  <span>{Math.round((props.nf_total_carbohydrate/300)*100)}%</span>
                  <div className={stylesNutritionFactsInputs.subFacts}>
                    <span>Dietary Fiber</span>
                    <span>{props.nf_dietary_fiber}g</span>
                    <span>{Math.round((props.nf_dietary_fiber/25)*100)}%</span>
                  </div>
                  <div className={stylesNutritionFactsInputs.subFacts}>
                    <span>Total Sugars</span>
                    <span>{props.nf_sugars}g</span>
                  </div>
              </div>
              <div>
                  <span>Protein</span>
                  <span>{props.nf_protein}g</span>
                  <span>{Math.round((props.nf_protein/56)*100)}%</span>
                </div>
            </div>
              <div className={stylesNutritionFactsInputs.vitaminsMineralsInfo}>
                <div>
                  <span>Vitamin D</span>
                  <span>{props.nf_vitamin_d}mcg</span>
                  <span>{Math.round((props.nf_vitamin_d/550)*100)}%</span>
                </div>
                <div>
                  <span>Calcium</span>
                  <span>{props.nf_calcium}mg</span>
                  <span>{Math.round((props.nf_calcium/1000)*100)}%</span>
                </div>
                <div>
                  <span>Iron</span>
                  <span>{props.nf_iron}mg</span>
                  <span>{Math.round((props.nf_iron/8)*100)}%</span>
                </div>
                <div>
                  <span>Potassium</span>
                  <span>{props.nf_potassium}mg</span>
                  <span>{Math.round((props.nf_potassium/4000)*100)}%</span>
                </div>
              </div>
          </div>
        </div>

        </Form>
      )}
    </Formik>

  );
};

NutritionFactsInputs.defaultProps = {
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

export default NutritionFactsInputs;