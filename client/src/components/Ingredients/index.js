import React from 'react';
import './styles.scss';

function Ingredients({ name }) {
  return (
    <label>
      <input type='checkbox' value={name} />
      <span>{name}</span>
    </label>
  );
}

export default Ingredients;
