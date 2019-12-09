import React, { Component } from 'react';

class IngredientsSectionContainer extends Component {

  
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
      <div>
        <h2>Ingredients</h2>
        <UnorderedList
          itemWasSubmitted={this.ingredientWasSubmitted}
          alertSet={this.state.alertIngredients}
        />
      </div>
    );
  }
}

export default IngredientsSectionContainer;