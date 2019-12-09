import React, { Component } from 'react';
import styles from './Checkbutton.module.scss'

class Checkbox extends Component {
  render() {
    const { 
      type = 'button', 
      name,
      operation = 'NONE',
      ifClicked, 
      hidden} = this.props
    return (
      <div className={styles.checkboxContainer}>
        <label>
          <input 
            type={type} 
            className={`
              ${styles.filledin}
              ${styles[operation]}`
            } 
            name={name} 
            onClick={ifClicked}
          />
          <span style={(hidden)?{display:'none'}:{}}>{name}</span>
        </label>
      </div>
    );
  }
}

export default React.memo(Checkbox);