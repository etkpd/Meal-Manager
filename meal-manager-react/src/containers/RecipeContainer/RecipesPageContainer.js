import React from "react";
import {connect} from "react-redux";
import { Route } from "react-router-dom"

import RecipeCardsContainer from '../RecipeCardsContainer/RecipeCardsContainer';
import MealFilterContainer from '../MealFilterContainer/MealFilterContainer';

import {fetchRecipes} from "../../actions/RecipesActions"

import styles from './RecipesPageContainer.module.scss';


class RecipeContainer extends React.Component {
  state = {
    book: null
  };
  componentDidMount() {
    if (this.props.recipes.length === 0 ){
      this.props.fetchThoseRecipes() 
    }
  }

  componentWillReceiveProps(){
    //console.log("recipes will be recieved")
  }



  render() {
    return (
    <>
      <div className={styles.containergrid}>
        <div className={styles.item1}>
          <MealFilterContainer></MealFilterContainer>
        </div>
        <div className={styles.item2}>
         <Route
          path="/recipes"
          render={() => 
            <RecipeCardsContainer 
              recipes={this.props.recipes}
              history={this.props.history}
              match={this.props.match}
              location={this.props.location} 
            />
          }
        />
           
        {/*   {(this.props.recipes.length )
            ? <RecipeCardsContainer 
                recipes={this.props.recipes}
                history={this.props.history}
                match={this.props.match}
                location={this.props.location}
              />  
            : 'No Recipes yet. Wait one second.'
          } */}
        </div>

  {/*       {console.log(this.props.recipes)}
 */}

        {/* <div className={styles.item3}><p>3</p></div>
        <div className={styles.item4}><p>4</p></div>
        <div className={styles.item5}><p>5</p></div>
        <div className={styles.item6}><p>6</p></div>
        <div className={styles.item7}><p>7</p></div> */}
        
      </div>
        
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



export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);