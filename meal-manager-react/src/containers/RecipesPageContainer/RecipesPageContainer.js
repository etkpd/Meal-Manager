import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom"

import * as Button from "../../components/Buttons/Button"
import RecipesCardsContainer from '../RecipesCardsContainer/RecipesCardsContainer';
// eslint-disable-next-line
import MealFilterContainer from '../MealFilterContainer/MealFilterContainer';
// eslint-disable-next-line
import HorizontalPaginator from '../../components/pagination/HorizontalPaginator/HorizontalPaginator';

import {fetchRecipes} from "../../actions/RecipesActions"

import styles from './RecipesPageContainer.module.scss';


class RecipesContainer extends React.Component {
  state = {
    book: null
  };
   
  componentDidMount() {
    if (this.props.recipes.length === 0 ){
      this.props.fetchThoseRecipes() 
    }
  } 

  render() {
    return (
    <>
      <div className={styles.containergrid}>
        <div className={styles.item1}>
           <MealFilterContainer/> 
        </div>
        <div className={styles.recipeButton}>
          <Link to="/recipe/editor/0" className={styles.nav__link}>
            <Button.Add
              label='Add Recipes'
              type='button'
            />
          </Link>
          {/* <Button.Request_Recipes
            label='Search Recipes'
            enabled={this.state.searchButtonEnabled}
            onClick={this.queryRecipes}
            type='button'
          /> */}
        </div>
        <div className={styles.item2}>
        {
          (this.props.recipes.length )
            ? <RecipesCardsContainer 
                recipes={this.props.recipes}
                history={this.props.history}
                match={this.props.match}
                location={this.props.location} 
              />
            : null
        }
        </div>
      {/*   <div className={styles.item3}>
          <HorizontalPaginator
            history={this.props.history}
            match={this.props.match}
            location={this.props.location} 
          />
        </div> */}
    {/*     {console.log("this.props.history")}
        {console.log(this.props.history)}
      {console.log(this.props.match)}
      {console.log(this.props.location)}  */}
        
              {/* console.log(this.props.recipes) */}

      </div>
        
    </>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThoseRecipes : () => dispatch(fetchRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);