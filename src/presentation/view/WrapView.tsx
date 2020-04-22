import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import {
  ContentContainer,
  FooterContaier,
  HeaderContainer,
} from '../container';

const WrapView: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [isFirst, setIsFirst] = useState(true);

  // REVIEW: URL init, immutable
  useEffect(() => {
    if (isFirst) {
      const redirectUrl =
        window.localStorage.getItem(`LAST_VIEW_KEY`) || `/photo/all`;
      setIsFirst(false);
      history.push(redirectUrl);
    }
  }, [isFirst, history]);

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
