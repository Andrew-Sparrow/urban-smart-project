import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';

import {AppRoute} from '../../const';
import Main from '../main/main';
import NotFound from '../not-found/not-found';

function App() {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main className="page page--gray page--index" />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
