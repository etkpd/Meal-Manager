import React from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);



export default Checkbox;