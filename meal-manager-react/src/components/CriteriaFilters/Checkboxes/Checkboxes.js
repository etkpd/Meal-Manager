import React from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './Checkboxes.module.scss';
//import queryString from 'query-string';

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
      hiddenCategory: false,
      itemsChecked: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(){
    //decode url. extract items from relevant food category
    //update this.state.checkedItems to reflect newly updated url
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

    //console.log(this.state.checkedItems);
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
  
    console.log(this.state.checkedItems)
  }
  
  render() {
    const {foods, hiddenCategory} = this.props;

    return (
      <>
      <div className={styles.filterinputs} >
        {
          foods.map(food => (
            <Checkbox 
              key={food}
              name={food} 
              checked={this.state.checkedItems.get(food)} 
              onChange={this.handleChange} 
              hidden={hiddenCategory}
            />  
          ))
        }
      </div>
      </>
    );
  }
}

export default Checkboxes;