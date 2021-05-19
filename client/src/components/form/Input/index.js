import React from 'react';
import './styles.scss';

const Input = React.forwardRef(
  ({ handleChange, label, ...otherProps }, ref) => (
    <>
      {label && <label>{label}</label>}
      <input ref={ref} onChange={handleChange} {...otherProps} />
    </>
  )
);

export default Input;
