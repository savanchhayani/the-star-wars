import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AppPath from './AppPath';

const PrivateRoute = (props) => {
  const {
    children,
    isAuthenticated,
    redirectionPath,
    ...rest
  } = props;
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AppPath.login,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const mapState = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapState)(PrivateRoute);
