import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../containers/Home';
import PrivateRoute from '../routing/PrivateRoute';
import Login from '../containers/Login';
import AppPath from '../routing/AppPath';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path={AppPath.home} component={Login}/>
            <Route path={AppPath.login} component={Login} />
            <PrivateRoute path={AppPath.lists} >
              <Home />
            </PrivateRoute>
          </Switch>
      </Router>
    )
  }
}
