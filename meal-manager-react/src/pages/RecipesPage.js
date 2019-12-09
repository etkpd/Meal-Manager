import React from "react";
import RecipesPageContainer from "../containers/RecipesPageContainer/RecipesPageContainer"

class RecipesPage extends React.Component {
  render() {
    return (
      <>
      {console.log("RecipesPage render")}
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