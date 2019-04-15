import React from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange, ifClicked, hidden}) => (

      <div className={styles.checkboxContainer}>
        <label>
          <input type={type} className={styles.filledin} name={name} checked={checked} onChange={onChange}  onClick={ifClicked}/>
          <span style={(hidden)?{display:'none'}:{}}>{name}</span>
        </label>
      </div>
);


export default Checkbox;