import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/user/user.actions';
import './main.scss';
// Containers (pages)
import Login from './containers/Login';
import Home from './containers/Home';
import Register from './containers/Register';
import Reset from './containers/Reset';

// HOC's
import WithAuth from './hoc/WithAuth';
import WithNotAuth from './hoc/WithNotAuth';
// Layouts
import MainLayout from './Layouts/MainLayout';

function App() {
  const dispatch = useDispatch();

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
            <WithNotAuth>
              <MainLayout>
                <Login />
              </MainLayout>
            </WithNotAuth>
          )}
        />
        <Route
          path='/register'
          render={() => (
            <WithNotAuth>
              <MainLayout>
                <Register />
              </MainLayout>
            </WithNotAuth>
          )}
        />
        <Route
          path='/reset'
          render={() => (
            <WithNotAuth>
              <MainLayout>
                <Reset />
              </MainLayout>
            </WithNotAuth>
          )}
        />
        <Route
          path='/favs'
          render={() => (
            <WithAuth>
              <MainLayout>
                <h1>Favs</h1>
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
