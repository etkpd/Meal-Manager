import React from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <div className={styles.checkboxContainer}>

  <label className={styles.filterinput}>
    <input type={type} name={name} checked={checked} onChange={onChange} />
    <span className={styles.checkmark}></span>
    {name}
  </label>
  </div>
);


export default Checkbox;