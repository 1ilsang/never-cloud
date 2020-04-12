import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import {
  ContentContainer,
  FooterContaier,
  HeaderContainer,
} from '../container';

const WrapView: FunctionComponent<RouteComponentProps> = ({ history }) => {
  return (
    <WrapViewDiv>
      <HeaderContainer history={history} />
      <ContentContainer />
      <FooterContaier />
    </WrapViewDiv>
  );
};

const WrapViewDiv = styled.div``;

export default WrapView;
