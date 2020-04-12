import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LoginContainer } from '../container';

const LoginView: FunctionComponent<RouteComponentProps> = ({ history }) => {
  return <LoginContainer history={history} />;
};

export default LoginView;
