import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { checkUserSession } from "./redux/user/user.actions";
import "./main.scss";

// Containers (pages)
import Login from "./containers/Login";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Reset from "./containers/Reset";
import IngredientSearch from "./containers/IngredientSearch"

// HOC's
import WithAuth from "./hoc/WithAuth";
import WithNotAuth from "./hoc/WithNotAuth";
import WithUserError from "./hoc/WithUserError";

// Layouts
import MainLayout from "./Layouts/MainLayout";
import Random from "./containers/Random";


const WithUserErrorReset = WithUserError(Reset);
const WithUserErrorRegister = WithUserError(Register);
const WithUserErrorLogin = WithUserError(Login);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <WithNotAuth>
              <MainLayout>
                <WithUserErrorLogin />
              </MainLayout>
            </WithNotAuth>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <WithNotAuth>
              <MainLayout>
                <WithUserErrorRegister />
              </MainLayout>
            </WithNotAuth>
          )}
        />
        <Route
          path="/reset"
          render={() => (
            <WithNotAuth>
              <MainLayout>
                <WithUserErrorReset />
              </MainLayout>
            </WithNotAuth>
          )}
        />
        <Route
          path="/random"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Random />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/ingredients"
          render={() => (
            <WithAuth>
              <MainLayout>
                <IngredientSearch />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/favs"
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
