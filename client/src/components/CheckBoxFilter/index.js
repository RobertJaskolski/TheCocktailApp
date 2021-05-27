import React from 'react';
import './styles.scss';

function CheckBoxFilter({ name, type }) {
  return (
    <label>
      <input type='checkbox' name={type} value={name} />
      <span>{name}</span>
    </label>
  );
}

export default CheckBoxFilter;
