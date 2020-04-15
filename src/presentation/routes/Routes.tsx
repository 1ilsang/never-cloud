import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { LoginView, WrapView } from '../../presentation/view/index';

const Routes: React.SFC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/login" component={LoginView} />
        <PrivateRoute path="/" component={WrapView} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
export default Routes;
