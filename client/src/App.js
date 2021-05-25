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
import WithUserError from './hoc/WithUserError';

// Layouts
import MainLayout from './Layouts/MainLayout';
import Random from './containers/Random';

const WithUserErrorReset = WithUserError(Reset);
const WithUserErrorRegister = WithUserError(Register);
const WithUserErrorLogin = WithUserError(Login);

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
            <MainLayout>
              <WithNotAuth>
                <WithUserErrorLogin />
              </WithNotAuth>
            </MainLayout>
          )}
        />
        <Route
          path='/register'
          render={() => (
            <MainLayout>
              <WithNotAuth>
                <WithUserErrorRegister />
              </WithNotAuth>
            </MainLayout>
          )}
        />
        <Route
          path='/reset'
          render={() => (
            <MainLayout>
              <WithNotAuth>
                <WithUserErrorReset />
              </WithNotAuth>
            </MainLayout>
          )}
        />
        <Route
          path='/random'
          render={() => (
            <MainLayout>
              <Random />
            </MainLayout>
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
