import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';

import {AppRoute} from '../../const';
import Main from '../main/main';
import Profile from '../profile/profile';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

function App() {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main className="page page--index" />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.PROFILE}
          render={() => <Profile />}
        >
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
