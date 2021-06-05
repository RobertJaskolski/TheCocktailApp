import React from 'react';
import './styles.scss';

function RadioFilter({ name, type, handleOnCheck, ...props }) {
  return (
    <label>
      <input
        type='radio'
        name={type}
        value={name}
        onChange={handleOnCheck}
        {...props}
      />
      <span>{name}</span>
    </label>
  );
}

export default RadioFilter;
