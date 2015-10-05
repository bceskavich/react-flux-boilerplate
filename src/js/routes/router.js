import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import App from '../app';
import HomePage from '../pages/HomePage';
import LoggedInPage from '../pages/LoggedInPage';
import LoggedIn from '../wrappers/LoggedIn';

const router = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />

      <Route component={LoggedIn}>
        <Route path='/logged-in' component={LoggedInPage} />
      </Route>
    </Route>
  </Router>
);

export default router;
