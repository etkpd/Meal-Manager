import React from "react";
import {connect} from "react-redux";
import UnorderedList from "../../components/List/UnorderedList/UnorderedList"
//import IngredientConfirmationModal from "../../components/modals/IngredientConfirmationModal/IngredientConfirmationModal"
import stylesRecipeEditor from "./RecipeEditorPageContainer.module.scss"
import { fetchIngredientDetails } from "../../actions/RecipeActions"
//eslint-disable-next-line
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import Input from '../../components/Input/Input'
//import IngredientsSectionContainer from "./IngredientsSectionContainer/IngredientsSectionContainer";



class RecipeEditorPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeTitle: '',
      directionsList: [],
      ingredientsMap: new Map(),
      alertIngredients: new Set([]),
      ingredientsArray: new Array([])
    }
  }
  
  componentDidMount() {
  } 
  
  onChange = e =>{
    console.log(e.target.name)
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }
  ingredientWasSubmitted = async (ingredient, index)=>{
    if(index>=this.state.ingredientsArray.length && ingredient !== ""){
      this.setState(state => {
        const ingredientsArray = [...state.ingredientsArray, ingredient]
        return {
          ...state,
          ingredientsArray
        }
      })
      this.props.fetchIngredientDetails(ingredient, index)
      this.setState(({ alertIngredients }) => ({
        alertIngredients: new Set(alertIngredients).add(index)
      }));
    } else if (ingredient !== this.state.ingredientsArray[index] && ingredient !== ""){
      this.setState(state => {
        const ingredientsArray = state.ingredientsArray.map((item, i) => {
          if (index === i) {
            return ingredient;
          } else {
            return item;
          }
        });
        return {
          ...state,
          ingredientsArray
        };
      });
      this.props.fetchIngredientDetails(ingredient, index)
      this.setState(({ alertIngredients }) => ({
        alertIngredients: new Set(alertIngredients).add(index)
      }));
    } else if(index<this.state.ingredientsArray.length-1 && ingredient === ""){
      this.setState(state => {
        const ingredientsArray = state.ingredientsArray.filter((item, i) => index !== i);
        return {
          ...state,
          ingredientsArray
        };
      });
      this.props.fetchIngredientDetails(ingredient, index)
      this.setState(({ alertIngredients }) => ({
        alertIngredients: new Set(alertIngredients).delete(index)
      }));
    } 
    console.log(this.state.ingredientsArray)
  }

  ingredientWasEntered = ()=>{
    
  }

  render() {
    return (
    <div className={stylesRecipeEditor.page}>
      <div className={stylesRecipeEditor.SectionTitle}>
        <input 
          className={stylesRecipeEditor.titleInput} 
          placeholder="Insert Title Here"
          type="text"
          name="recipeTitle"
          value={this.state.recipeTitle}
          onChange={this.onChange}
        />
      </div>
      
      <div>Example #1</div>
      
      <Formik
        initialValues={{ ingredients: [''] }}
        onSubmit={values =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        } 
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="ingredients"
              render={arrayHelpers => (
                <div>
                  {values.ingredients && values.ingredients.length > 0 
                  ? (
                      values.ingredients.map((ingredient, index) => (
                        <div key={index}>
                          <Field 
                            name={`ingredients.${index}`} 
                            onBlur={e=>{
                              console.log(e.currentTarget.value)
                              if(e.currentTarget.value!=="" && index === values.ingredients.length-1){
                                console.log(values.ingredients.length)
                                arrayHelpers.push('')
                              } else if(e.currentTarget.value === "" && index !== values.ingredients.length-1){
                                arrayHelpers.remove(index)
                              }
                            }}
                            onKeyDown={(e)=>{
                              if ((e.charCode || e.keyCode) === 13){
                                e.preventDefault()
                                if(index === values.ingredients.length-1 && e.currentTarget.value !== ''){
                                  arrayHelpers.push('')
                                }
                              }
                            }}
                            component={Input}
                            placeholder="enter ingredient"
                          />
                        </div>
                      ))
                    ) 
                  : (
                      <button type="button" onClick={() => arrayHelpers.push('')}>
                        {/* show this when user has removed all ingredients from the list */}
                        Add a friend
                      </button>
                  )}
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )

        }
      </Formik>


      <div>Example #2</div>
      <Formik
      initialValues={{
        friends: [{
          name: '',
          email: '',
        }]
      }}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ values, isSubmitting, handleBlur, setFieldValue }) => (
        <Form>
          <FieldArray name="friends">
            {({ push, remove }) => (
              <>
                {values.friends &&
                  values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <Field name={`friends[${index}].name`}>
                          {({ field, form }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="Jane Doe"
                            />
                          )}
                        </Field>
                        <ErrorMessage name={`friends[${index}].name`}>
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="col">
                        <Field
                          name={`friends[${index}].email`}
                          type="text"
                          placeholder="jane@example.com"
                        />
                        <ErrorMessage name={`friends[${index}].email`}>
                          {msg => <div className="field-error">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="col">
                        <button type="button" onClick={() => remove(index)}>
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => push({ name: '', email: '' })}
                  className="secondary"
                >
                  Add Friend
                </button>
              </>
            )}
          </FieldArray>
          <button type="submit" disabled={isSubmitting}>
            Invite
          </button>
        </Form>
      )}
    </Formik>



      <div className={stylesRecipeEditor.SectionUploadPhoto}>
        <div className={stylesRecipeEditor.uploadArea}>
          <input className={stylesRecipeEditor.FileInput} type="file"></input> 
          <span>Upload Image</span>
        </div>
      </div>
      <div className={stylesRecipeEditor.SubSectionDuration}>
          <h4>Prep Time: 1 h 15 min</h4>
          <h4>Cook Time: 1 h 15 min</h4>
        </div>      
      <div className={stylesRecipeEditor.SectionSecond}>
        <div className={stylesRecipeEditor.SubSectionIngredients}>
          <h2>Ingredients</h2>
          <UnorderedList
            itemWasSubmitted={this.ingredientWasSubmitted}
            alertSet={this.state.alertIngredients}
          />
        </div>
      </div>
      <div className={stylesRecipeEditor.SectionDirections}>
        <h2>Directions</h2>     
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIngredientDetails: (ingredient, index) => dispatch(fetchIngredientDetails(ingredient, index)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditorPageContainer);