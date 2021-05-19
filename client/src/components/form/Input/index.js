import React from 'react';
import './styles.scss';

function Input({ handleChange, label, ...otherProps }) {
  return (
    <>
      {label && <label>{label}</label>}
      <input onChange={handleChange} {...otherProps} />
    </>
  );
}

export default Input;
