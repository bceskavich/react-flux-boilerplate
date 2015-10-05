import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from '../app';
import HomePage from '../pages/HomePage';
import LoggedInPage from '../pages/LoggedInPage';
import LoggedIn from '../wrappers/LoggedIn';

let history = createHashHistory();
if (DEPLOY !== 'static') {
  history = createBrowserHistory();
}

const router = (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />

      <Route component={LoggedIn}>
        <Route path='/logged-in' component={LoggedInPage} />
      </Route>
    </Route>
  </Router>
);

export default router;
