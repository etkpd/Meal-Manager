import React from "react";
import RecipesPageContainer from "../containers/RecipeContainer/RecipesPageContainer"

class RecipesPage extends React.Component {
  render() {
    return (
    <>
        <RecipesPageContainer
          history={this.props.history}
          match={this.props.match}
          location={this.props.location}
        />  
       
    </>
    );
  }
}

export default RecipesPage;