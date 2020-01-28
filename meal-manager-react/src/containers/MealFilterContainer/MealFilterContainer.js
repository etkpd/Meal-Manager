import React from "react";
import {connect} from "react-redux";
import {fetchFilters} from "../../actions/FiltersActions"
import {fetchFilteredRecipes} from "../../actions/RecipesActions"
import * as Button from "../../components/Buttons/Button"
//import { Redirect } from 'react-router-dom';
 //import axios from 'axios';
import styles from './MealFilterContainer.module.scss';
import FilterGroupButtons from "../../components/CriteriaFiltersButtons/FilterGroupButtons/FilterGroupButtons";

class MealFilterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenCategory: false,
      searchButtonEnabled: false
    }
  }

  componentDidMount() {
     if (this.props.filters.length<1){
      this.props.fetchFilters() 
    }
  }
 
  enableSearchButton = () => {
    if(!this.state.searchButtonEnabled){
      this.setState({ searchButtonEnabled: true});
    }
  }
 
 /*   componentWillMount=() =>{
    this.props.fetchFilters() 
  } */

  queryRecipes= () => {
    this.props.fetchFilteredRecipes()
    this.setState({searchButtonEnabled: false})
  }

  render() {
    const {filters} = this.props;

    if(filters.length<1){
      return null
    }
    
    return (
    <div className={styles.mealfiltercontainer}>
      {console.log("MealFilterContainer was rendered")}
      <div className={styles.filterArea}>
        {
          filters.map(filter => (
            <FilterGroupButtons
              key={filter.group_title}
              filter={filter}
              enableSearchButton={this.enableSearchButton}
            />
          )) 
        }
      </div>
      <Button.Request_Recipes
        label='Search Recipes'
        enabled={this.state.searchButtonEnabled}
        onClick={this.queryRecipes}
        type='button'
      />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilters : () => dispatch(fetchFilters()),
    fetchFilteredRecipes: () => dispatch(fetchFilteredRecipes()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealFilterContainer);