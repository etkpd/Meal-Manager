import React from 'react';
import Checkbox from './Checkbox/Checkbox';
import styles from './Checkboxes.module.scss';


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
    //console.log(item);
    const isChecked = e.target.checked;
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
              key={item.key}
              name={item.name} 
              checked={this.state.checkedItems.get(item.name)} 
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