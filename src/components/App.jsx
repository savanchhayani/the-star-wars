import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './Login';
import Home from '../containers/Home';
import PrivateRoute from '../routing/PrivateRoute';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login} />
            <PrivateRoute
              path='/lists'
              // isAuthenticated
              redirectionPath='/login'
            >
              <Home />
            </PrivateRoute>
          </Switch>
      </Router>
    )
  }
}
