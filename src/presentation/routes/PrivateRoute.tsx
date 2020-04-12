import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils/Authenticate';
import { RouteProps } from 'react-router-dom';

type TPrivateRoute = {
  path: string;
} & RouteProps;

const PrivateRoute: React.SFC<TPrivateRoute> = ({
  component,
  ...rest
}: TPrivateRoute) => {
  return isLogin() ? (
    <Route {...rest} component={component} />
  ) : (
    <Route {...rest} component={() => <Redirect to="/login" />} />
  );
};

export default PrivateRoute;
