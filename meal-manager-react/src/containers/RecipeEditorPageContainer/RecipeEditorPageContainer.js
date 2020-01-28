import React from "react";
import {connect} from "react-redux";
//import UnorderedList from "../../components/List/UnorderedList/UnorderedList"
//import IngredientConfirmationModal from "../../components/modals/IngredientConfirmationModal/IngredientConfirmationModal"
import stylesRecipeEditor from "./RecipeEditorPageContainer.module.scss"
import { 
  fetchIngredientDetails,
  clearIngredientAlert
} from "../../actions/RecipeActions"
import { 
  clearConfirmationOpenModal
} from "../../actions/ModalActions"
import {getRecipeNutritionDetails} from "../../reducers/recipe/recipe"
//eslint-disable-next-line
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import Input from '../../components/Input/Input/Input'
import InputTitle from "../../components/Input/InputTitle";
import InputTime from "../../components/Input/InputTime/InputTime";
import * as Button from "../../components/Buttons/Button";
import InputText from "../../components/Input/InputText/InputText";
import FileUpload from "../../components/FileUpload/FileUpload"
import NutritionFactsContainer from "../NutritionFactsContainer/NutritionFactsContainer";
import api from "../../api";
//import IngredientsSectionContainer from "./IngredientsSectionContainer/IngredientsSectionContainer";
import {
  Redirect,
} from "react-router-dom";


class RecipeEditorPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsMap: new Map(),
      productID: null
    }
  }
  
  componentDidMount() {
  } 
  
  handleIngredientBlur = (ingredient, index, operation) => {
    switch(operation){
      case 'add':
        if(ingredient !== this.state.ingredientsMap.get(index)){
          this.setState(prevState => {
            const ingredientsMap = new Map(prevState.ingredientsMap).set(index, ingredient)
            return {
              ...prevState,
              ingredientsMap
            }
          });
          this.props.fetchIngredientDetails(ingredient, index)
        }
        break;
      case 'remove':
        this.setState(prevState => {
          const ingredientsMap = new Map(prevState.ingredientsMap)
          ingredientsMap.delete(index)
          return {
            ...prevState,
            ingredientsMap
          }
        });
        this.props.fetchIngredientDetails(ingredient, index)
        break;
      default:

    }
  }

  handleSubmit = (values, ingredientsDetailed) => {
    if (this.props.ingredientsAlertsCleared){
      let ingredients = ingredientsDetailed.reduce(
          (ingredientsArray, ingredient) =>{
            ingredientsArray.push(ingredient.food_name)
            return ingredientsArray
          }
        , [])
      console.log(this.props.recipeNutritionDetails, 'editor page recipe details')
      values['recipeNutritionDetails'] = this.props.recipeNutritionDetails
      values['ingredient'] = ingredients
      values.ingredientsText.pop()
      values.directions.pop()
     
      console.log(values)
      api.recipe.AddRecipeToDatabase(values).then((res)=>{
        this.setState({productID: res.data})
      })
    } else {
      this.props.clearConfirmationOpenModal()
    }
  }
  
  render() {
    if(this.state.productID !== null){
      return <Redirect to={`/recipe/${this.state.productID}`}/>
    }
    return (
    <>
      <Formik
        initialValues={{
          recipeTitle: '',
          imageLink: null,
          imageLowResLink: null, 
          PrepTimeHour: 0,
          PrepTimeMinute: 0,
          CookTimeHour: 0,
          CookTimeMinute: 0,
          ingredientsText: [''], 
          directions: [''],
          numberOfServings: 1,
        }}
        onSubmit={values =>
          this.handleSubmit(values, this.props.ingredientsDetailed)
        } 
      >
        {({ values, setFieldValue, handleChange }) => (
          <Form>            
          <div className={stylesRecipeEditor.page}>
            <div className={stylesRecipeEditor.SectionAddRecipeButton}>
              <Button.Add
                label='Add Recipe'
                type='submit'
              /> 
            </div>
            <div className={stylesRecipeEditor.SectionTitle}>
              <Field
                placeholder="Insert Title Here"
                name="recipeTitle"
                className={stylesRecipeEditor.titleInput}
                component={InputTitle}
              />
            </div>

            <div className={stylesRecipeEditor.SectionUploadPhoto}>
              <Field 
                name="imageLink"
                namelowResImage='imageLowResLink'
                component={FileUpload}
              />
            </div>
            <div className={stylesRecipeEditor.SubSectionDuration}>
              <h4>
                Prep Time: 
                <Field 
                  name="PrepTimeHour" 
                  component={InputTime}
                  min="0"
                  max="24"
                />
                h
                <Field 
                  name="PrepTimeMinute" 
                  component={InputTime}
                  min="0"
                  max="59"
                />
                min
              </h4>

              <h4>
                Cook Time: 
                <Field 
                  name="CookTimeHour" 
                  component={InputTime}
                  min="0"
                  max="24"
                />
                h
                <Field 
                  name="CookTimeMinute" 
                  component={InputTime}
                  min="0"
                  max="59"
                />
                min
              </h4>
            </div>      
            <div className={stylesRecipeEditor.SectionSecond}>
              <div className={stylesRecipeEditor.SubSectionIngredients}>
                <h2>Ingredients</h2>
                <FieldArray
                  name="ingredientsText"
                  render={arrayHelpers => (
                    <>
                      {
                        values.ingredientsText.map((ingredientStored, index) => (
                          <Field 
                            key={index}
                            name={`ingredientsText.${index}`} 
                            onBlur={e=>{
                              const ingredient = e.currentTarget.value;
                              if(e.currentTarget.value!=="" && index === values.ingredientsText.length-1){
                                arrayHelpers.push('')
                                this.handleIngredientBlur(ingredient, index, 'add')
                              } else if(e.currentTarget.value === "" && index < values.ingredientsText.length-1){
                                arrayHelpers.remove(index)
                                this.handleIngredientBlur(ingredient, index, 'remove')
                              } else if(e.currentTarget.value!== this.state.ingredientsMap.get(index) && index < values.ingredientsText.length-1){
                                this.props.clearIngredientAlert(index)
                                this.handleIngredientBlur(ingredient, index, 'add')
                              }
                            }}
                            onKeyDown={(e)=>{
                              if ((e.charCode || e.keyCode) === 13){
                                console.log("enter key was pressed,", ingredientStored)
                                const ingredient = e.currentTarget.value;
                                e.preventDefault()
                                if(index === values.ingredientsText.length-1 && e.currentTarget.value !== ''){
                                  arrayHelpers.push('')
                                  this.handleIngredientBlur(ingredient, index, 'add')
                                } else if (e.currentTarget.value !== this.state.ingredientsMap.get(index) && index < values.ingredientsText.length-1){
                                  console.log("new item was entered")
                                  this.props.clearIngredientAlert(index)
                                  this.handleIngredientBlur(ingredient, index, 'add')
                                }
                              }
                            }}
                            indexOfListItem={index}
                            inputStyle='bullet-point'
                            component={Input}
                            placeholder="enter ingredient"
                          />
                        ))
                      }
                    </>
                  )}
                />
              </div>
            </div>
            <div className={stylesRecipeEditor.SectionDirections}>
              <h2>Directions</h2>     
                <FieldArray
                  name="directions"
                  render={arrayHelpers => (
                    <>
                      {
                        values.directions.map((direction, index, directions) => (
                          <Field
                            key={index} 
                            name={`directions.${index}`} 
                            onBlur={e=>{
                              if(e.currentTarget.value!=="" && index === values.directions.length-1){
                                arrayHelpers.push('')
                              } else if(e.currentTarget.value === "" && index < values.directions.length-1){
                                arrayHelpers.remove(index)
                              }
                            }}
                            onKeyDown={(e)=>{
                              if ((e.charCode || e.keyCode) === 13){
                                e.preventDefault()
                                if(index === values.directions.length-1 && e.currentTarget.value !== ''){
                                  arrayHelpers.push('')
                                }
                              }
                            }}
                            component={InputText}
                            indexOfListItem={index}
                            isLastItem={index===directions.length-1}
                            isFirstItem={index===0}
                            inputStyle='numbered'
                            placeholder="enter direction"
                          />
                        ))
                      }
                    </>
                  )}
                />
            </div>
        </div>

        <div className={stylesRecipeEditor.SectionNutritionLabel}>
          <NutritionFactsContainer
            food_name={values.recipeTitle}
            recipeTitleName="recipeTitle"
            numberOfServings={values.numberOfServings}
            numberOfServingsName="numberOfServings"
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
        </div>
          
          </Form>
        )}
      </Formik>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) =>({
  ingredientsAlertsCleared: state.recipe.alertConfirmIngredient.every((element)=>{return element===false}),
  ingredientsDetailed: state.recipe.recipeIngredientsDetailed,
  recipeNutritionDetails: getRecipeNutritionDetails(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIngredientDetails: (ingredient, index) => dispatch(fetchIngredientDetails(ingredient, index)), 
    clearIngredientAlert: (index) => dispatch(clearIngredientAlert(index)),
    clearConfirmationOpenModal: () => dispatch(clearConfirmationOpenModal())
  }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditorPageContainer);