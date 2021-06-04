import React from 'react';
import './styles.scss';

function RadioFilter({ name, type, handleOnCheck }) {
  return (
    <label>
      <input type='radio' name={type} value={name} onChange={handleOnCheck} />
      <span>{name}</span>
    </label>
  );
}

export default RadioFilter;
