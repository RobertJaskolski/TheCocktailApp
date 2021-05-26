// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import checkPropTypes from 'check-prop-types';
// Import your own reducer
import rootReducer from '../redux/rootReducer';

export const INIT_STATE = {
  user: {
    currentUser: null,
    userErr: '',
    resetPasswordSuccess: false,
  },
};

function render(
  component,
  {
    INIT_STATE,
    store = createStore(rootReducer, INIT_STATE),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

const checkProps = (component, props) => {
  const error = checkPropTypes(
    component.propTypes,
    props,
    'props',
    component.name
  );
  return error;
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, checkProps };
