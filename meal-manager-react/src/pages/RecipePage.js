import React from "react";
import RecipeEditorPageContainer from '../containers/RecipeEditorPageContainer/RecipeEditorPageContainer'

class RecipePage extends React.Component {
  render() {
    //eslint-disable-next-line
    const { history, match, location } = this.props
    if(location.pathname === '/recipe/editor/0'){
      return <RecipeEditorPageContainer/>
    }
    return (
      <h1>Recipe Details Page</h1>
    );
  }
}

export default RecipePage;