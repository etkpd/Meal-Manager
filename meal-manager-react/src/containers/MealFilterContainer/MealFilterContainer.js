import React from "react";
//import {connect} from "react-redux";

import {connect} from "react-redux";
import {fetchFilters} from "../../actions/FiltersActions"


//import { Redirect } from 'react-router-dom';
 
//import axios from 'axios';


import styles from './MealFilterContainer.module.scss';
import FilterGroup from "../../components/CriteriaFilters/Filter Group/FilterGroup";


class MealFilterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenCategory: false,
    }
  }


  componentDidMount() {
    console.log('MealFilterContainer mounted')
     if (this.props.filters.length < 1 ){
      this.props.fetchFilters() 
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
            <FilterGroup
              filter={filter}
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
    filters: state.filters.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilters : () => dispatch(fetchFilters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealFilterContainer);