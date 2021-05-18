import React from 'react';

import Header from '../components/Header';
function MainLayout(props) {
  return (
    <>
      <Header {...props} />
      {props.children}
    </>
  );
}

export default MainLayout;
