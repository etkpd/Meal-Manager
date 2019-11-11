import React, { Component } from 'react';
import FilterTitle from '../FilterTitle/FilterTitle';
import Checkbuttons from '../Checkbuttons/Checkbuttons';

class FilterGroupButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenCategory: false,
    }

  }

  toggleState = () =>{
    this.setState({
      hiddenCategory: !this.state.hiddenCategory
    });
    console.log(this.state.hiddenCategory)
  }

  render() {
    const {filter} = this.props
    return (
      <div>
        <FilterTitle
          hiddenCategory = {this.state.hiddenCategory}
          toggleState = {this.toggleState}
          title={filter.group_title}
        />
        <Checkbuttons
          key={filter.foods[1]}
          foodGroup={filter.group_title}
          onCriteriaCycle={this.props.onCriteriaCycle}
          foods={filter.foods}
          hiddenCategory={this.state.hiddenCategory}  
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}

export default FilterGroupButtons;