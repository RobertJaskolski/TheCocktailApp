import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession, signOutUserStart } from './redux/user/user.actions';
import Login from './containers/Login';
import WithAuth from './hoc/WithAuth';

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
            <>
              <h1>Home page</h1>
            </>
          )}
        />
        <Route path='/login' render={() => <Login />} />
        <Route
          path='/auth'
          render={() => (
            <WithAuth>
              <h1>Auth page</h1>
              <span onClick={signOut}>Logout</span>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
