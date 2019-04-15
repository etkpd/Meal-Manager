import React from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './Checkboxes.module.scss';
//import queryString from 'query-string';


class Checkboxes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
      hiddenCategory: false
    }

    this.handleChange = this.handleChange.bind(this);
  }


/* 
  updateQueryred = () =>{
    const striing = queryString.stringify({grain: ['rice'], meat: ['chicken'], vegetable: ['spinach', 'brussel sprouts']});
    console.log(striing);

    this.props.history.push({
      pathname: this.props.match.path,
      search: striing
    }) 

    const anobject=queryString.parse(striing);
    console.log(anobject);
  }
 */
  handleChange(e) {
    const item = e.target.name;
    console.log(e.target)
    const isChecked = e.target.checked;

 /*    if (isChecked) {
        this.props.history.push({
          pathname: this.props.match.path,
          search: '?color=blue' `?`
        }) 
    

    } */
   /*  
    this.props.history.push({
      pathname: this.props.match.path,
      search: striing
    }) 
 */

    //console.log(this.state.checkedItems);
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  toggleState = () =>{
    this.setState({
      hiddenCategory: !this.state.hiddenCategory
    });
    console.log(this.state.hiddenCategory)
  }
  
  render() {
    const {foods, ifClicked, title} = this.props;

    return (
      <>
      <div className={styles.filtergroupcontainer}>
      <button onClick={this.toggleState} className={(this.state.hiddenCategory)? styles.filtergroup_expanded :{}}><h3>{title}</h3></button>
      </div>

      <div className={styles.filterinputs} >
        {
          foods.map(food => (
            <Checkbox 
              key={food}
              name={food} 
              checked={this.state.checkedItems.get(food)} 
              onChange={this.handleChange} 
              ifClicked={ifClicked}
              hidden={this.state.hiddenCategory}
            />  

          ))
        }
      </div>

      </>
    );
  }
}

export default Checkboxes;