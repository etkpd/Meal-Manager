import React from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './Checkboxes.module.scss';
//import queryString from 'query-string';


class Checkboxes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
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
    const isChecked = e.target.checked;

   /*  
    this.props.history.push({
      pathname: this.props.match.path,
      search: striing
    }) 
 */

    //console.log(this.state.checkedItems);
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  
  render() {
    const {checkboxes_sample, ifClicked} = this.props;

    return (
      <div className={styles.filterinputs} >
        {
          checkboxes_sample.map(item => (
            <Checkbox 
              key={item}
              name={item} 
              checked={this.state.checkedItems.get(item)} 
              onChange={this.handleChange} 
              ifClicked={ifClicked}
            />  

          ))
        }
      </div>
    );
  }
}

export default Checkboxes;