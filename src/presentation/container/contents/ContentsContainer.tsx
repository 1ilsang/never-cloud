import React, { FunctionComponent, useState } from 'react';
import { Route } from 'react-router-dom';
import { LNBContainer } from './LNB';
import { SpecialContainer } from './special';
import styled from 'styled-components';
import { TaskContainer } from './task';
import { PhotoAllContainer } from './photo';

const ContentsContainer: FunctionComponent<{}> = () => {
  const [isViewLNB, setIsViewLNB] = useState(true);
  // - 공유 - 함께보기에서 만들면 기존애들 사라져야 하는거
  // TODO: API Loading...
  // TODO: Virtual Card Box - height fix, width flex
  // TODO: Modal
  // TODO: ContextAPI

  const onLNBHandler = () => setIsViewLNB(!isViewLNB);
  const onSearchHandler = () => console.log(`searchClick`);

  return (
    <>
      {/* REVIEW: Display-none: Repaint :: NOT REFLOW */}
      <LNBContainer isDisplay={isViewLNB} />
      {/* REVIEW: Sub-Router with Render Props. */}
      <RightWrap isFull={!isViewLNB}>
        <TaskContainer
          onLNBHandler={onLNBHandler}
          onSearchHandler={onSearchHandler}
        />
        <Route
          path="/special"
          render={(props) => <SpecialContainer {...props} />}
        />
        <Route
          path="/photo/all"
          render={(props) => <PhotoAllContainer {...props} />}
        />
      </RightWrap>
    </>
  );
};

const RightWrap = styled.div<{ isFull: boolean }>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${({ isFull }) => (isFull ? '0px' : '250px')};
  right: 0;
  bottom: 0;
  padding: 55px 0 30px 0;

  // TODO: 여기서부터 해결해야함.
  .check_all {
    display: inline-block;
    height: 26px;
    width: 27px;
    margin-right: 10px;
    border: 1px solid #cbcbcb;
    background-color: #f8f8f8;
    vertical-align: top;
    text-align: center;
  }
`;

export default ContentsContainer;
