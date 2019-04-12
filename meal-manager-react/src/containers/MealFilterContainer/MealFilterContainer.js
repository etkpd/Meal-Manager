import React from "react";
//import {connect} from "react-redux";
import FilterCategory from '../../components/CriteriaFilters/FilterCategory/FilterCategory';
import Checkboxes from '../../components/CriteriaFilters/Checkboxes/Checkboxes';
import checkboxes_sample from './checkboxes_sample';


//import { Redirect } from 'react-router-dom';
 
//import axios from 'axios';


import styles from './MealFilterContainer.module.scss';


class MealFilterContainer extends React.Component {
  state = {
    clicked: false
  };
/* 
  componentDidMount() {
  
  }

  componentWillReceiveProps(){
  }
 */


  render() {
 

    return (
    <div className={styles.mealfiltercontainer}>
      
      <FilterCategory
        title="Ingredient (Meat)"
      />
      <Checkboxes
        checkboxes_sample={checkboxes_sample}
        ifClicked={this.props.ifClicked}
      />
     
      
    </div>
    );
  }
}

/* function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
 */


export default MealFilterContainer;