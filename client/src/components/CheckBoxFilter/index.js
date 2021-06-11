import React from 'react';
import './styles.scss';

function CheckBoxFilter({ name, type, handleOnCheck, ...otherProps }) {
  return (
    <label>
      <input
        type='checkbox'
        name={type}
        value={name}
        onChange={handleOnCheck}
        {...otherProps}
      />
      <span>{name}</span>
    </label>
  );
}

export default CheckBoxFilter;
