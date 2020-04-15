import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { LoginView, WrapView } from '../../presentation/view/index';

const Routes: React.SFC<{}> = () => {
  return (
    // REVIEW: hash router
    <HashRouter>
      <Switch>
        <Route exact={true} path="/login" component={LoginView} />
        <PrivateRoute path="/" component={WrapView} />
        <Redirect path="*" to="/" />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
