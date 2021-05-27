import React from 'react';
import './styles.scss';

function RadioFilter({ name, type }) {
  return (
    <label>
      <input type='radio' name={type} value={name} />
      <span>{name}</span>
    </label>
  );
}

export default RadioFilter;
