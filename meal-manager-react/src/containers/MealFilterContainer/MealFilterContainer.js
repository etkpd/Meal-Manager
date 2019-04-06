import React from "react";
//import {connect} from "react-redux";
import FilterCategory from '../../components/CriteriaFilters/FilterCategory/FilterCategory';
import Checkboxes from '../../components/CriteriaFilters/Checkboxes/Checkboxes';

import styles from './MealFilterContainer.module.scss';


class MealFilterContainer extends React.Component {
  state = {
    book: null
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
      
      <FilterCategory></FilterCategory>
      <Checkboxes></Checkboxes>
      <FilterCategory></FilterCategory>
      <Checkboxes></Checkboxes>
    
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