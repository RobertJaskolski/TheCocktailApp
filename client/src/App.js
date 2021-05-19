import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession, signOutUserStart } from './redux/user/user.actions';
import './main.scss';
// Containers (pages)
import Login from './containers/Login';
import Home from './containers/Home';
import Register from './containers/Register';
import Reset from './containers/Reset';

// HOC's
import WithAuth from './hoc/WithAuth';

// Layouts
import MainLayout from './Layouts/MainLayout';

function App() {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutUserStart());
  };

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />
        <Route
          path='/login'
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path='/register'
          render={() => (
            <MainLayout>
              <Register />
            </MainLayout>
          )}
        />
        <Route
          path='/reset'
          render={() => (
            <MainLayout>
              <Reset />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
