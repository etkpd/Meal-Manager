import React from 'react';

const InputTitle = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
    <input type="text" {...field} {...props} />
  );
};

export default InputTitle;