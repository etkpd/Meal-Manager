import React, { Component } from 'react';
import FilterTitle from '../FilterTitle/FilterTitle';
import Checkboxes from '../Checkboxes/Checkboxes';

class FilterGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
      itemsChecked: [],
      hiddenCategory: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  toggleState = () =>{
    this.setState({
      hiddenCategory: !this.state.hiddenCategory
    });
    console.log(this.state.hiddenCategory)
  }

  handleChange(e) {
    console.log(e.target);
   // const category = this.props.title
    const item = e.target.name;
    const isChecked = e.target.checked;

   /*  
    this.props.history.push({
      pathname: this.props.match.path,
      search: striing
    }) 
 */

this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

    // add to object of arrays (push() or filter())
    if (isChecked) {
    
      /* this.setState(itemsChecked: {...this.state.checkedItems, ...carObject} ) */
    }
    else {

    }

    // use queryString.stringify on object of arrays to create a search string for history.push method

    this.props.history.push({
      pathname: this.props.match.path,
      search: `?meat=${item}`
    }) 
  
    console.log(this.state.itemsChecked)
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
        <Checkboxes
          key={filter.foods[1]}
          foods={filter.foods}
          hiddenCategory={this.state.hiddenCategory}  
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}

export default FilterGroup;