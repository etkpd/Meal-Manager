import React from 'react';

const Input = ({
  field,
  form: { touched, errors },
  name,
  placeholder,
}) => {
  return (
    <input 
      type="number" {...field} 
      id={name}
      placeholder={placeholder}
    />
  );
};

export default Input;