import React from "react";
import RecipeEditorPageContainer from '../containers/RecipeEditorPageContainer/RecipeEditorPageContainer'
import RecipeDetailsPageContainer from '../containers/RecipeDetailsPageContainer/RecipeDetailsPageContainer'
import api from "../api";

class RecipePage extends React.Component {
  state={
    recipeDetails: null
  }    

  componentDidMount(){
    if(this.props.match.params.id !== undefined){
      api.recipe.GetRecipe(this.props.match.params.id).then((response)=>{
        console.log(response.data.recipe)
        this.setState({recipeDetails: response.data.recipe})
      })
    }
  } 

  render() {
    //eslint-disable-next-line
    const { history, match, location } = this.props

    if(location.pathname === '/recipe/editor/0'){
      return <RecipeEditorPageContainer/>
    }
    if(this.state.recipeDetails === null){
      return null
    }
    return (
      <RecipeDetailsPageContainer
        {...this.state.recipeDetails}
      /> 
    );
  }
}

export default RecipePage;