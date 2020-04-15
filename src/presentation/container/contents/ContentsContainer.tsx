import React, { FunctionComponent, useState } from 'react';
import { Route } from 'react-router-dom';
import { LNBContainer } from './LNB';
import { SpecialContainer } from './special';
import styled from 'styled-components';

const ContentsContainer: FunctionComponent<{}> = () => {
  const [isViewLNB, setIsViewLNB] = useState(true);
  // - 공유 - 함께보기에서 만들면 기존애들 사라져야 하는거
  // TODO: API Loading...
  // TODO: LazyLoading
  // TODO: Virtual Card Box - height fix, width flex
  // TODO: Modal
  // TODO: ContextAPI

  const onLNBHandler = () => setIsViewLNB(!isViewLNB);

  return (
    <>
      {isViewLNB ? <LNBContainer /> : null}
      {/* REVIEW: Sub-Router with Render Props. */}
      <RightWrap>
        <Route
          path="/special"
          render={(props) => (
            <SpecialContainer
              {...props}
              onLNBHandler={{ handler: onLNBHandler, isViewLNB }}
            />
          )}
        />
      </RightWrap>
    </>
  );
};

const RightWrap = styled.div`
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
  left: 250px;
  right: 0;
  bottom: 0;
  padding: 55px 0 30px 0;
`;

export default ContentsContainer;
