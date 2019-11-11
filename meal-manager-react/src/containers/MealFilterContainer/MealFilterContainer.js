import React from "react";
import {connect} from "react-redux";
import {fetchFilters} from "../../actions/FiltersActions"
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
    console.log('MealFilterContainer mounted')
     if (this.props.filters.length<1){
      this.props.fetchFilters() 
    }
  }

  onCriteriaCycle = () => {
    if(!this.state.searchButtonEnabled){
      this.setState({ searchButtonEnabled: true});
    }
  }

  render() {
    const {filters} = this.props;

    return (
    <div className={styles.mealfiltercontainer}>

      {(this.props.filters.length<1)
        ? null
        : filters.map(filter => (
          <>
          <FilterGroupButtons
            filter={filter}
            onCriteriaCycle={this.onCriteriaCycle}
            history={this.props.history}
            match={this.props.match}
          />
          </>
        )) 
      }
      <Button.Request_Recipes
        label='Search Recipes'
        enabled={this.state.searchButtonEnabled}
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
    fetchFilters : () => dispatch(fetchFilters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealFilterContainer);