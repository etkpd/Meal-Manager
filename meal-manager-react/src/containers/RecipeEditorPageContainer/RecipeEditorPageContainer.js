import React from "react";
import {connect} from "react-redux";
import UnorderedList from "../../components/List/UnorderedList/UnorderedList"
//import IngredientConfirmationModal from "../../components/modals/IngredientConfirmationModal/IngredientConfirmationModal"
import stylesRecipeEditor from "./RecipeEditorPageContainer.module.scss"
import { fetchIngredientDetails } from "../../actions/RecipeActions"
import IngredientsSectionContainer from "./IngredientsSectionContainer/IngredientsSectionContainer";

class RecipeEditorPageContainer extends React.Component {
  state = {
    recipeTitle: '',
    directionsList: [],
    ingredientsMap: new Map(),
    alertIngredients: new Set([]),
    ingredientsArray: new Array([])
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
    /* if(ingredient !== this.state.ingredientsMap.get(index)){
      console.log('ingredient:', ingredient)
      console.log('ingredient from state:', this.state.ingredientsMap.get(index))
      console.log('ingredients Map:', this.state.ingredientsMap)
      this.setState(prevState => ({ 
        ingredientsMap: prevState.ingredientsMap.set(index, ingredient) 
      }));
      if(ingredient !==""){
        try{
          //this.props.fetchIngredientDetails(ingredient, index)
          this.setState(({ alertIngredients }) => ({
            alertIngredients: new Set(alertIngredients).add(index)
          }));
        } catch(error){
          console.log("ERROR!", error)
        }
      }
    } else if(ingredient !== this.state.ingredientsMap.get(index) && ingredient === ""){
      return null
    } */

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
        <IngredientsSectionContainer/>
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