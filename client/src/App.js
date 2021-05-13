import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './containers/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login page</Link>
      </div>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        {/* <Route path="/">
            <Home />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
