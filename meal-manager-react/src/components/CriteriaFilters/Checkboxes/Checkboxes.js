import React from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './Checkboxes.module.scss';
import checkboxes_sample from './checkboxes_sample';


class Checkboxes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    console.log(e.target.checked);
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  
  render() {
    return (
      <div className={styles.filterinputs} >
        {
          checkboxes_sample.map(item => (
            <Checkbox 
              key={item.key}
              name={item.name} 
              checked={this.state.checkedItems.get(item.name)} 
              onChange={this.handleChange} 
            />
          ))
        }
      </div>
    );
  }
}

export default Checkboxes;