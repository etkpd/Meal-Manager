import React from "react";
//import {connect} from "react-redux";
import FilterCategory from '../../components/CriteriaFilters/FilterCategory/FilterCategory';
import Checkboxes from '../../components/CriteriaFilters/Checkboxes/Checkboxes';
import checkboxes_sample from './checkboxes_sample';

import {connect} from "react-redux";
import {fetchFilters} from "../../actions/FiltersActions"


//import { Redirect } from 'react-router-dom';
 
//import axios from 'axios';


import styles from './MealFilterContainer.module.scss';


class MealFilterContainer extends React.Component {
  state = {
    clicked: false
  };

  componentDidMount() {
    console.log('mounted')
     if (this.props.filters.length < 1 ){
      this.props.fetchThoseFilters() 
    }
  }

/* 
  componentWillReceiveProps(){
  }
 */


  render() {
    const {filters} = this.props;

    return (
    <div className={styles.mealfiltercontainer}>

      {(this.props.filters.length < 1)
        ? <h1>Loading</h1>
        : filters.map(filter => (
            <>
            <Checkboxes
              title={filter.group_title}              
              className={styles.mealfitler_checkbox}
              foods={filter.foods}
              ifClicked={this.props.ifClicked}
              history={this.props.history}
              match={this.props.match}
            />
            </>
          )) 
      }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.requestFilters.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThoseFilters : () => dispatch(fetchFilters())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(MealFilterContainer);