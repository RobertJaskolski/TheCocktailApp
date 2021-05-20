import React from 'react';
import './styles.scss';
function Button({ children, ...otherProps }) {
  return <button {...otherProps}>{children}</button>;
}

export default Button;
