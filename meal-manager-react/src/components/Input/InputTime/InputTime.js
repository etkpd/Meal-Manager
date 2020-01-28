import React from 'react';
import styleInputTime from './InputTime.module.scss'

const Input = ({
  field,
  form: { touched, errors },
  name,
  placeholder,
  min,
  max
}) => {
  return (
    <input 
      type="number" {...field} 
      id={name}
      className={styleInputTime.timeInput}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  );
};

export default Input;