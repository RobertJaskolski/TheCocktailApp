import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/user/user.actions';
import './main.scss';

// HOC's
import WithAuth from './hoc/WithAuth';
import WithNotAuth from './hoc/WithNotAuth';
import WithUserError from './hoc/WithUserError';

// Layouts
import MainLayout from './Layouts/MainLayout';
import Random from './containers/Random';

// Containers (pages)
const Login = lazy(() => import('./containers/Login'));
const Home = lazy(() => import('./containers/Home'));
const Register = lazy(() => import('./containers/Register'));
const Reset = lazy(() => import('./containers/Reset'));


const WithUserErrorReset = WithUserError(Reset);
const WithUserErrorRegister = WithUserError(Register);
const WithUserErrorLogin = WithUserError(Login);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            </MainLayout>
          )}
        />
        <Route
          path='/login'
          render={() => (
            <MainLayout>
              <WithNotAuth>
                <Suspense fallback={<div>Loading...</div>}>
                  <WithUserErrorLogin />
                </Suspense>
              </WithNotAuth>
            </MainLayout>
          )}
        />
        <Route
          path='/register'
          render={() => (
            <MainLayout>
              <WithNotAuth>
                <Suspense fallback={<div>Loading...</div>}>
                  <WithUserErrorRegister />
                </Suspense>
              </WithNotAuth>
            </MainLayout>
          )}
        />
        <Route
          path='/reset'
          render={() => (
            <MainLayout>
              <WithNotAuth>
                <Suspense fallback={<div>Loading...</div>}>
                  <WithUserErrorReset />
                </Suspense>
              </WithNotAuth>
            </MainLayout>
          )}
        />
        <Route
          path='/random'
          render={() => (
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <Random />
              </Suspense>
            </MainLayout>
          )}
        />
        <Route
          path='/favs'
          render={() => (
            <WithAuth>
              <MainLayout>
                <Suspense fallback={<div>Loading...</div>}>
                  <h1>Favs</h1>
                </Suspense>
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
