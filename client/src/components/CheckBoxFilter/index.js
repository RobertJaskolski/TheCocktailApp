import React from 'react';
import './styles.scss';

function CheckBoxFilter({ name, type, handleOnCheck }) {
  return (
    <label>
      <input
        type='checkbox'
        name={type}
        value={name}
        onChange={handleOnCheck}
      />
      <span>{name}</span>
    </label>
  );
}

export default CheckBoxFilter;
