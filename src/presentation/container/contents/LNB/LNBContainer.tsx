import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import CorpInfoContainer from './CorpInfoContainer';
import MyInfoContainer from './MyInfoContainer';
import FloatingContainer from './FloatingContainer';
import { SnbAreaContainer } from './SNB';

const LNBContainer: FunctionComponent<{ isDisplay: boolean }> = ({
  isDisplay,
}) => {
  return (
    <LNBWrap isDisplay={isDisplay}>
      <ScrollWrap>
        <MyInfoContainer />
        <SnbAreaContainer />
        <CorpInfoContainer />
        <FloatingContainer />
      </ScrollWrap>
    </LNBWrap>
  );
};

const LNBWrap = styled.div<{ isDisplay: boolean }>`
  display: ${({ isDisplay }) => (isDisplay ? `block` : `none`)};
  position: absolute;
  z-index: 20;
  top: 55px;
  bottom: 30px;
  width: 250px;
  padding-bottom: 67px;
  border-right: 1px solid #c4c3c3;
  background-color: #fff;
  line-height: normal;
  box-sizing: border-box;
`;

const ScrollWrap = styled.div`
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar-thumb {
    background-color: #c9c9c9;
    border-radius: 8px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
`;

export default LNBContainer;
