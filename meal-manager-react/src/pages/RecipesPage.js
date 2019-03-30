import React from "react";
import {connect} from "react-redux";
//import MealFilter from "../components/CriteriaFilters/MealFilter/MealFilter"
import CardList from "../components/cards/CardList/CardList"

import {fetchRecipes} from "../actions/RecipesActions"

class RecipesPage extends React.Component {
  state = {
    book: null
  };
  componentDidMount() {
    if (this.props.recipes.length === 0 ){
      this.props.fetchThoseRecipes() 
    }
  }

  componentWillReceiveProps(){
    console.log("recipes will be recieved")
  }


  render() {
    return (
    <>
        {/* <MealFilter></MealFilter> */}
        {(this.props.recipes.length )?  <CardList recipes={this.props.recipes}></CardList>  : console.log('no')}
        
    </>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.requestRecipes.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThoseRecipes : () => dispatch(fetchRecipes())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);